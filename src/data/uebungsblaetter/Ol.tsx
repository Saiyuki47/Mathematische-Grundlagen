import type { ReactNode } from 'react'

/** Überstrich (Komplement) über einen beliebigen Ausdruck, z. B. <Ol>A ∪ B</Ol> = (A∪B)‾. */
export const Ol = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: 'overline' }}>{children}</span>
)
