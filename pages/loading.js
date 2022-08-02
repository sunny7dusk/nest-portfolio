import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col align-middle justify-center text-center">
        <BeatLoader color="#e2e8f0" size={40} />
      </div>
    </>
  );
}
