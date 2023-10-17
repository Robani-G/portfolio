import lulawi from "public/lulawi.png";
import reactjs from "public/reactss.jpg"
import nextjs from"public/nextttt.png"
import tailwindcss from "public/ta.jpg"
import typescript from "public/OIP.jpg"
import laravel from "public/laravel.jpg"
import php from "public/php.png"
import git from "public/git.jpg"

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
    title: "Lulawi",
    description:
      "I worked as a front-end developer on this project,Used for a Promotion",
    tags: [reactjs,nextjs,tailwindcss,typescript],
    img: lulawi,
    link:"lulawi.com"
  },
  {
    title: "Lulawi",
    description:
      "I worked as a front-end developer on this project,Used for a Promotion",
    tags: [reactjs,nextjs,tailwindcss,typescript],
    img: lulawi,
    link:"lulawi.com"
  },
] as const;
export const myskills=[
  {
    images:[reactjs,nextjs,tailwindcss,typescript,laravel,php,git]
  }
  
]as const;
export const Experiences=[

  {
    title:"Html,Css,Javascript",
    location:"",
    description:"I learned these first from youtube ",
    date:"Jan 1 2019"
  }, {
    title:"React,Nextjs",
    location:"",
    description:"After mastering on the fundamentals front-end stack I learned these  efficient reusable front-end frame work",
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