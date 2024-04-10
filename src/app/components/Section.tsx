'use client';
import React from "react";
import { TypeAnimation } from "react-type-animation";
import GithubIcon from '../../../public/github-mark.svg';
import LinkedinIcon from '../../../public/iconmonstr-linkedin-3.svg';
import Image from 'next/image';


const Section = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-[#558344] mb-4 text-4xl marker:lg:text-6xl font-extrabold">
            {" "}
            <span className="">Hello, i&apos;m </span>
            <br />
            <TypeAnimation
              sequence={["Ceyda", 3000, "Computer Science Student", 3000]}
              wrapper="span"
              speed={10}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-800 text-lg lg:text-xl font-semibold">
            {" "}
            I am a second year Computer Science student at Hogeschool Rotterdam.
            I am passionate about software development and I am always looking
            for new opportunities to learn and grow. I am currently looking for
            an internship in the field of software development.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-5 py-6">
        <a
          href="https://github.com/Ceydag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black text-lg ">
            <Image src={GithubIcon} alt="Github" width={30} height={28} />
          </button>
        </a>
        <a
          href="https://linkedin.com/in/ceyda-genc-84360a2b4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black text-lg ">
            <Image src={LinkedinIcon} alt="Linkedin" width={30} height={30} />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Section;