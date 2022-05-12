import Head from 'next/head';
import Title from './Title';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contract from './Contacts';
import Blog from './Blog';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [y, setY] = useState(0);
  const [prevY, setPrevY] = useState(y);

  // const appHeight = () =>
  //   document.documentElement.style.setProperty(
  //     '--app-height',
  //     `${window.innerHeight}px`
  //   );
  // window.addEventListener('resize', appHeight);
  // appHeight();

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

  // function calcY() {
  //   console.log('y = ' + y);
  //   console.log('prevY = ' + prevY);
  //   return y / 5;
  // }

  return (
    <>
      <Head>
        <title>Nate's Portfolio</title>
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
          <Projects y={y} />
          <Blog y={y} />
          <Contract y={y} />
        </div>
      </div>
    </>
  );
}
