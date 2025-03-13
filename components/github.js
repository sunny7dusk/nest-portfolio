import Image from "next/image";


export default function Github() {
  return (
    <>
      <div className="self-center grid grid-cols-1 lg:grid-cols-10 gap-x-3.5 justify-items-center items-center">
        <span className="text-slate-300 text-xl lg:text-2xl 2xl:text-5xl underline-light-100 lg:col-span-10">
          Some of my Github stats
          ! {/* Woah, 123 commits on GitHub! */}
        </span>

        <div className="lg:col-span-10 mt-10 lg:mt-0 grid grid-cols-1 gap-8 lg:px-64">
            <Image aria-label="my github stats" width={1980} height={1080} className="object-contain" src="https://github-readme-stats-two-wheat.vercel.app/api?username=sunny7dusk&show_icons=true&theme=transparent&hide_border=true&title_color=cbd5ff"/>
        </div>

        <div className="lg:col-span-10 mt-10 lg:mt-0 grid grid-cols-1 gap-8 lg:px-64">
            <Image aria-label='my most used languages' width={1980} height={1080} className="object-contain" src="https://github-readme-stats-two-wheat.vercel.app/api/top-langs/?username=sunny7dusk&theme=transparent&hide=css,html&hide_border=true&title_color=cbd5ff&layout=donut"/>
        </div>
      </div>
    </>
  );
}
