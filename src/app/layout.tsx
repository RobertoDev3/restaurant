import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/lib/fonts'
import { NavBar } from '@/components/layout/navbar/navbar'

export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'Restaurant',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        style={inter.style}
        className="container mx-auto px-5 overflow-x-hidden"
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
