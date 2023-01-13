import Intro from "../components/intro";
import Skills from "../components/new-skills";
import Projects from "../components/project";
import Bio from "../components/bio";
import Blogs from "../components/blogs";
import computerAnim from "../public/assets/computer.json";
import Lottie from "lottie-react";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import { getClient } from "@lib/sanity.server";

import { groq } from "next-sanity";

export default function Home(props) {
  const { data } = props;
  const { posts, postsAll } = data;
  const { scrollY } = useScroll();
  const [y, setY] = useState(0);

  useEffect(() => {
    // setCurrInnerWidth(window.innerWidth);
    window.scrollTo(0, 0);
    return scrollY.onChange((latest) => {
      setY(latest);
    });
  }, []);
  setY({});
  return (
    <>
      <section className="w-full h-[100vh] relative tracking-wide">
        <motion.div
          transition={{ type: "spring", ease: "easeInOut" }}
          style={{
            opacity: `${1 - y / 400}`,
            translateX: `${y}px`,
          }}
          className={`select-none mb-10 fixed snap-center w-full h-[100%] overflow-hidden flex flex-col lg:px-[4rem] px-6 sm:px-10 align-top justify-center animate ease-in-out `}
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
            alt="Hero image"
          />
        </motion.div>
      </section>

      <div className="flex flex-col justify-center items-center">
        <Lottie
          animationData={computerAnim}
          autoPlay
          loop
          className="w-[50%] min-h-[50%]"
        />
      </div>

      <main>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center"
          aria-label={"intro"}
        >
          <Intro />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center items-center"
          aria-label={"skills"}
        >
          <Skills />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full  flex flex-col justify-center align-middle mt-36 "
          aria-label={"bio"}
        >
          <Bio />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center mt-36 align-middle"
          aria-label={"projects"}
        >
          <Projects posts={posts} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center mt-36 align-middle"
          aria-label={"blogs"}
        >
          <Blogs posts={postsAll} />
        </motion.section>
      </main>
    </>
  );
}

const query = groq`
*[_type == "post" && $keyword in categories[]->title] | order(_createdAt desc) {
  ...,
  author->,
  categories[]->,
  "imageUrl": mainImage.asset->url,
  excerpt,
}[0..2]
`;

const queryAll = groq`
*[_type == "post" && (!("Projects" in categories[]->title))] | order(_createdAt desc) {
  ...,
  author->,
  categories[]->,
  "imageUrl": mainImage.asset->url,
  excerpt,
}[0..2]
`;

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(query, { keyword: "Projects" });
  const postsAll = await getClient(preview).fetch(queryAll);

  return {
    props: {
      preview,
      data: { posts, postsAll },
    },
    revalidate: 600,
  };
}
