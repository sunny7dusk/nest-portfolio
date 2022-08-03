import Head from "next/head";
import { getClient } from "@lib/sanity.server";

import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Player } from "@lottiefiles/react-lottie-player";

export default function Post(props) {
  const { postdata } = props;
  const [items, setItems] = useState([]);
  const post = [...postdata];

  useEffect(() => {
    setItems((prev) => {
      let toAdd = post.slice(
        prev.length,
        prev.length + 6 >= post.length
          ? post.length - items.length
          : prev.length + 6
      );
      return [...prev, ...toAdd];
    });
  }, []);

  const action = (event) => {
    event.preventDefault();
    if (items.length !== post.length)
      setItems((prev) => {
        let toAdd = post.slice(
          prev.length,
          prev.length + 6 >= post.length ? post.length + 1 : prev.length + 6 - 1
        );
        return [...prev, ...toAdd];
      });
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
      <div className="w-[100vw] grid grid-cols-6 lg:grid-cols-8 mb-16 mt-16 place-items-stretch">
        <div className="col-span-1"></div>
        <div className="col-span-3 lg:col-span-5">
          <span className="pt-8 pb-4 ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-xl sm:text-4xl xl:text-5xl 2xl:text-6xl tracking-wide">
            Nate&apos;s Projects!
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-4xl">
            Things I've worked on {">.<"}
          </span>
        </div>
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_ey835gd2.json"
          className="col-span-3"
        ></Player>
        <div className="col-span-1"></div>
      </div>
      <div className="w-[100vw] grid grid-cols-8 justify-items-center content-center items-center">
        <div className="col-span-1 col-start-1"></div>
        <div className="col-span-6 grid grid-cols-1 lg:grid-cols-6 gap-16 justify-items-center content-center items-center">
          {items &&
            items.map((item) => (
              <article
                key={item.slug.current}
                className="p-1 shadow-xl rounded-2xl bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] col-span-1 lg:col-span-2 w-full"
              >
                <Link href={`/projects/${item.slug.current}`}>
                  <div className="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90">
                    <img
                      src={item.imageUrl}
                      className="object-contain self-center saturate-[0.8] h-[150px] lg:h-[250px]"
                    />
                    <div className="mt-12">
                      {item.publishedAt && (
                        <p className="text-xs font-medium text-gray-500">
                          {item.publishedAt.split("T")[0]}
                        </p>
                      )}
                      <h5 className="mt-2 text-xl font-bold text-white">
                        {item.title}
                      </h5>
                      <div className="flex items-center justify-between mt-6">
                        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9]">
                          {item.categories[0].title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="w-[100vw] flex flex-col align-middle justify-center mt-16 pb-16">
        <div className="self-center m-auto">
          <a
            className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
            href=""
            onClick={(event) => action(event)}
          >
            <span className="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
              More
            </span>
          </a>
        </div>
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
