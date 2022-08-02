/* eslint-disable react/no-children-prop */
// pages/posts/[slug].js
import Head from "next/head";
import ErrorPage from "next/error";
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

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current,
    excerpt
  }
`;

export default function Post({ data, preview }) {
  const remarkP = [remarkGfm, remarkMath];
  const rehypeP = [rehypeKatex];
  const router = useRouter();

  if (data === undefined) {
    return <ErrorPage statusCode={404} />;
  }

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });

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
    return <ErrorPage statusCode={404} />;
  }

  const { title, mainImage, body, excerpt } = post;

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
      <article className="w-[100vw] flex flex-col align-middle justify-center">
        <h1 className="pt-8 pb-8 ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl tracking-wide text-center">
          {title}
        </h1>
        {mainImage && (
          <figure className="w-[70vw] text-center self-center flex flex-col align-middle justify-center">
            <img
              src={urlFor(mainImage).url()}
              alt="image"
              title={title}
              className=" rounded-lg self-center m-0"
            />
          </figure>
        )}
        <ReactMarkdown
          children={body}
          className="prose prose-stone lg:prose-xl w-[90vw] m-8 self-center bg-gray-100 rounded-lg p-8"
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
      </article>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  console.log(post);

  return {
    props: {
      preview,
      data: { post },
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
