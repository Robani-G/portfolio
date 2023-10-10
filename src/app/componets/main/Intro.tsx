"use client"
import Image from "next/image";
import React from "react";
import {
  ArrowDownCircleIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";
import Link from "next/link";
function Intro() {
  return (
    <>
      <div className="mt-9 h-[400px] items-center justify-center gap-5   sm:mt-0 sm:flex "
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
            quality={100}
            priority={true}
            src="/profile.jpg"
            alt={"Profile Pictures"}
            className="w-50 h-50 m-6 rounded-full border-2 border-white shadow "
          />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="mx-2 max-w-[50rem] rounded-xl  bg-white p-2 px-4 text-2xl font-medium leading-relaxed text-gray-600 sm:text-3xl">
            Hello❤️I'm {""}
            <span className=" font-bold text-black">Robani Girma! </span>A
            full-stack developer with {""}
            <span className=" font-bold text-black">2 </span>
            Years of experience and a degree in {""}
            <span className=" font-bold text-black">Computer Science </span>I
            enjoy building websites.My foucus is {""}
            <span className=" font-bold text-black">React(Next.js) </span>
          </p>
        </motion.div>
      </div>
      <div className=" item-center mt-4 flex flex-col justify-center gap-2 px-4 sm:flex-row  ">
        <a
          href="/portfolio.pdf"
          className="flex w-full items-center justify-center rounded-lg bg-white  p-2 text-black sm:w-1/3"
        >
          Download Cv <ArrowDownCircleIcon className="h-7s w-5" />
        </a>
        <Link
          href="#Contact"
          className="flex w-full items-center justify-center rounded-lg bg-gray-900 p-2 text-white  sm:w-1/3"
        >
          Contact me here
          <ArrowLongRightIcon className="h-5 w-7" />
        </Link>
      </div>
    </>
  );
}

export default Intro;
