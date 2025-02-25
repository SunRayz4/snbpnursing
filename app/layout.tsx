import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SNBP',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            rel="stylesheet"
          />
        </head>
      <body>{children}</body>
      
    </html>
  )
}
