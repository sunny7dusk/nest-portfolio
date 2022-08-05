import { IconContext } from "react-icons";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai/index";
import { FaLinkedin } from "react-icons/fa/index";
import { CgFileDocument } from "react-icons/cg/index";

export default function Contact({ windowWidth }) {
  return (
    <>
      <div className="snap-center w-[100vw] lg:px-[4rem] px-6 sm:px-10 flex flex-col justify-center align-middle pb-36 mt-44">
        <div className="self-center w-[60vw]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] text-sm sm:text-3xl lg:text-4xl 2xl:text-7xl">
            Interested in working together?
          </span>
          <br />
          <IconContext.Provider value={{ color: "grey" }}>
            <div className="grid grid-cols-4 mt-8 gap-5">
              <a
                href="https://github.com/sunny7dusk"
                className="flex flex-row align-middle justify-center"
              >
                <AiFillGithub
                  alt="github profile"
                  title="My GitHub Profile"
                  size={windowWidth >= 640 ? 64 : 32}
                />
              </a>
              <a
                href="https://www.instagram.com/dark7storm/"
                className="flex flex-row align-middle justify-center"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillInstagram
                  alt="instagram profile"
                  title="My Instagram Profile"
                  size={windowWidth >= 640 ? 64 : 32}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nathaniel-chai-48aab4135/"
                className="flex flex-row align-middle justify-center"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin
                  alt="linkedin profile"
                  title="My LinkedIn Profile"
                  size={windowWidth >= 640 ? 64 : 32}
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1sFEicIs97ggVChxU8RDbVUpwEtk15MNB/view?usp=sharing"
                className="flex flex-row align-middle justify-center"
                target="_blank"
                rel="noreferrer noopener"
              >
                <CgFileDocument
                  alt="resume"
                  title="My resume"
                  size={windowWidth >= 640 ? 64 : 32}
                />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}
