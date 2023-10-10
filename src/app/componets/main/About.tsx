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

        <p className="  max-w-[70rem] rounded-xl p-2 px-4 text-2xl font-medium leading-relaxed text-gray-600 sm:text-3xl">
          A strong Computer Science Engineering resume should emphasize the
          candidate's ability to design and develop software applications that
          drive user engagement and improve system performance. Highlighting
          experience in implementing automated testing processes and
          collaborating with cross-functional teams showcases the candidate's
          ability to increase productivity and software quality. Additionally,
          showcasing expertise in developing and maintaining complex database
          systems, software security processes, and configuration management
          processes demonstrates the candidate's versatility and ability to
          contribute to various aspects of a project.
        </p>
      </div>
    </Layout>
      
    </>
  );
}

export default About;
