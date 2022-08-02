export default function Title({ y }) {
  return (
    <>
      <div
        style={{ opacity: `${1 - y / 400}`, transform: `translateX(${y}px)` }}
        className={`mb-10 fixed snap-center w-full h-[100%]  flex flex-col lg:px-[4rem] px-6 sm:px-10 align-top justify-center animate ease-in-out `}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D]  to-[#84B8D9] text-lg sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl tracking-wide">
          FULL STACK <br /> DEVELOPER
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-3xl lg:text-4xl 2xl:text-7xl">
          Nate
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-xs sm:text-xl lg:text-2xl 2xl:text-4xl">
          Computer Science
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-xs sm:text-xl lg:text-2xl 2xl:text-4xl">
          Virginia Tech
        </span>
      </div>
    </>
  );
}
