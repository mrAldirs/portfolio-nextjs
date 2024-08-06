'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'odoo',
    title: 'restaurant fairy kale',
    description:
      'Developed a restaurant management system with Odoo for a vegetarian eatery, using Python, JavaScript, and PostgreSQL for seamless integration.',
    stack: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'Postgresql' },
      { name: '+3' },
    ],
    image: '/assets/project/thumb1.png',
    live: 'https://marcoworld.co.id/',
    github: '',
  },
  {
    num: '02',
    category: 'odoo',
    title: 'clinic management',
    description:
      'Created an Odoo-based clinic management solution, streamlining workflows with Python, JavaScript, and PostgreSQL.',
    stack: [{ name: 'Python' }, { name: 'JavaScript' }, { name: 'Postgresql' }],
    image: '/assets/project/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'odoo',
    title: 'PPDB management',
    description:
      'Developed an Odoo system for school admissions, enhancing registration and tracking with Python, JavaScript, and PostgreSQL.',
    stack: [{ name: 'Python' }, { name: 'JavaScript' }, { name: 'Postgresql' }],
    image: '/assets/project/thumb3.png',
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'web',
    title: 'Dinas Budaya',
    description:
      'Developed a website for the cultural department of a local government, enhancing user experience with PHP, JavaScript, and other.',
    stack: [
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'Laravel' },
      { name: '+3' },
    ],
    image: '/assets/project/thumb4.png',
    live: '',
    github: '',
  },
  {
    num: '05',
    category: 'web',
    title: 'Kos Management',
    description:
      'Crafted an elegant Kos management website with Laravel and JavaScript, optimizing property rental processes business.',
    stack: [
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'Laravel' },
      { name: '+3' },
    ],
    image: '/assets/project/thumb5.png',
    live: '',
    github: '',
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[74vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[24px] h-[50%]'>
              {/* outline num */}
              <div className='text-7xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project title */}
              <h2 className='text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h2>
              {/* project category */}
              <div className='flex justify-start gap-4'>
                <span className='leading-none'>Category</span>
                <span className='text-lg font-bold leading-none text-accent duration-500 capitalize'>
                  {project.category} project
                </span>
              </div>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-lg text-accent'>
                      {item.name}
                      {/* remove the last coma */}
                      {index !== project.stack.length - 1 && ', '}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border border-white/30'></div>
              {/* button */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[56px] h-[56px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github repository button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[56px] h-[56px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[480px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[420px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                iconsStyles='text-primary'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
