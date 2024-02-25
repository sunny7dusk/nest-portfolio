import Lottie from "lottie-react";
import loadingAnim from "../public/assets/loading.json";
export default function Loading() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col align-middle justify-center text-center bg-[rgba(23,26,38,1)] bg-dot-white/[0.2] ">
        <Lottie animationData={loadingAnim} loop autoPlay />
      </div>
    </>
  );
}
