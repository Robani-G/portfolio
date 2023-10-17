import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './componets/Header'
import { Toaster } from 'react-hot-toast'
import Footer from './componets/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robani portfolio ',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en" className='  '>
      <body className={`container mx-auto`}>
        <Toaster position='top-right'/>
      <Header />

        {children}
        <Footer/>
        </body>
    </html>
  )
}
