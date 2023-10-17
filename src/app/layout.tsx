"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './componets/Header'
import { Toaster } from 'react-hot-toast'
import Footer from './componets/Footer'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';



const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Robani portfolio ',
//   description: 'Portfolio',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <Flowbite>
      
    <html lang="en" className='  '>
      <body className={`container mx-auto bg-red-200 dark:bg-yellow-300  `}>
        <Toaster position='top-right'/>
      <Header />

        {children}
        <Footer/>
        </body>
    </html>
    </Flowbite>
  )
}
