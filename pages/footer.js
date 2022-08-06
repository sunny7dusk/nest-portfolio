import Link from "next/link";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai/index";
import { FaLinkedin } from "react-icons/fa/index";
import { CgFileDocument } from "react-icons/cg/index";
export default function Footer() {
  return (
    <footer className="relative pt-40 pb-20 flex flex-col items-center overflow-hidden">
      <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-inside space-y-8">
                <li>
                  <Link href={"/"} className="transition">
                    <span className=" cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#A3767D] hover:via-[#F2CC85] hover:to-[#84B8D9]">
                      Home
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href={"/blog"} className="transition">
                    <span className=" cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#A3767D] hover:via-[#F2CC85] hover:to-[#84B8D9]">
                      Blog
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href={"/projects"} className="">
                    <span className=" cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#A3767D] hover:via-[#F2CC85] hover:to-[#84B8D9]">
                      Projects
                    </span>
                  </Link>
                </li>
              </ul>

              <IconContext.Provider value={{ color: "grey" }}>
                <ul role="list" className="space-y-8">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/sunny7dusk"
                      className="flex items-center space-x-3 transition hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#A3767D] hover:via-[#F2CC85] hover:to-[#84B8D9]"
                    >
                      <AiFillGithub
                        alt="github profile"
                        title="My GitHub Profile"
                        size={32}
                      />
                      <span>Github</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.instagram.com/dark7storm/"
                      className="flex items-center space-x-3 transition hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#A3767D] hover:via-[#F2CC85] hover:to-[#84B8D9]"
                    >
                      <AiFillInstagram
                        alt="instagram profile"
                        title="My Instagram Profile"
                        size={32}
                      />
                      <span>Instagram</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.linkedin.com/in/nathaniel-chai-48aab4135/"
                      className="flex items-center space-x-3 transition hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#A3767D] hover:via-[#F2CC85] hover:to-[#84B8D9]"
                    >
                      <FaLinkedin
                        alt="linkedin profile"
                        title="My LinkedIn Profile"
                        size={32}
                      />
                      <span>LinkedIn</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://drive.google.com/file/d/1sFEicIs97ggVChxU8RDbVUpwEtk15MNB/view?usp=sharing"
                      className="flex items-center space-x-3 transition hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#A3767D] hover:via-[#F2CC85] hover:to-[#84B8D9]"
                    >
                      <CgFileDocument
                        alt="resume"
                        title="My resume"
                        size={32}
                      />
                      <span>Resume</span>
                    </a>
                  </li>
                </ul>
              </IconContext.Provider>
            </div>
            <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
              <span className="block text-gray-300">@sunny7dusk</span>

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9]">
                Interested in working together? <br />
                <a
                  href="mailto:nat233947@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Contact me!
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <small className="block text-gray-300 self-center pt-16">
        &copy; Copyright 2022, Nathaniel Zhuo En Chai
      </small>
    </footer>
  );
}
