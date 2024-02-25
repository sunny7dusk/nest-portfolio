import Link from "next/link";
import BlogCard from "./blog-card";

export default function Blogs({ posts }) {
  return (
    <>
      <div className="self-center grid grid-cols-1 lg:grid-cols-10 gap-x-3.5 justify-items-center items-center">
        <span className="text-slate-300 text-md sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100 lg:col-span-6">
          Wanna see what I&apos;ve been up to? Check out my blog{" "}
          <Link href="/blog" prefetch>
            <span className="underline decoration-solid decoration-[#F2CC85]/70 underline-offset-8 hover:font-bold font-normal animation ease-in-out cursor-pointer">
              here
            </span>
          </Link>
          ! {/* Woah, 123 commits on GitHub! */}
        </span>
        <div className="lg:col-span-1"></div>

        <div className="lg:col-span-3 mt-10 lg:mt-0 grid grid-cols-1 gap-8">
          {posts &&
            posts.map((item) => (
              <BlogCard item={item} small key={item.slug.current} />
            ))}
        </div>
      </div>
    </>
  );
}
