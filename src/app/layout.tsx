/* import type { Metadata } from 'next'
import { Inter } from 'next/font/google' */
import localfont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: '--font-roboto'
});


const myFont = localfont({
  src :[{
    path: '../fonts/ProximaNova.ttf',
    weight: '400',
  }],
  variable: '--font-nova'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${myFont.variable} ${roboto.variable}`} >
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
