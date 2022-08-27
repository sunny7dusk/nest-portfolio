import { motion } from "framer-motion";
import WebDevelopment from "./collapse-skills/web-development";
import AppDevelopment from "./collapse-skills/app-development";
import SystemsDevelopment from "./collapse-skills/systems-development";

export default function Skills() {
  return (
    <>
      <div className="snap-center w-full flex flex-col justify-center mt-36">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-[70vw] xs:w-[50vw] self-center text-justify"
        >
          <span className="text-slate-300 text-md sm:text-1xl lg:text-2xl 2xl:text-5xl">
            I&apos;m always constantly learning new technologies to broaden my
            skill set! Here are some of the technologies I&apos;ve been working
            with!
          </span>
        </motion.div>
        <div className="w-[70vw] xs:w-[50vw] self-center text-slate-400 py-8">
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
