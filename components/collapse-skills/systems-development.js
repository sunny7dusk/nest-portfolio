import { BsArrowReturnRight } from "react-icons/bs";
import { SiC, SiRust, SiPython } from "react-icons/si";
export default function SystemsDevelopment() {
  return (
    <div className="text-slate-300 text-sm sm:text-lg lg:text-1xl 2xl:text-4xl text-center">
      <div className="flex flex-row items-center hover:scale-105 ease-in-out duration-150 hover:text-[#84B8D9]">
        <BsArrowReturnRight className="mr-4" color="#84B8D9" />
        <span className="select-none ">Systems Programming</span>
      </div>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-center ">
        <SiC width={60} className="ease-in-out duration-150 hover:scale-125" />
        <SiRust
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiPython
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
      </section>
    </div>
  );
}