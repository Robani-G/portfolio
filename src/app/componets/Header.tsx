'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

export default function Header() {
  const [activeSection, SetactiveSection] = useState("Home");
  return (
    <header className="  relative z-[999]  flex w-full justify-center  items-center mx-auto container   ">
      <motion.div
        className="fixed top-0  h-[2.5rem]  w-full   border border-white border-opacity-40 bg-white dark:bg-gray-700 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-4  sm:top-6 sm:h-[3.25rem] sm:w-[36rem] rounded-full "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}>
      
        <nav className="">
          <ul 
          className="flex sm:w-[36rem]  overflow-hidden flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-white  sm:w-[initial] sm:gap-3"
          >
            {" "}
            {links.map((link) => (
              <>
                <motion.li
                  key={link.hash}
                
                >
                  <Link
                    href={link.hash}
                    onClick={()=>SetactiveSection(link.name)}
                    className={clsx(
                      " relative flex w-full items-center justify-center py-2  sm:px-2 sm:py-3 transition hover:text-gray-950 dark:hover:text-gray-400",
                      {
                        "text-gray-950":
                          activeSection === link.name,
                      },
                    )}
                  >
                    {link.name}
                    {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
                  </Link>
                </motion.li>
              </>
            ))}
                  <DarkThemeToggle />

          </ul>
         
        </nav>
      </motion.div>
    </header>
  );
}
