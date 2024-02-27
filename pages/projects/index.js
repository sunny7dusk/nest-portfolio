import Head from "next/head";
import { getClient } from "@lib/sanity.server";

import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

// import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "lottie-react";
import thinkingAnim from "../../public/assets/thinking.json";
import BlogCard from "components/blog-card";

export default function Post(props) {
  const { postdata } = props;
  const [items, setItems] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const post = [...postdata];

  useEffect(() => {
    setItems((prev) => {
      let toAdd = post.slice(
        prev.length,
        prev.length + 6 >= post.length
          ? post.length - items.length
          : prev.length + 6
      );
      if ([...prev, ...toAdd].length === post.length) setLoadMore(false);
      return [...prev, ...toAdd];
    });
  }, []);

  const action = (event) => {
    event.preventDefault();
    if (items.length !== post.length)
      setItems((prev) => {
        let toAdd = post.slice(
          prev.length,
          prev.length + 6 >= post.length ? post.length : prev.length + 6
        );
        if ([...prev, ...toAdd].length === post.length) setLoadMore(false);
        return [...prev, ...toAdd];
      });
    //console.log(post);
  };

  const previewImg = "https://i.imgur.com/YWr7FcG.jpg";

  return (
    <>
      <Head>
        <title>Nate&apos;s Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="description"
          content="Nate's projects powered with Sanity.io; Personal/Work/School >.<"
        />
        <link rel="canonical" href="/projects" />
        <meta property="og:title" content="Nathaniel Chai Zhuo En | Projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sunny7dusk.dev/projects" />
        <meta property="og:image" content={previewImg} />
        <meta
          name="twitter:title"
          content="Nathaniel Chai Zhuo En | Projects"
        />
        <meta
          name="twitter:description"
          content="Nate's projects powered with Sanity.io; Personal/Work/School >.<"
        />
        <meta
          property="og:description"
          content="Nate's projects powered with Sanity.io; Personal/Work/School >.<"
        />
        <meta name="twitter:image" content={previewImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="image" content={previewImg} />
        <Script
          strategy="beforeInteractive"
          id="google fonts"
          src="https://fonts.googleapis.com"
        />
        <Script
          strategy="beforeInteractive"
          id="google fonts static"
          src="https://fonts.gstatic.com"
          crossOrigin
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <section className="w-[100vw] grid grid-cols-10 lg:grid-cols-12 mb-16 pt-16 place-items-stretch">
        <div className="col-span-1"></div>
        <section className="col-span-7 lg:col-span-9 select-none">
          <span className="pt-8 pb-4 ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-xl sm:text-4xl xl:text-5xl 2xl:text-6xl tracking-wide">
            Nate&apos;s Projects!
          </span>
          <br />
          <Link href={"/"} alt="home page">
            <span className="bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-xl lg:text-2xl 2xl:text-4xl">
              Click here to go back {">.<"}
            </span>
          </Link>
        </section>
        <Lottie animationData={thinkingAnim} autoPlay loop />
        <div className="col-span-1"></div>
      </section>
      <section className="w-[100vw] grid grid-cols-12 justify-items-center content-center items-center">
        <div className="col-span-1 col-start-1"></div>
        <section className="col-span-10 grid grid-cols-1 lg:grid-cols-6 gap-16 justify-items-center content-center items-center">
          {items &&
            items.map((item) => (
              <BlogCard item={item} key={item.slug.current} />
            ))}
        </section>
        <div className="col-span-1"></div>
      </section>
      <div className="w-[100vw] flex flex-col align-middle justify-center pt-16 pb-16">
        {loadMore && (
          <div className="self-center m-auto">
            <a
              className={`inline-block p-[2px] rounded-full active:text-opacity-75 focus:outline-none focus:ring bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] hover:text-white `}
              href=""
              onClick={(event) => action(event)}
              alt="click to load more"
            >
              <span
                className={`block px-8 py-3 text-sm font-medium rounded-full hover:bg-transparent "bg-white"`}
              >
                More
              </span>
            </a>
          </div>
        )}
      </div>
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
}
`;

export async function getStaticProps({ preview = false }) {
  const post = await getClient(preview).fetch(query, { keyword: "Projects" });

  return {
    props: {
      postdata: post,
      preview,
    },
    revalidate: 10,
  };
}
