import Link from "next/link";
export default function Blogs() {
  return (
    <>
      <div className="w-[50vw] self-center">
        <span className="decoration-solid bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100">
          Wanna see what I&apos;ve been up to? Check out my{" "}
          <Link href="/blog" prefetch>
            <span className="underline decoration-solid decoration-[#A3767D]/90 underline-offset-8 hover:font-bold font-normal animation ease-in-out">
              blog
            </span>
          </Link>
          !
        </span>
      </div>
    </>
  );
}
