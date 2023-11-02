import lulawi from "public/lulawi.png";
import emalog from "public/Emalog.png";
import moga from "public/moga1.png";


import {AiFillGithub,AiFillHtml5 } from 'react-icons/ai';
import {FaReact,FaLaravel,FaPhp} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {BiLogoFirebase} from 'react-icons/bi'

import {SiTypescript,SiTrpc, SiMysql,SiSanity,SiPrisma} from 'react-icons/si'
import {BiLogoTailwindCss,BiLogoJavascript,BiLogoCss3} from 'react-icons/bi'



import React from "react";


export const links = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Projects",
    hash: "#Projects",
  },
  {
    name: "Skills",
    hash: "#Skills",
  },
  {
    name: "Experience",
    hash: "#Experience",
  },
  {
    name: "Contact",
    hash: "#Contact",
  },
 
] as const;
export const myprojects = [
  {
    title: "Moga",
    description:
      "I worked as a full-stack developer on this project,this is a charity website",
    tags: [      React.createElement(FaReact),
      React.createElement(BiLogoTailwindCss),
      React.createElement(SiTypescript),
      React.createElement(TbBrandNextjs),
      React.createElement(SiSanity),

      ],
    img: moga,
    link:"https://moga-charity.vercel.app/"
  },
  {
    title: "Lulawi",
    description:
      "I worked as a front-end developer on this project,Used for a Promotion",
    tags: [      React.createElement(FaReact),
      React.createElement(BiLogoTailwindCss),
      React.createElement(SiTypescript),
      React.createElement(TbBrandNextjs),
      ],
    img: lulawi,
    link:"lulawi.com"
  },
  {
    title: "Emalog",
    description:
      "I worked as a back-end developer on this project for a year,I was working to  develop Emalog  service customer registration system.",
    tags: [      React.createElement(FaPhp),
      React.createElement(BsFillBootstrapFill),
      React.createElement(SiMysql),
      ],
    img: emalog,
    link:"emalog.gov.et"
  }
] as const;

export const myskills=[
  {title:'Git',
  image:      React.createElement(AiFillGithub),
  },
{title:'React',
  image:     
  React.createElement(FaReact),},
  {title:'Nextjs',
  image:    
  React.createElement(TbBrandNextjs)},
  {  title:'Laravel',
  image:      
  React.createElement(FaLaravel),
},
 { title:'PHP',
  image:    
    
  React.createElement(FaPhp)},
{  title:'Typescript',
  image:    
  React.createElement(SiTypescript)},

{  title:'Trpc',
  image:     
  React.createElement(SiTrpc)},
  {  title:'Html',
  image:     
  React.createElement(AiFillHtml5)},
  {  title:'Css',
  image:     
  React.createElement(BiLogoCss3)},
  {  title:'Javascript',
  image:     
  React.createElement(BiLogoJavascript),
},
{  title:'Sanity io',
image:     
React.createElement(SiSanity),
},
{  title:'Prisma',
image:     
React.createElement(SiPrisma),
},
{  title:'Firebase',
image:     
React.createElement(BiLogoFirebase),
}
]as const;
export const Experiences=[

  {
    title:"Html,Css,Javascript",
    location:"",
    description:"I learned these fundamentals first from highschool. ",
    date:"Jan 1 2019"
  }, {
    title:"React,Nextjs",
    location:"",
    description:"After mastering on the fundamentals front-end stack I learned these  efficient reusable front-end frame work ",
    date:"Feb 2020"
  },
  {
    title:"PHP,Laravel,MySql",
    location:"",
    description:"As a full stack developer built my first project",
    date:"July 20 2021"
  },
  {
    title:"Prisma,typescript,tRPC",
    location:"",
    description:"Learned how to  integrate with api and  typescripting ",
    date:"July 20 2022"
  },
  {
    title:"Graduated at Unity University",
    location:"Addis Ababa",
    description:"Bachelor degree in Computer Science",
    date:"July 27 2022"
  },
]as const;