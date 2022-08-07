export default function Bio() {
  return (
    <>
      <div className="w-[70vw] sm:w-[50vw] self-center">
        <span className="text-slate-300 text-md sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100">
          Here&apos;s my story so far :<br />
        </span>
      </div>
      <ul
        aria-label="timeline"
        className="relative mt-4 w-[70vw] sm:w-[50vw] text-sm sm:text-xl lg:text-2xl 2xl:text-5xl self-center text-slate-300 lg:text-slate-500 "
      >
        <li className="hover:text-slate-300 animation ease-in-out duration-100 list-none border-l-2 border-slate-400 pb-4">
          <div className="absolute rounded-full border bg-[#A3767D] w-3 h-3  mt-1.5 -left-1.5 md:w-5 md:h-5  md:mt-2.5 md:-left-2.5"></div>
          <time className="p-2 sm:p-4 text-xs sm:text-md lg:text-xl 2xl:text-4xl">
            2019
          </time>
          <div className="p-2 sm:p-4">
            Finished the American Degree Transfer Program at KDU Damansara Jaya
          </div>
        </li>

        <li className="hover:text-white animation ease-in-out duration-100 list-none border-l-2 border-slate-400 pb-4">
          <div className="absolute rounded-full border bg-[#F2CC85] w-3 h-3  mt-1.5 -left-1.5 md:w-5 md:h-5  md:mt-2.5 md:-left-2.5"></div>
          <time className="p-2 sm:p-4 text-xs sm:text-md lg:text-xl 2xl:text-4xl">
            {" "}
            2019 (Ongoing)
          </time>
          <div className="pt-2 pl-2 pb-2 sm:pt-4 sm:pl-4 sm:pb-4">
            Studying Computer Science at{" "}
            <nav aria-label="computer science at virginia tech">
              <a
                href="https://cs.vt.edu/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Virginia Tech
              </a>{" "}
              as a Senior
            </nav>
          </div>
        </li>
        <li className="hover:text-white animation ease-in-out duration-100 list-none border-l-2 border-slate-400 pb-4">
          <div className="absolute rounded-full border bg-[#84B8D9] w-3 h-3  mt-1.5 -left-1.5 md:w-5 md:h-5  md:mt-2.5 md:-left-2.5"></div>
          <time className="p-2 sm:p-4 text-xs sm:text-md lg:text-xl 2xl:text-4xl">
            2021 (Ongoing)
          </time>
          <div className="pt-2 pl-2 pb-2 sm:pt-4 sm:pl-4 sm:pb-4">
            Social Media and Communications Lead,{" "}
            <nav aria-label="google developer student clubs at virginia tech">
              <a
                href="https://sites.google.com/vt.edu/dscvt"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Google Developer Student Club at Virginia Tech
              </a>
            </nav>
          </div>
        </li>
        <li className="hover:text-white animation ease-in-out duration-100 list-none border-l-2 border-slate-400 pb-4">
          <div className="absolute rounded-full border bg-[#A3767D] w-3 h-3  mt-1.5 -left-1.5 md:w-5 md:h-5  md:mt-2.5 md:-left-2.5"></div>
          <time className="p-2 sm:p-4 text-xs sm:text-md lg:text-xl 2xl:text-4xl">
            2021 (Ongoing)
          </time>
          <div className="pt-2 pl-2 pb-2 sm:pt-4 sm:pl-4 sm:pb-4">
            Web Development team,{" "}
            <nav aria-label="rocketry at virginia tech">
              <a
                href="https://www.rocketryatvirginiatech.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Rocketry at Virginia Tech
              </a>
            </nav>
          </div>
        </li>
        {/* <FaCaretDown color="#94a3b8" className="w-full justify-end text-end" /> */}
        <li className="hover:text-white animation ease-in-out duration-100 list-none border-l-2 border-slate-400 pb-4">
          <div className="absolute rounded-full border bg-[#F2CC85] w-3 h-3  mt-1.5 -left-1.5 md:w-5 md:h-5  md:mt-2.5 md:-left-2.5"></div>

          <time className="p-2 sm:p-4 text-xs sm:text-md lg:text-xl 2xl:text-4xl">
            2022
          </time>
          <div className="pt-2 pl-2 pb-2 sm:pt-4 sm:pl-4 sm:pb-4">
            Software Engineering Intern (React components team),
            <nav aria-label="sciencelogic">
              <a
                href="https://sciencelogic.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                ScienceLogic
              </a>
            </nav>
          </div>
        </li>
      </ul>
    </>
  );
}
