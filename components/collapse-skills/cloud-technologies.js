import { BsArrowReturnRight } from "react-icons/bs";
import { SiGooglecloud } from "react-icons/si";
import {
  FaAws
} from "react-icons/fa"

export default function WebDevelopment() {
  return (
    <div className="lg:text-slate-300 text-[#F2CC85] text-xl 2xl:text-4xl text-center hover:text-[#F2CC85]">
      <div className="flex flex-row items-center hover:scale-105 ease-in-out duration-150 ">
        <BsArrowReturnRight className="mr-4" color="#F2CC85" />
        <span className="select-none ">Cloud Technologies</span>
      </div>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-evenly">
        <FaAws
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
        <SiGooglecloud
          width={60}
          className="ease-in-out duration-150 hover:scale-125"
        />
      </section>
    </div>
  );
}
