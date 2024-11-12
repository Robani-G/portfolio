"use client"
import React from 'react'
import Layout from '../layout'
import SectionHeading from '../Sectionheading'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { myskills } from '@/app/lib/data'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Skillsimage = (typeof myskills)[number];

function Skills() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <>
    <Layout clasName='' >

        <section id='Skills' className='!scroll-mt-28 '>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap gap-3 '>

{myskills.map((skill,index)=>(
  
 <motion.li key={index}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{
    once: true,
  }}
  className='sm:w-12 bg-gray-200  sm:h-12 w-10 h-10 rounded-full flex  items-center justify-center'
  custom={index}
  >             
 <TooltipProvider>
  <Tooltip>
    <TooltipTrigger > {skill.image}
</TooltipTrigger>
    <TooltipContent>
      <p> {skill.title}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

 </motion.li>
))}
         </ul>       

        </section>

    </Layout>
    </>
  )
}

export default Skills


