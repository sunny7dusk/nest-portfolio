import { BsArrowReturnRight } from "react-icons/bs";
import { SiFlutter, SiFirebase, SiKotlin, SiReact } from "react-icons/si";

export default function AppDevelopment() {
  return (
    <div className="lg:text-slate-300 text-[#A3767D] text-xl 2xl:text-4xl text-center hover:text-[#A3767D] ">
      <div className="flex flex-row items-center hover:scale-105 ease-in-out duration-150 ">
        <BsArrowReturnRight className="mr-4" color="#A3767D" />
        <span className="select-none ">App Development</span>
      </div>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-evenly">
        <SiFlutter
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiKotlin
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiReact
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiFirebase
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
      </section>
    </div>
  );
}
