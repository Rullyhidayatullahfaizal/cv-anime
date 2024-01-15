import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'List-Anime',
  description: 'Daftar anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-100`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
