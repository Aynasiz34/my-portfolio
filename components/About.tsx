import React from "react";
import { motion } from "framer-motion";
import Cevik from "../images/cevik.jpg";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.div
        className='relative mt-20 md:mb-0 flex-shrink-0 w-56 h-56  md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{once: true}}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[420px]'
          src={Cevik}
          alt='authors photo'
        />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          I’m Gülbettin, i studied Political Science and Public administration
          and graduated from Fatih University. While i was studying i also work
          as salesman at Greenpeace Organisation. Now i realize that my
          priorities and what i want from a job is changed and i decided to
          learn JavaScript & React.js as a start to be a front-end developer. I
          learned JavaScript and React.js by myself and still trying to be
          better developer. Now i am working on my own business projects. I
          describe myself as easy-going, easy to train, socially active,
          quick-learner, open to development and a good team-member. I can speak
          and write English fluently. My hobbies are fishing, camping,
          snowboarding, playing basketball, boxing. I also like 90's cinema.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
