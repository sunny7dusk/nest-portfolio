/* eslint-disable react/no-children-prop */
// pages/posts/[slug].js
import Head from "next/head";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { FaArrowLeft } from "react-icons/fa";
import Script from "next/script";
import NotFoundPage from "pages/404";

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    "slug": slug.current,
    excerpt,
    "author": author->{
      name
    },
    publishedAt
  }
`;

// categories[]->{
//   _id,
//   title
// },

export default function Post({ data, preview }) {
  const remarkP = [remarkGfm, remarkMath];
  const rehypeP = [rehypeKatex];
  const router = useRouter();
  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });

  if (data === undefined) {
    return <NotFoundPage />;
  }

  if (router.isFallback) {
    return (
      <>
        <div className="w-[100vw] h-[100vh] flex flex-col align-middle justify-center text-center">
          <span>If it takes a while to load, come back later!</span>
        </div>
      </>
    );
  }

  if (!router.isFallback && !data.post?.slug) {
    return <NotFoundPage />;
  }

  const { title, mainImage, body, excerpt, author, publishedAt } = post;

  // console.log(post);

  const previewImg = urlFor(mainImage).url();

  return (
    <>
      <Head>
        <title>Nate&apos;s Blog | {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="description" content={excerpt} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        <meta
          property="og:title"
          content={`Nathaniel Chai Zhuo En | ${excerpt}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.sunny7dusk.dev/blog/${post.slug.current}`}
        />
        <meta property="og:image" content={previewImg} />
        <meta
          name="twitter:title"
          content={`Nathaniel Chai Zhuo En | ${excerpt}`}
        />
        <meta name="twitter:description" content={excerpt} />
        <meta property="og:description" content={excerpt} />
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
      <article className="w-[100vw] grid grid-cols-7 lg:grid-cols-5 place-content-stretch pb-8">
        <span
          onClick={() => {
            router.back();
          }}
          className="cursor-pointer col-span-7 lg:col-span-5 justify-center text-slate-400 m-8 md:m-16"
          color="#94a3b8"
        >
          <FaArrowLeft />
        </span>
        <div className="col-span-1"></div>
        <section className="grid grid-cols-3 col-span-5 lg:col-span-3 border-dashed border-gray-100">
          <h1 className="col-span-3 pt-8 lg:pb-8 ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide text-center">
            {title}
          </h1>
          <section className="col-span-3 pt-8 pb-8 ease-in-out duration-300 tracking-wide text-center text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-100">
            By {author.name} published at {publishedAt.split("T")[0]}
          </section>
          {mainImage && (
            <>
              <figure
                alt={title}
                className="col-span-3 text-center self-center flex flex-col align-middle justify-center"
              >
                <img
                  src={urlFor(mainImage).url()}
                  alt="image"
                  title={title}
                  className="rounded-lg self-center m-0"
                />
              </figure>
            </>
          )}
          <ReactMarkdown
            children={body}
            className="max-w-[100%] overflow-auto prose prose-stone lg:prose-xl bg-gray-100 rounded-lg p-8 mt-8 col-span-5 lg:col-span-3"
            remarkPlugins={remarkP}
            rehypePlugins={rehypeP}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={a11yDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </section>
        <div className="col-span-1"></div>
      </article>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  //console.log(post);

  return {
    props: {
      preview,
      data: { post },
    },
    // takes 10 minutes to invalidate cache if 10 minute passed from last visit
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(author) && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    // if a new page is not build yet, server render first then load it to cache
    fallback: "blocking",
  };
}
