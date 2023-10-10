"use client"
import React from 'react'
import Layout from '../layout'
import SectionHeading from '../Sectionheading'
import { Experiences } from '@/app/lib/data';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

function Experience() {
  return (
    <>
    <Layout clasName=''>
        <div id='Experience' className='scroll-mt-28'>
            <SectionHeading>
                My Experience
            </SectionHeading>
            <VerticalTimeline>
                {
                    Experiences.map((exp,index)=>(
                        <React.Fragment key={index}>
                            <VerticalTimelineElement >
                            <h1>{exp.title}</h1>
                            <h4>{exp.location}</h4>
                            <p>{exp.description}</p>
                        </VerticalTimelineElement>
                        </React.Fragment>
                        
                    ))
                }
            </VerticalTimeline>
        </div>
        
        </Layout></>
  )
}

export default Experience