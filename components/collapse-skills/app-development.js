import { BsArrowReturnRight } from "react-icons/bs";
import { SiFlutter, SiFirebase, SiKotlin, SiReact } from "react-icons/si";

export default function AppDevelopment() {
  return (
    <div className="text-slate-300 text-sm sm:text-lg lg:text-1xl 2xl:text-4xl text-center">
      <div className="flex flex-row items-center hover:scale-105 ease-in-out duration-150">
        <BsArrowReturnRight className="mr-4" />
        App Development
      </div>
      <section className="py-4 lg:py-8 flex flex-row gap-x-4 justify-center ">
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
