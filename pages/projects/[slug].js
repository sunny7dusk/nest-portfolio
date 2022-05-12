// pages/posts/[slug].js
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import { usePreviewSubscription, urlFor } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });

  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, mainImage, body, excerpt } = post;

  const previewImg = urlFor(mainImage).url();

  // console.log(post);

  return (
    <>
      <Head>
        <title>Nate's Projects | {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={excerpt} />
        <link rel='canonical' href={`/projects/${post.slug}`} />
        <meta
          property='og:title'
          content={`Nathaniel Chai Zhuo En | ${excerpt}`}
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://www.sunny7dusk.dev/projects/${post.slug.current}`}
        />
        <meta property='og:image' content={previewImg} />
        <meta
          name='twitter:title'
          content={`Nathaniel Chai Zhuo En | ${excerpt}`}
        />
        <meta name='twitter:description' content={excerpt} />
        <meta name='og:description' content={excerpt} />
        <meta name='twitter:image' content={previewImg} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='image' content={previewImg} />
      </Head>
      <article className='w-[100vw] flex flex-col align-middle justify-center'>
        <span className='pt-8 pb-8 ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl tracking-wide text-center'>
          {title}
        </span>
        {mainImage && (
          <figure className='w-[70vw] text-center self-center'>
            <img src={urlFor(mainImage).url()} className=' rounded-lg' />
          </figure>
        )}
        <ReactMarkdown
          children={body}
          className='prose prose-stone lg:prose-xl w-[90vw] m-8 self-center bg-gray-100 rounded-lg p-8'
          remarkPlugins={remarkP}
          rehypePlugins={rehypeP}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={a11yDark}
                  language={match[1]}
                  PreTag='div'
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

  return {
    props: {
      preview,
      data: { post },
    },
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
