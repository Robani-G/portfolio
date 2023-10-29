"use client"
import React from 'react'
import Layout from '../layout'
import SectionHeading from '../Sectionheading'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { myskills } from '@/app/lib/data'

function Skills() {
  return (
    <>
    <Layout clasName='' >
        <section id='Skills' className='!scroll-mt-28'>
        <SectionHeading>My Skills</SectionHeading>

{myskills.map((skill,index)=>(
 
            <Skillsimage {...skill}/>
        
))}
        </section>

    </Layout>
    </>
  )
}

export default Skills
type Skillsimage = (typeof myskills)[number];
export function Skillsimage({images}:Skillsimage) {
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
    <div className=''>
        <ul className='flex flex-wrap  gap-3 '>
            {images.map((img,index)=>(
<motion.li key={index}
 variants={fadeInAnimationVariants}
 initial="initial"
 whileInView="animate"
 viewport={{
   once: true,
 }}
 className='sm:w-14 bg-gray-200  sm:h-14 w-11 h-11 rounded-full flex  items-center justify-center'
 custom={index}
 >             
  {/* <Image quality={95} alt="Project Image" className="w-8 h-8  rounded-full object-cover m-2 " src={img}/> */}
{img}
</motion.li>
        ))}
        </ul>

    </div>
  )
}

