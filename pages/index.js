import Head from 'next/head';
import Title from './title';
import Intro from './intro';
import Skills from './skills';
import Projects from './project';
import Bio from './bio';
import Contact from './contacts';
import Blogs from './blogs';

import { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);
  const [y, setY] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((v) => setY(v));
  }, [scrollYProgress]);
  // const [scrollYProgress, setScrollYProgress] = useState(0);
  // const [prevY, setPrevY] = useState(0);

  // useEffect(() => {
  //   let handleScroll = () => {
  //     setScrollYProgress((curr) => {
  //       setPrevY(curr);
  //       return window.scrollY;
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   let changingHeight = () => {
  //     // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  //     let vh = window.innerHeight * 0.01;
  //     // Then we set the value in the --vh custom property to the root of the document
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   };

  //   window.addEventListener('resize', changingHeight);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('resize', changingHeight);
  //   };
  // }, []);

  const previewImg = 'https://i.imgur.com/YWr7FcG.jpg';

  return (
    <>
      <Head>
        <title>Nate's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind.'
        />
        <link rel='canonical' href='/Portfolio' />
        <meta
          property='og:title'
          content='Nathaniel Chai Zhuo En | Portfolio'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.sunny7dusk.dev/' />
        <meta property='og:image' content={previewImg} />
        <meta
          name='twitter:title'
          content='Nathaniel Chai Zhuo En | Portfolio'
        />
        <meta
          name='twitter:description'
          content='Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind.'
        />
        <meta
          property='og:description'
          content='Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind.'
        />
        <meta name='twitter:image' content={previewImg} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='image' content={previewImg} />
        <script
          src='https://unpkg.com/github-devprofile@2/dist/card.component.min.mjs'
          type='module'
        ></script>

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='snap-mandatory snap-y max-h-[100%] h-[100%] w-[100vw] bg-[#171A26] scroll-smooth absolute'>
        <div className='relative max-h-[100%] h-[100%]'>
          <div
            className={`fixed w-full h-[100%]`}
            // {y !== 0 ? 100 : 90}
            // y * 2
            style={{
              clipPath: `polygon(${
                y !== 0 ? 100 : 90
              }% 0, 100% 0%, 100% 100%, ${-y * 1001}% 100%)`,
            }}
          >
            <img
              src={'/assets/dark7storm_full.webp'}
              width={1980}
              height={1080}
              className='object-cover h-[100%] w-[100vw] object-[65%]'
            />
            <div className='h-[100%] bg-black opacity-25'></div>
          </div>
          <Title y={y} prevY={y} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            animate={{ scale: 0.8 }}
            className='w-full flex flex-col bg-[#171A26] justify-center'
          >
            <Intro />
          </motion.div>
          <Skills />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            animate={{ scale: 0.8 }}
            className='snap-center w-full  flex flex-col justify-center align-middle mt-36 text-justify'
          >
            <Bio y={y} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            animate={{ scale: 0.8 }}
            className='snap-center w-full flex flex-col justify-center mt-36 text-justify align-middle'
          >
            <Projects />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            animate={{ scale: 0.8 }}
            className='snap-center w-full  flex flex-col justify-center align-middle mt-36 text-justify'
          >
            <Blogs />
          </motion.div>

          <Contact />
        </div>
      </div>
    </>
  );
}
