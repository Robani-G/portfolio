import SectionHeading from "../Sectionheading";
import Layout from "../layout";
const Myprojects = () => {
  return (
    <Layout clasName="">
      <div className="rounded-lg scroll-mt-28 "  id="Projects">
        <SectionHeading>My Projects</SectionHeading>

        <div className="flex flex-col  gap-4 max-w-[42rem] max-h-[26rem] mb-8 ">
          {myprojects.map((pro, index) => (
            <>
              <React.Fragment key={index}>
                <Projects {...pro} />
              </React.Fragment>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Myprojects;
import React from "react";
import Image from "next/image";
import { myprojects } from "@/app/lib/data";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type projectprop = (typeof myprojects)[number];

const Projects = ({ title, description, img, tags ,link}: projectprop) => {
  return (
    <>
      <section className="rounded-lg  shadow bg-gray-100 p-3  dark:bg-gray-700 ">
      <div className=" flex  items-center justify-center ">
      <div className="w-1/2 gap-3">
      <h3 className="text-xl font-medium dark:text-white ">{title}</h3>
        <p className="text-gray-500 dark:text-gray-300">{description}</p>
        
        <ul className="flex  gap-2 items-center jusify-center ">
          {tags.map((tag,index)=>(
            <li key={index} className=" sm:w-6  sm:h-6 w-4 h-4 rounded-full bg-white flex items-center justify-center '
">
{tag}      
            </li>
          ))}
        </ul>
        <div className=" flex text-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 items-center">
        <a href={`http://${link}`} >Live Demo</a> <ArrowTopRightOnSquareIcon className="w-4 h-4 text-bold "/>
      </div>
      </div>
     <a href={`http://${link}`} className="w-1/2 rounded-lg ">
     <Image quality={95} alt="Project Image" className=" transition rounded-lg 
        hover:scale-[1.04]
        hover:-translate-x-3
        hover:translate-y-3
        hover:-rotate-2" src={img}/>
     </a>
      
      </div>
     
      </section>
    </>
  );
};
