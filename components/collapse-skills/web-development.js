import { BsArrowReturnRight } from "react-icons/bs";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { SiTypescript, SiGraphql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaVuejs, FaAngular, FaReact, FaNodeJs } from "react-icons/fa";

export default function WebDevelopment() {
  return (
    <div className="text-slate-300 text-sm sm:text-lg lg:text-1xl 2xl:text-4xl text-center">
      <div className="flex flex-row items-center hover:scale-105 ease-in-out duration-150">
        <BsArrowReturnRight className="mr-4" />
        Web Development 🤩
      </div>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-center ">
        <TiHtml5
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <TiCss3
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <IoLogoJavascript
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiTypescript
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <FaReact
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <FaVuejs
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <FaAngular
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <FaNodeJs
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiGraphql
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
      </section>
    </div>
  );
}
