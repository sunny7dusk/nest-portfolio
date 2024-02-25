import { Intro } from "../components/intro";
import Skills from "../components/new-skills";
import Projects from "../components/project";
import Bio from "../components/bio";
import Blogs from "../components/blogs";

// import computerAnim from "../public/assets/computer.json";
// import Lottie from "lottie-react";

import { motion } from "framer-motion";

import { getClient } from "@lib/sanity.server";

import { groq } from "next-sanity";
import { HeroScrollDemo } from "components/scollHero";
import { TypewriterEffectSmooth } from "components/typewriter";
// import { MacbookScroll } from "components/macbook";
// import code from "../public/assets/code.png"
const words = [
  {
    text: "Interested?",
  },
  {
    text: "Contact",
  },
  {
    text: "me!",
  },
  {
    text: "👇"
  },
]
export default function Home(props) {
  const { data } = props;
  const { posts, postsAll } = data;
  // const { scrollY } = useScroll();
  // const [y, setY] = useState(0);
  // const [furry, setFurry] = useState(false);

  // useEffect(() => {
  //   // setCurrInnerWidth(window.innerWidth);
  //   window.scrollTo(0, 0);
  //   return scrollY.onChange((latest) => {
  //     setY(latest);
  //   });
  // }, []);

  return (
    <>
      {/* <HeroParallax products={postToProduct} /> */}

      <HeroScrollDemo />
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center -mt-60 md:-mt-0 px-6 md:px-24"
          aria-label={"intro"}
        >
          <Intro />
        </motion.section>

        {/* <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center -mt-60 md:-mt-0 px-6 md:px-24"
          aria-label={"macbook"}
        >
          <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src={code}/>
        </motion.section> */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center items-center px-6 md:px-24"
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
          className="w-full  flex flex-col justify-center align-middle mt-36 px-6 md:px-24"
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
          className="w-full flex flex-col justify-center mt-36 align-middle px-6 md:px-24"
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
          className="w-full flex flex-col justify-center mt-36 align-middle px-6 md:px-24"
          aria-label={"blogs"}
        >
          <Blogs posts={postsAll} />
        </motion.section>


        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-full flex flex-col justify-center mt-36 align-middle px-6 md:px-24"
          aria-label={"contact"}
        >
          <TypewriterEffectSmooth words={words} className="w-full flex justify-center"/>
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

const queryPics = groq`
*[_type == "post" && $keyword in categories[]->title] | order(_createdAt desc) {
  ...,
  "imageUrl": mainImage.asset->url,
}[0..8]
`;

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(query, { keyword: "Projects" });
  const postsAll = await getClient(preview).fetch(queryAll);
  const pics = await getClient(preview).fetch(queryPics, { keyword: "Projects" });

  return {
    props: {
      preview,
      data: { posts, postsAll, pics },
    },
    revalidate: 600,
  };
}
