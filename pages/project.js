export default function Projects({ y }) {
  return (
    <>
      <div className='snap-center w-full flex flex-col justify-center mt-36 text-justify align-middle'>
        <div className='w-[50vw] self-center'>
          <span className='decoration-solid bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100'>
            Come take a look at{' '}
            <a
              href='/projects'
              className=' underline decoration-solid decoration-[#F2CC85]/70 underline-offset-8 hover:font-bold font-normal animation ease-in-out tracking-wide'
            >
              projects
            </a>{' '}
            I've done!
            {/* Woah, 123 commits on GitHub! */}
          </span>
        </div>
      </div>
    </>
  );
}
