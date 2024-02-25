import Lottie from "lottie-react";
import notFound from "../public/assets/404.json";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-full">
      <Lottie animationData={notFound} autoPlay loop />
    </div>
  );
}
