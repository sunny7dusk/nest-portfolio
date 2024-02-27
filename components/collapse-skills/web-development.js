import { BsArrowReturnRight } from "react-icons/bs";
import {
  SiTypescript,
  SiGraphql,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

export default function WebDevelopment() {
  return (
    <div className="lg:text-slate-300 text-[#A3767D] text-xl 2xl:text-4xl text-center hover:text-[#A3767D]">
      <div className="flex flex-row items-center hover:scale-105 ease-in-out duration-150 ">
        <BsArrowReturnRight className="mr-4" color="#A3767D" />
        <span className="select-none ">Web Development 🤩</span>
      </div>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-evenly">
        <SiHtml5
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiCss3
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiTailwindcss
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiStyledcomponents
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiJavascript
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiTypescript
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
      </section>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-evenly">
        <SiReact
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiNextdotjs
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiVuedotjs
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiAngular
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiNodedotjs
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
