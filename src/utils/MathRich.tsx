import { Children, cloneElement, Fragment, isValidElement } from 'react'
import type { ReactElement, ReactNode } from 'react'
import Frac from './Frac'
import M from './M'
import { tokenize } from './mathrich/tokenize'

// Tags, deren Inhalt bewusst Klartext bleibt: Exponenten/Indizes (sup/sub)
// behalten ihre Schrägstrich-Notation, Links ihre URLs.
const SKIP_TAGS = new Set(['sup', 'sub', 'a'])

function renderString(s: string): ReactNode {
  const tokens = tokenize(s)
  if (tokens.length === 1 && tokens[0].kind === 'text') return s
  // Stabile Schlüssel aus dem Token-Inhalt (+ Zähler für Duplikate) statt des
  // Array-Index.
  const gesehen = new Map<string, number>()
  return tokens.map(t => {
    if (t.kind === 'text') return t.value
    const inhalt = t.kind === 'frac' ? `${t.num}/${t.den}` : t.latex
    const n = (gesehen.get(inhalt) ?? 0) + 1
    gesehen.set(inhalt, n)
    const key = `${t.kind}:${inhalt}:${n}`
    if (t.kind === 'frac') return <Frac key={key} n={t.num} d={t.den} />
    return <M key={key}>{t.latex}</M>
  })
}

/**
 * Wandelt Klartext-Mathe in allen String-Knoten eines ReactNode-Baums in
 * gestapelte Notation um (Frac/M) — dieselbe Optik wie in den Lösungen.
 * Eigene Komponenten (M, Frac, Ol, …) werden nicht angefasst.
 */
export function mathRich(node: ReactNode): ReactNode {
  if (typeof node === 'string') return renderString(node)
  if (Array.isArray(node)) return Children.map(node, (child) => mathRich(child))
  if (isValidElement(node)) {
    if (node.type !== Fragment && (typeof node.type !== 'string' || SKIP_TAGS.has(node.type))) return node
    const props = node.props as { children?: ReactNode; dangerouslySetInnerHTML?: unknown }
    if (props.dangerouslySetInnerHTML || props.children == null) return node
    return cloneElement(node as ReactElement<{ children?: ReactNode }>, {}, mathRich(props.children))
  }
  return node
}
