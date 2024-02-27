import { BsArrowReturnRight } from "react-icons/bs";
import { SiC, SiRust, SiPython, SiDocker } from "react-icons/si";
import { VscTerminalLinux, VscTerminalBash } from "react-icons/vsc";
export default function SystemsDevelopment() {
  return (
    <div className="lg:text-slate-300 text-[#84B8D9] text-xl 2xl:text-4xl text-center hover:text-[#84B8D9]">
      <div className="flex flex-row items-center hover:scale-105 ease-in-out duration-150 ">
        <BsArrowReturnRight className="mr-4" color="#84B8D9" />
        <span className="select-none ">Systems Programming</span>
      </div>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-evenly">
        <SiC width={60} className="ease-in-out duration-150 hover:scale-125" />
        <SiRust
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiPython
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiDocker
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <VscTerminalLinux
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <VscTerminalBash
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
      </section>
    </div>
  );
}
