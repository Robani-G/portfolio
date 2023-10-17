"use client";
import React from 'react'
import Layout from '../layout'
import SectionHeading from '../Sectionheading'
import { Experiences } from '@/app/lib/data';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Timeline,Button } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

function Experience() {
  return (
    
    <Layout clasName=''>
    <section id='Experience' className='relative border-l border-gray-200 dark:border-gray-700 scroll-mt-28'>
            <SectionHeading>
                My Experience
            </SectionHeading>
      <Timeline className=''>
      {

Experiences.map((exp,index)=>(


  <Timeline.Item key={index} className='mb-10 ml-6'>
  <Timeline.Point className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-3 ring-white dark:bg-gray-900 dark:ring-gray-900' />
  <Timeline.Content className='mt-3 sm:pr-8'>
    <Timeline.Time className='dark:text-gray-500'>
{exp.date}    </Timeline.Time>
    
   <h1 className='dark:text-white'>{exp.title}</h1>
    <Timeline.Body>
      <p>
      {exp.description}
      </p>
      <Timeline.Time className='dark:text-gray-500'>
{exp.location}    </Timeline.Time>
    </Timeline.Body>
  </Timeline.Content>
</Timeline.Item>


))}

      </Timeline>
        </section>
    </Layout>
        
        
       
 

                    
        
  )
}

export default Experience