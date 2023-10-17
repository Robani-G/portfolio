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
    
      
    <html lang="en" className='  '>
      <body className={`container mx-auto dark:bg-gray-800  {bg-gradient-to-r from-purple-100 to-sky-200 }`}>
       <Flowbite>
       <Toaster position='top-right'/>
      <Header />

        {children}
        <Footer/>
       </Flowbite>
        </body>
    </html>
  )
}
