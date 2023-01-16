import React from "react";
import { motion } from "framer-motion";

// https://www.sivilsayfalar.org/wp-content/uploads/2017/09/greenpeace-logo-rs.jpg
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFJsDi9rJK6ZQgv5Ro9ui72xQTpe8WXg9KKnm57JRkE5rNVTwbv6_1M7LFhWNRPL6eHA&usqp=CAU
// https://www.cumhuriyet.com.tr/Archive/2018/4/13/957562_resource/Greenpeace.jpeg

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://www.cumhuriyet.com.tr/Archive/2018/4/13/957562_resource/Greenpeace.jpeg'
        alt='company'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Promoter & Activist</h4>
        <p className='font-bold text-2xl mt-1'>Greenpeace AKDENİZ</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-15 rounded-full'
            src='https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png'
            alt='jslogo'
          />
          <img
            className='h-10 w-15 rounded-full'
            src='https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png'
            alt='jslogo'
          />
          <img
            className='h-10 w-15 rounded-full'
            src='https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png'
            alt='jslogo'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>started work... ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
