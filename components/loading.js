'use client'
import dynamic from 'next/dynamic';
import loadingAnim from "../public/assets/loading.json";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export default function Loading() {
  return (
    <>
      <div className="flex flex-col align-middle justify-center text-center w-full max-w-[1980px]">
        <Lottie animationData={loadingAnim} loop autoPlay className="h-[100vh]"/>
      </div>
    </>
  );
}
