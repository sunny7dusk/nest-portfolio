export default function Intro({ y, prevY }) {
  // console.log('y = ' + y);
  // console.log('prevY = ' + prevY);
  return (
    <>
      <div className='self-center w-[50vw]'>
        <h1 className='ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl tracking-wide text-center'>
          Nathaniel Chai Zhuo En 蔡卓恩
        </h1>
        <br />
        <div className='text-justify'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl'>
            Growing up in Malaysia, I have always been fascinated by the
            technological side of the world. Driven by the desire to learn, I
            constantly immerse myself in new and upcoming programming
            technologies. This is what led me here today, as a programmer
            studying Computer Science at Virginia Tech.
          </span>
        </div>
      </div>
      {/* <div
        // style={{ opacity: `${y >= 1000 ? 1 - (y - 1000) / 100 : 1}` }}
        // className='w-full flex flex-col bg-[#171A26] justify-center'
      >
        
      </div> */}
    </>
  );
}
