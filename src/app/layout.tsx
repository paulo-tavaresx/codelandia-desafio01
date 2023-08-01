import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'

const lexend_Deca = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Codelândia - desafio  01',
  description: 'Desafio 01 da comunidade codelândia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lexend_Deca.className}>{children}</body>
    </html>
  )
}
