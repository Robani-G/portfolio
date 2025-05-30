"use client"
import Image from 'next/image'
import Intro from './componets/main/Intro'
import About from './componets/main/About'
import Myprojects from './componets/main/Myprojects'
import Skills from './componets/main/Skills'
import {TimelineDemo} from './componets/main/TimelineDemo'
import Contact from './componets/main/Contact'
import { Dcard } from './componets/main/Dcard'


export default function Home() {
  return (
    <main>
        <Intro/>
        <Myprojects   />
        <About />
        <Skills/>
        {/* <Experience/> */}
        <TimelineDemo/>
        <Contact/>
      </main>
  )
}
