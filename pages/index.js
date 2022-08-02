import Head from "next/head";
import Title from "./title";
import Intro from "./intro";
import Skills from "./skills";
import Projects from "./project";
import Bio from "./bio";
import Contact from "./contacts";
import Blogs from "./blogs";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import SpotifyFavSong from "./spotify";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  // const picRef = useRef(null);

  const { scrollY } = useScroll();
  const [y, setY] = useState(0);

  const ref = useRef(null);
  const { scrollY: parral } = useScroll({ target: ref });
  const parallax = useParallax(parral, 500);

  useEffect(() => {
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
      <div className="max-h-[100%] h-[100%] w-[100vw] scroll-smooth absolute ">
        <div className="relative max-h-[100%] h-[100%]">
          <Title y={y} ref={ref} />
          <motion.div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            // animate={{ opacity: 1 }}
            transition={{ type: "spring", ease: "easeInOut", delay: 0.25 }}
            className={`w-full h-[100%] mb-24`}
            // clipPath: `polygon(${
            //   90 + (y / 100) * 10
            // }% 0, 100% 0%, 100% 100%, ${y <= 100 ? y : 100}% 100%)`
            style={{
              clipPath: `polygon(${90}% 0, 100% 0%, 100% 100%, ${0}% 100%)`,
              opacity: `${1 - y / 100}`,
              transform: `translateX(${y}px)`,
            }}
            ref={ref}
          >
            <img
              src={"/assets/dark7storm_full.webp"}
              width={1980}
              height={1080}
              className="object-cover h-[100%] w-[100vw] object-[65%]"
            />
            <div className="h-[100%] bg-black opacity-25"></div>
          </motion.div>

          {/* ref={myRef} */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeInOut" }}
              className="w-full flex flex-col justify-center"
              key={"intro"}
              style={{ parallax }}
            >
              <Intro />
            </motion.div>
            <Skills />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeInOut" }}
              className="w-full  flex flex-col justify-center align-middle mt-36 text-justify"
              key={"bio"}
            >
              <Bio />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ scale: 0.8 }}
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeInOut" }}
              className="w-full flex flex-col justify-center align-middle mt-36 text-justify"
              key={"spotify"}
            >
              <SpotifyFavSong />
            </motion.div>

            <Contact key={"contact"} />
          </div>
        </div>
      </div>
    </>
  );
}
