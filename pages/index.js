import Head from "next/head";
import Title from "./title";
import Intro from "./intro";
import Skills from "./skills";
import Projects from "./project";
import Bio from "./bio";
import Contact from "./contacts";
import Blogs from "./blogs";
import { Player } from "@lottiefiles/react-lottie-player";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import SpotifyFavSong from "./spotify";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const [currInnerWidth, setCurrInnerWidth] = useState(0);

  const { scrollY } = useScroll();
  const [y, setY] = useState(0);

  useEffect(() => {
    setCurrInnerWidth(window.innerWidth);
    return scrollY.onChange((latest) => {
      setY(latest);
    });
  }, []);

  const previewImg = "https://i.imgur.com/YWr7FcG.jpg";

  return (
    <>
      <Head>
        <title>Nate&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <link rel="canonical" href="/Portfolio" />
        <meta
          property="og:title"
          content="Nathaniel Chai Zhuo En | Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sunny7dusk.dev/" />
        <meta property="og:image" content={previewImg} />
        <meta
          name="twitter:title"
          content="Nathaniel Chai Zhuo En | Portfolio"
        />
        <meta
          name="twitter:description"
          content="Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <meta
          property="og:description"
          content="Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <meta name="twitter:image" content={previewImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="image" content={previewImg} />
        <script
          src="https://unpkg.com/github-devprofile@2/dist/card.component.min.mjs"
          type="module"
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* bg-[#171A26]  */}
      <div className="max-h-[100%] h-[100%] w-[100vw] scroll-smooth absolute">
        <div className="w-full h-[100%] relative">
          <motion.div
            transition={{ type: "spring", ease: "easeInOut" }}
            style={{
              opacity: `${1 - y / 400}`,
              translateX: `${y}px`,
            }}
            className={`mb-10 fixed snap-center w-full h-[100%] overflow-hidden flex flex-col lg:px-[4rem] px-6 sm:px-10 align-top justify-center animate ease-in-out `}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D]  to-[#84B8D9] text-lg sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl tracking-wide">
              FULL STACK <br /> DEVELOPER
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-3xl lg:text-4xl 2xl:text-7xl">
              Nate
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-xs sm:text-xl lg:text-2xl 2xl:text-4xl">
              Computer Science
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-xs sm:text-xl lg:text-2xl 2xl:text-4xl">
              Virginia Tech
            </span>
          </motion.div>

          <motion.div
            transition={{ type: "spring", ease: "easeInOut", delay: 0.25 }}
            className={`w-full fixed h-[100%] overflow-hidden`}
            style={{
              clipPath: `polygon(${90}% 0, 100% 0%, 100% 100%, ${0}% 100%)`,
              opacity: `${1 - y / 100}`,
              translateX: `${y}px`,
              translateY: `${-y}px`,
            }}
          >
            <img
              src={"/assets/dark7storm_full.webp"}
              width={1980}
              height={1080}
              className="object-cover h-[100%] w-[100vw] object-[65%]"
            />
            {/* <div className="h-[100%] bg-black opacity-25"></div> */}
          </motion.div>
        </div>

        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_pa8t2wqh.json"
          className="w-[50%] min-h-[50%] flex flex-col justify-center"
        ></Player>

        {/* ref={myRef} */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ease: "easeInOut" }}
            className="w-full flex flex-col justify-center"
            key={"intro"}
          >
            <Intro />
          </motion.div>
          <Skills />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ease: "easeInOut" }}
            className="w-full  flex flex-col justify-center align-middle mt-36 text-justify"
            key={"bio"}
          >
            <Bio />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ease: "easeInOut" }}
            className="w-full flex flex-col justify-center mt-36 text-justify align-middle"
            key={"projects"}
          >
            <Projects />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ease: "easeInOut" }}
            className="w-full flex flex-col justify-center mt-36 text-justify align-middle"
            key={"blogs"}
          >
            <Blogs />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ease: "easeInOut" }}
            className="w-full flex flex-col justify-center align-middle mt-36 text-justify"
            key={"spotify"}
          >
            <SpotifyFavSong />
          </motion.div> */}

          <Contact key={"contact"} />
        </div>
      </div>
    </>
  );
}
