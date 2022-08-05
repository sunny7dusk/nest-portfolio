import styles from "../styles/Skills.module.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import html5 from "../public/assets/html-5.webp";
import css from "../public/assets/css.webp";
import firebase from "../public/assets/icons8-google-firebase-console-96.webp";
import flutter from "../public/assets/icons8-flutter-96.webp";
import python from "../public/assets/icons8-python-96.webp";
import java from "../public/assets/icons8-java-96.webp";
import c from "../public/assets/icons8-c-programming-96.webp";
import react from "../public/assets/icons8-react-native-96.webp";
import angular from "../public/assets/angular.svg";
import js from "../public/assets/js-format.webp";
import node from "../public/assets/icons8-nodejs-96.webp";
import vue from "../public/assets/vue.png";

export default function Skills() {
  return (
    <>
      <div className="snap-center w-full flex flex-col justify-center mt-36">
        <div className=" hidden xl:block w-[50vw] self-center">
          <Marquee
            className={`h-[100px] mb-3 self-center ` + styles.logos}
            gradient={false}
            speed={12 * 10}
          >
            <Image src={html5} alt="html5" width={50} height={50} />
            <Image src={css} alt="css" width={50} height={50} />
            <Image
              src={firebase}
              alt="firebase"
              width={50}
              height={50}
              title=""
            />
            <Image
              src={flutter}
              alt="flutter"
              width={50}
              height={50}
              title=""
            />
            <Image src={python} alt="python" width={50} height={50} title="" />
            <Image src={angular} alt="angular" width={50} height={50} />
            <Image src={java} alt="java" width={50} height={50} title="" />
            <Image src={js} alt="js" width={50} height={50} />
            <Image src={c} alt="c" width={50} height={50} title="" />
            <Image src={node} alt="node" width={50} height={50} title="" />
            <Image src={react} alt="react" width={50} height={50} title="" />
            <Image src={vue} alt="vue" width={50} height={50} />
          </Marquee>
        </div>

        <div className=" block xl:hidden w-[100vw] self-center mt-[24px]">
          <Marquee
            className={`h-[100px] mb-3 self-center ` + styles.logos}
            gradient={false}
            speed={12 * 15}
          >
            <Image src={html5} alt="html5" width={50} height={50} />
            <Image src={css} alt="css" width={50} height={50} />
            <Image
              src={firebase}
              alt="firebase"
              width={50}
              height={50}
              title=""
            />
            <Image
              src={flutter}
              alt="flutter"
              width={50}
              height={50}
              title=""
            />
            <Image src={python} alt="python" width={50} height={50} title="" />
            <Image src={angular} alt="angular" width={50} height={50} />
          </Marquee>
          <Marquee
            className={`h-[100px] mb-3 self-center ` + styles.logos}
            gradient={false}
            speed={12 * 15}
            delay={1}
          >
            <Image src={java} alt="java" width={50} height={50} title="" />
            <Image src={js} alt="js" width={50} height={50} />
            <Image src={c} alt="c" width={50} height={50} title="" />
            <Image src={node} alt="node" width={50} height={50} title="" />
            <Image src={react} alt="react" width={50} height={50} title="" />
            <Image src={vue} alt="vue" width={50} height={50} />
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-[50vw] self-center text-justify"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-md sm:text-1xl lg:text-2xl 2xl:text-5xl">
            I&apos;m always constantly learning new technologies to broaden my
            skill set! Here are some of the technologies I&apos;ve been working
            with!
          </span>
        </motion.div>
      </div>
    </>
  );
}
