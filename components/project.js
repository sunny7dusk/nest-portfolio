import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="w-[70vw] self-center">
        <span className="text-slate-300 text-md sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100">
          Come take a look at{" "}
          <Link href="/projects" prefetch>
            <span className="underline decoration-solid decoration-[#F2CC85]/70 underline-offset-8 hover:font-bold font-normal animation ease-in-out cursor-pointer">
              projects
            </span>
          </Link>{" "}
          I&apos;ve done!
          {/* Woah, 123 commits on GitHub! */}
        </span>
      </div>
    </>
  );
}
