import Lottie from "lottie-react";
import loadingAnim from "../public/assets/loading.json";
export default function Loading() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col align-middle justify-center text-center">
        <Lottie animationData={loadingAnim} loop autoPlay />
      </div>
    </>
  );
}
