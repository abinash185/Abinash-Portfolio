import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abinash Kumar – Full Stack & GenAI Developer',
  description: 'Building scalable web applications and AI-powered products with React, Next.js, Node.js, PostgreSQL & MongoDB. SDE 1 at Teampumpkin.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
