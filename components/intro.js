import { cn } from "../utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)} >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#A3767D,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#84B8D9,transparent)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
           " bg-[radial-gradient(circle_farthest-side_at_0_100%,#A3767D,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#84B8D9,transparent)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export function Intro() {
  return (
    <section className="flex flex-col items-center">
      <header className="max-w-[1980px]">
        <h1 className="ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wide text-center pb-4">
        <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        The most dangerous phrase in the language is, &#x2018;We&apos;ve always done it this way’
        </h1>
        <br />
      </header>
      <div className="self-center max-w-[1980px]">
        <span className="text-slate-300 text-xl lg:text-2xl 2xl:text-5xl text-pretty">
          Growing up in Malaysia, I have always been fascinated by the
          technological side of the world. Driven by the desire to learn, I
          constantly immerse myself in new and upcoming programming
          technologies. This is what led me to study and graduate with a Bachelor&apos;s in Computer Science from Virginia Tech. I am currently working in the industry as an Senior Consultant.
        </span>
      </div>
    </section>
  );
}
