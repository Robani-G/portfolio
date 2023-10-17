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
    link:"lualwi.com"
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
    title:"Graduated at Unity University",
    location:"Addis Ababa",
    description:"hello it is me as always",
    date:"July 20"
  },
  {
    title:"html",
    location:"Addis Ababa",
    description:"hello it is me as always",
    date:"ffdf 45"
  }, {
    title:"html",
    location:"Addis Ababa",
    description:"hello it is me as always",
    date:"february 29"
  }
]as const;