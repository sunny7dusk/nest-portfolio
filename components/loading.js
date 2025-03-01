import Lottie from "lottie-react";
import loadingAnim from "../public/assets/loading.json";
export default function Loading() {
  return (
    <>
      <div className="flex flex-col align-middle justify-center text-center w-full max-w-[1980px]">
        <Lottie animationData={loadingAnim} loop autoPlay className="h-[100vh]"/>
      </div>
    </>
  );
}
