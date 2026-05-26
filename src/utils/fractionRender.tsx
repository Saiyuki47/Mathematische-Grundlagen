import React from 'react'

interface FractionNode {
  type: 'text' | 'fraction'
  value?: string
  num?: string
  den?: string
}

/**
 * Parse a string containing fractions and return a React element with vertical fraction rendering.
 * Matches:
 *   - (expr) / (expr)  — both parenthesized
 *   - expr / (expr)    — only denominator parenthesized
 *   - (expr) / expr    — only numerator parenthesized
 *   - expr / expr      — both unparenthesized (e.g., 1/2, 2k²/(4k²+6k³))
 * Recursively renders fractions inside numerators and denominators.
 */
export function renderFractions(input: string): React.ReactNode {
  if (!input) return null

  // Match fractions with flexible numerator/denominator formats:
  // - (expr) or non-whitespace/non-slash sequence
  // - also handles one level of nested parens, e.g. −(a−b) as denominator
  // Separated by / with optional whitespace
  const regex = /((?:\((?:[^()]*|\([^)]*\))*\)|[^\s/()]+))\s*\/\s*((?:\((?:[^()]*|\([^)]*\))*\)|[^\s/()]+))/g
  const nodes: FractionNode[] = []
  let lastIndex = 0
  let match

  // Find all fractions and store text + fraction nodes
  while ((match = regex.exec(input)) !== null) {
    // Add text before this fraction
    if (match.index > lastIndex) {
      nodes.push({
        type: 'text',
        value: input.slice(lastIndex, match.index),
      })
    }

    let num = match[1]
    let den = match[2]

    // Strip outer parentheses if present
    if (num.startsWith('(') && num.endsWith(')')) {
      num = num.slice(1, -1)
    }
    if (den.startsWith('(') && den.endsWith(')')) {
      den = den.slice(1, -1)
    }

    // Add fraction node
    nodes.push({
      type: 'fraction',
      num,
      den,
    })

    lastIndex = regex.lastIndex
  }

  // Add remaining text after last fraction
  if (lastIndex < input.length) {
    nodes.push({
      type: 'text',
      value: input.slice(lastIndex),
    })
  }

  // If no fractions found, return original string
  if (nodes.length === 0) {
    return input
  }

  // Render nodes, recursively processing numerators and denominators
  return (
    <>
      {nodes.map((node, i) =>
        node.type === 'text' ? (
          <React.Fragment key={i}>{node.value}</React.Fragment>
        ) : (
          <span key={i} className="fraction">
            <span className="fraction-num">{renderFractions(node.num || '')}</span>
            <span className="fraction-bar" />
            <span className="fraction-den">{renderFractions(node.den || '')}</span>
          </span>
        ),
      )}
    </>
  )
}
