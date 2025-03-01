import { Intro } from "../components/intro";
import Skills from "../components/new-skills";
import Projects from "../components/project";
import Bio from "../components/bio";
import Blogs from "../components/blogs";

import { getClient } from "@lib/sanity.server";

import { groq } from "next-sanity";
import { HeroScrollDemo } from "components/scollHero";
import { TypewriterEffectSmooth } from "components/typewriter";
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

  return (
    <>

      <HeroScrollDemo />
      <main >
        <section

          className="w-full flex flex-col justify-center -mt-60 md:-mt-0 px-6 md:px-24"
          aria-label={"intro"}
        >
          <Intro />
        </section>

        {/* <section

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
        </section> */}

        <section

          className="w-full flex flex-col justify-center align-middle items-center px-6 md:px-24"
          aria-label={"skills"}
        >
          <Skills />
        </section>

        <section

          className="w-full  flex flex-col justify-center align-middle mt-36 px-6 md:px-24"
          aria-label={"bio"}
        >
          <Bio />
        </section>
        <section

          className="w-full flex flex-col justify-center mt-36 align-middle px-6 md:px-24"
          aria-label={"projects"}
        >
          <Projects posts={posts} />
        </section>

        <section

          className="w-full flex flex-col justify-center mt-36 align-middle px-6 md:px-24"
          aria-label={"blogs"}
        >
          <Blogs posts={postsAll} />
        </section>


        <section

          className="w-full flex flex-col justify-center mt-36 align-middle px-6 md:px-24"
          aria-label={"contact"}
        >
          <TypewriterEffectSmooth words={words} className="w-full flex justify-center"/>
        </section>
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
