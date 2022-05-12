import Head from 'next/head';
import Title from './title';
import Intro from './intro';
import Skills from './skills';
import Projects from './project';
import Bio from './bio';
import Contact from './contacts';
import Blogs from './blogs';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [y, setY] = useState(0);
  const [prevY, setPrevY] = useState(y);

  useEffect(() => {
    let handleScroll = () => {
      setY((curr) => {
        setPrevY(curr);
        return window.scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let changingHeight = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', changingHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', changingHeight);
    };
  }, []);

  const previewImg = '/assets/dark7storm_full.webp';

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
          content='Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with React.'
        />
        <meta
          name='og:description'
          content='Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with React.'
        />
        <meta name='twitter:image' content={previewImg} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='image' content={previewImg} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
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
            style={{
              clipPath: `polygon(${
                y !== 0 ? 100 : 90
              }% 0, 100% 0%, 100% 100%, ${y * 2}% 100%)`,
            }}
          >
            <Image
              src={'/assets/dark7storm_full.webp'}
              layout='fill'
              objectFit='cover'
              objectPosition={'65%'}
              quality={100}
              alt='background image'
            />
            <div className='h-[100%] bg-black opacity-25'></div>
          </div>
          <Title y={y} prevY={prevY} />
          <Intro y={y} />
          <Skills y={y} />
          <Bio />
          <Projects y={y} />
          <Blogs y={y} />
          <Contact y={y} />
        </div>
      </div>
    </>
  );
}
