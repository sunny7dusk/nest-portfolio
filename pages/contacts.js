import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Contact({ y }) {
  return (
    <>
      <div className='snap-center w-[100vw] lg:px-[4rem] px-6 sm:px-10 flex flex-col justify-center align-middle pb-36 mt-44'>
        <div className='self-center w-[60vw]'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-3xl lg:text-4xl 2xl:text-7xl'>
            Interested in working together?
          </span>
          <br />
          <div className='grid grid-cols-4 mt-8 gap-5'>
            <a
              href='https://github.com/sunny7dusk'
              className='flex flex-row align-middle justify-center'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='/assets/github.webp'
                width='60'
                alt='github profile'
                title='My GitHub Profile'
              />
            </a>
            <a
              href='https://www.instagram.com/dark7storm/'
              className='flex flex-row align-middle justify-center'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='/assets/instagram.webp'
                width='60'
                alt='instagram profile'
                title='My Instagram Profile'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/nathaniel-chai-48aab4135/'
              className='flex flex-row align-middle justify-center'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='/assets/linkedin.webp'
                width='60'
                alt='linkedin profile'
                title='My LinkedIn Profile'
              />
            </a>
            <a
              href='https://drive.google.com/file/d/1sFEicIs97ggVChxU8RDbVUpwEtk15MNB/view?usp=sharing'
              className='flex flex-row align-middle justify-center'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='/assets/resume-icon-.webp'
                width='60'
                alt='resume'
                title='My resume'
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
