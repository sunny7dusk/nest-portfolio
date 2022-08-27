import Link from "next/link";
export default function Blogs() {
  return (
    <>
      <div className="w-[70vw] xs:w-[50vw] self-center">
        <span className="text-slate-300 text-md sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100">
          Wanna see what I&apos;ve been up to? Check out my{" "}
          <Link href="/blog" prefetch>
            <span className="underline decoration-solid decoration-[#A3767D]/90 underline-offset-8 hover:font-bold font-normal animation ease-in-out cursor-pointer">
              blog
            </span>
          </Link>
          !
        </span>
      </div>
    </>
  );
}
