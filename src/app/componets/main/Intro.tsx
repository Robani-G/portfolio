"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/moving-border";

import {
  ArrowDownCircleIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from "framer-motion";
import Link from "next/link";
const words = " I am Picasso. I am Michelangelo. I am Steve Jobs, said Kanye. I am  Robani you know the Business,I know the Chemistry. ";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function Intro() {
  
  return (
    
    <>
      <div className="mt-9 h-[500px] items-center justify-center gap-5  sm:mt-0 sm:flex "
      id="Home">
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center"
        >
          <Image
            width={100}
            height={100}
            quality={95}
            priority={true}
            src="/ratio.png"
            alt={"Profile Pictures"}
            className="w-45 h-45 m-6 rounded-full border-2 border-white object-fill shadow "
          />
        </motion.div>
       
          <TextGenerateEffect words={words} />
      
      </div>
      <div className=" item-center mt-4 flex flex-col justify-center gap-2 px-4 sm:flex-row   ">
     
        <a
          href="/portfolio.pdf"
          className="flex w-full items-center justify-center rounded-xl bg-gray-600 hover:bg-gray-900 text-white dark:bg-gray-900 dark:hover:bg-gray-500  p-2 text-black sm:w-1/4"
        >
          Download Cv <ArrowDownCircleIcon className="h-7 w-5" />
        </a>
        <Link
          href="#Contact"
          className="flex w-full items-center justify-center rounded-xl bg-gray-900 dark:hover:bg-gray-300 dark:bg-white hover:bg-gray-600 p-2 text-white dark:text-black sm:w-1/4"
        >
          Contact me here
          <ArrowLongRightIcon className="h-5 w-7" />
        </Link>
        <div className=" item-center mt-4 flex flex justify-center gap-2 px-4    ">
        
      <a href="https://github.com/Robani-G"><AiFillGithub className="h-9 w-9 dark:text-white"/></a>
      <a href="#"><AiFillLinkedin className="h-9 w-9 dark:text-white"/></a>
      </div>
      </div>
      
    </>
  );
}

export default Intro;
