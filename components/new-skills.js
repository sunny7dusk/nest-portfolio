import { motion } from "framer-motion";
import WebDevelopment from "./collapse-skills/web-development";
import AppDevelopment from "./collapse-skills/app-development";
import SystemsDevelopment from "./collapse-skills/systems-development";

export default function Skills() {
  return (
    <>
      <div className="snap-center grid grid-cols-1 lg:grid-cols-10 gap-x-3.5 w-[70vw] justify-center mt-36 ">
        <motion.div
          transition={{ type: "spring", ease: "easeInOut" }}
          className="self-center lg:col-span-4"
        >
          <span className="text-slate-300 text-md sm:text-1xl lg:text-2xl 2xl:text-5xl">
            I&apos;m always learning new technologies to broaden my skill set!
            Here are some of the technologies I&apos;ve been working with!
          </span>
        </motion.div>
        <div className="lg:col-span-1"></div>
        <div className="self-center text-slate-400 py-8 lg:col-span-5">
          <div className="py-4">
            <WebDevelopment />
          </div>
          <div className="py-4">
            <AppDevelopment />
          </div>
          <div className="py-4">
            <SystemsDevelopment />
          </div>
        </div>
      </div>
    </>
  );
}
