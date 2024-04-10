'use client';
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-gray-900">
        <li>Node.js</li>
        <li>Python</li>
        <li>PostgreSQL</li>
        <li>.NET</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Bash</li>
        <li>ASP.NET</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-gray-900">
        <li>Computer Science, Hogeschool Rotterdam (2021-2026)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-gray-950">
        <li>
          Computer Science, 
          <a 
            href="https://www.hogeschoolrotterdam.nl/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'blue' }} // Inline styles
          >
            Hogeschool Rotterdam
          </a> 
          (2021-2026)
        </li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

const handleTabChange = (id: string) => {
    setTab(id);
  }
  return (
    <section className="text-gray-800" id="about">
      <div className="h-96 overflow-">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt= "" src="/images/about-me.png" width={500} height={500} layout="fixed" className="overflow-auto flex-grow" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#558344] mb-4">About Me</h2>
          <p className="text-gray-900 lg:text-lg">
            Currently studying Computer Science at Hogeschool Rotterdam. I am passionate about learning new technologies and building software that solves real-world problems. I am a quick learner and a team player who is always looking to improve my skills and help others grow. 
          </p>
          <div className="flex flex-row justify-start mt-8 text-gray-950">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div >
          <div className="mt-8 flex-grow overflow-auto">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;