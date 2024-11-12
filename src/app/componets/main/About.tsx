import React from "react";
import SectionHeading from "../Sectionheading";
import Layout from "../layout";
function About() {
  return (
    <>
    <Layout clasName="">
    <div
        className=" scroll-mt-28"
        id="About"
      >
        <SectionHeading>About Me</SectionHeading>
        
        <p className="  max-w-[70rem] rounded-xl p-2 px-4 text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl text-center">
        Hello, my name is Robani Girma. I'm 24 years old and a passionate web developer with over a year of  experience as a full stack developer at EthioInnovation, where I've contributed to more than three government projects. I've also worked as a local freelancer, further honing my skills and building a variety of web applications. My journey in web development began in 2018, and I've since dedicated myself to learning a wide range of technologies, including HTML, CSS, JavaScript, React, Next.js, and Laravel. I have experience in both front-end and back-end development, and I enjoy the challenge of creating innovative, dynamic, and reusable web applications that provide excellent user experiences.
        </p>
      </div>
    </Layout>
      
    </>
  );
}

export default About;
