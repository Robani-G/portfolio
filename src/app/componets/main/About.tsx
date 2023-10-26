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

        <p className="  max-w-[70rem] rounded-xl p-2 px-4 text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl">
         Hello ,my name is Robani Girma  I'm 22 Years old and my passion for web devlopment strated in 2018,Since then,
         I have been  dedicated to learning and mastering various web devlopment techologies  such as  HTML,CSS,Javascript,React,Nextjs.
         I have experience for both front-end and back-end devlopment ,and I enjoy the challenge of creating  creative dynamic and reusable web application  that provide  a great user experience.
        </p>
      </div>
    </Layout>
      
    </>
  );
}

export default About;
