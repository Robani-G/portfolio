import SectionHeading from "../Sectionheading";
import Layout from "../layout";
const Myprojects = () => {
  return (
    <Layout clasName="">
      <div className="rounded-lg">
        <SectionHeading>My Projects</SectionHeading>

        <div className="flex flex-col  gap-4 max-w-[42rem] max-h-[26rem] ">
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

type projectprop = (typeof myprojects)[number];

const Projects = ({ title, description, img, tags }: projectprop) => {
  return (
    <>
     <Layout clasName="rounded-lg p-5 bg-white" >
      <section id="Projects" className="scroll-mt-28">
      <div className=" flex  items-center justify-center ">
      <div className="w-1/2 gap-2">
      <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <ul className="flex flex-row gap-3 items-center">
          {tags.map((tag,index)=>(
            <li key={index}>
      <Image quality={95} alt="Project Image" className="w-8 h-8  rounded-full object-cover m-2 " src={tag}/>
            </li>
          ))}
        </ul>
      </div>
      <Image quality={95} alt="Project Image" className="w-1/2 " src={img}/>
      </div>
      </section>
     </Layout>
    </>
  );
};
