export default function Blogs({ y }) {
  return (
    <>
      <div className='snap-center w-full  flex flex-col justify-center align-middle mt-36 text-justify'>
        <div className='w-[50vw] self-center'>
          <span className='decoration-solid bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100'>
            Wanna see what I've been up to? Check out my{' '}
            <a
              href='/blog'
              className=' underline decoration-solid decoration-[#A3767D]/90 underline-offset-8 hover:font-bold font-normal animation ease-in-out tracking-wide'
            >
              blog
            </a>{' '}
            !
          </span>
        </div>
      </div>
    </>
  );
}
