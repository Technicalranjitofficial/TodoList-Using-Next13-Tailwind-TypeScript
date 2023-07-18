import { TodosProvider } from '@/store'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List ',
  description: 'Todo list using nextjs , context-api,type script,tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TodosProvider>

        {children}
      </TodosProvider>
        </body>
    </html>
  )
}
