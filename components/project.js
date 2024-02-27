import Link from "next/link";
import BlogCard from "./blog-card";

export default function Projects({ posts }) {
  // const { postdata } = props;
  // console.log(props);
  return (
    <>
      <div className="self-center grid grid-cols-1 lg:grid-cols-10 gap-x-3.5 justify-items-center items-center">
        <div className="lg:col-span-3 mb-10 lg:mb-0 grid grid-cols-1 gap-8">
          {posts &&
            posts.map((item) => (
              <BlogCard item={item} small key={item.slug.current} />
            ))}
        </div>
        <div className="lg:col-span-1"></div>
        <span className="text-slate-300 text-xl lg:text-2xl 2xl:text-5xl underline-light-100 lg:col-span-6">
          Come take a look at projects I&apos;ve done! Click{" "}
          <Link href="/projects" prefetch>
            <span className="underline decoration-solid decoration-[#F2CC85]/70 underline-offset-8 hover:font-bold font-normal animation ease-in-out cursor-pointer">
              here
            </span>
          </Link>{" "}
          to see more!
          {/* Woah, 123 commits on GitHub! */}
        </span>
      </div>
    </>
  );
}
