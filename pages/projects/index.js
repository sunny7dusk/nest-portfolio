import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePreviewSubscription } from '@lib/sanity';
import client, { getClient, PortableText } from '@lib/sanity.server';

import { groq } from 'next-sanity';
import { useEffect, useState } from 'react';

export default function Post(props) {
  const { postdata, preview } = props;
  const [items, setItems] = useState([]);
  const post = [...postdata];

  const router = useRouter();

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
    console.log(post);
  };

  const clickArticle = (slug, event) => {
    event.preventDefault();
    // console.log(slug);
    router.push(`/blog/${slug.current}`);
  };

  //   console.log(posts);
  return (
    <>
      <div className='w-[100vw] flex flex-col align-middle justify-center mb-16'>
        <span className='pt-8 pb-4 ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl tracking-wide text-center'>
          My Projects
        </span>
        <br />
        <div className='text-center'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl'>
            Personal / School / Work {'>.<'}
          </span>
        </div>
      </div>
      <div className='w-[100vw] grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center content-center items-center'>
        {items &&
          items.map((item) => (
            // <article >
            //   <h3 className='text-lg'> {post.title} </h3>
            //   <p className='mt-3'>{post.excerpt}</p>
            //   <img src={post.imageUrl} className='max-w-sm' />
            //   {/** categories*/}
            //   {/** author*/}
            //   {/** data */}
            // </article>
            <article
              key={item.slug.current}
              className='p-1 shadow-xl rounded-2xl bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] max-w-xs mr-8 ml-8 w-[70vw] xl:max-w-lg '
            >
              <a
                onClick={(event) => clickArticle(post.slug, event)}
                href={`*`}
                className='flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90'
              >
                <img
                  src={item.imageUrl}
                  className='max-w-sm w-sm max-h-52 object-contain self-center'
                />
                <div className='mt-12'>
                  {item.publishedAt && (
                    <p className='text-xs font-medium text-gray-500'>
                      {item.publishedAt.split('T')[0]}
                    </p>
                  )}

                  <h5 className='mt-2 text-xl font-bold text-white'>
                    {item.title}
                  </h5>
                  <div className='flex items-center justify-between mt-6'>
                    <p className='text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9]'>
                      {item.categories[0].title}
                    </p>
                  </div>
                </div>
              </a>
            </article>
          ))}
      </div>
      <div className='w-[100vw] flex flex-col align-middle justify-center mt-16 pb-16'>
        <div className='self-center m-auto'>
          <a
            className='inline-block p-[2px] rounded-full bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] hover:text-white active:text-opacity-75 focus:outline-none focus:ring'
            href=''
            onClick={(event) => action(event)}
          >
            <span className='block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent'>
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
  "imageUrl": mainImage.asset->url
}
`;

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(query, { keyword: 'Projects' });

  //   if (allItems.length === 0) allItems.push(...post);

  //   console.log(allItems);

  return {
    props: {
      postdata: post,
      preview,
    },
    revalidate: 10,
  };
}
