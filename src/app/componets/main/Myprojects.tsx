import SectionHeading from "../Sectionheading";
import Layout from "../layout";
const Myprojects = () => {
  return (
    <Layout clasName="">
      <div className="rounded-lg scroll-mt-28 "  id="Projects">
        <SectionHeading>My Projects</SectionHeading>

        <div className="grid sm:grid-cols-2    gap-4  mb-8 ">
          {myprojects.map((pro, index) => (
            <>
              <React.Fragment key={index}>
                <Dcard {...pro} />
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
import Link from "next/link";

type projectprop = (typeof myprojects)[number];

// const Projects = ({ title, description, img, tags ,link}: projectprop) => {
//   return (
//     <>
//       <section className="rounded-xl  shadow bg-gray-100 py-5 px-3  dark:bg-gray-700 group  ">
//       <div className=" flex flex-col-reverse gap-2  sm:flex-row items-center justify-center  ">
//       <div className="sm:w-1/2 w-full space-y-2">
//       <h3 className="text-xl font-medium dark:text-white ">{title}</h3>
//         <p className="text-gray-500 dark:text-gray-300">{description}</p>
        
//         <ul className="flex  gap-2 items-center jusify-center ">
//           {tags.map((tag,index)=>(
//             <li key={index} className=" sm:w-6  sm:h-6 w-4 h-4 rounded-full bg-white flex items-center justify-center '
// ">
// {tag}      
//             </li>
//           ))}
//         </ul>
        
//       </div>
//      <a href={`http://${link}`} className="sm:w-1/2 rounded-lg  even:right-[initial]
//        even-left-40  ">
//      <Image quality={95} alt="Project Image" className=" transition rounded-lg 
//         hover:scale-[1.04]
//         hover:-translate-x-3
//         hover:translate-y-3
//         hover:-rotate-2
//       "
//          src={img}/>
//      </a>
      
//       </div>
//       <div className=" flex justify-end text-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 items-center">
//         <Link href={`http://${link}`} >Live</Link> <ArrowTopRightOnSquareIcon className="w-4 h-4 text-bold text-end  "/>
//       </div>
//       </section>
//     </>
//   );
// };


import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import astro from "public/astro1.png";
export function Dcard({title,description,img,link,tags}:projectprop) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
{title}        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
{description}        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
src={img}            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <ul className="flex  gap-2 items-center jusify-center ">
          {tags.map((tag,index)=>(
            <li key={index} className=" sm:w-6  sm:h-6 w-4 h-4 rounded-full bg-white flex items-center justify-center '
">
{tag}      
            </li>
          ))}
        </ul>
          <CardItem
            translateZ={20}
            as={Link}
            href={`http://${link}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live →
          </CardItem>
         
        </div>
      </CardBody>
    </CardContainer>
  );
}