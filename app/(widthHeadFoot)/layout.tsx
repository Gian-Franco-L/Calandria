import React from 'react'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import WppIcon from '@/components/WppIcon/WppIcon'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} id='body'>
        <NavBar />
        {children}
        <Footer />
        <WppIcon />
      </body>
    </html>
  )
}
