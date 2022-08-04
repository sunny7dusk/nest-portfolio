export default function Bio() {
  return (
    <>
      <div className="w-[50vw] self-center">
        <span className="decoration-solid bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100">
          Here&apos;s my story so far :<br />
        </span>
      </div>
      <table className="w-[60vw] table-auto text-xs sm:text-1xl lg:text-2xl 2xl:text-5xl self-center text-white lg:text-slate-500">
        <tbody>
          <tr className="hover:text-white animation ease-in-out duration-100">
            <td className="p-2 sm:p-4">2000</td>
            <td className="p-2 sm:p-4">Born in Kuching, Sarawak (Malaysia)</td>
          </tr>
          <tr className="hover:text-white animation ease-in-out duration-100">
            <td className="p-2 sm:p-4">2019</td>
            <td className="p-2 sm:p-4">
              Finished the American Degree Transfer Program at KDU Damansara
              Jaya
            </td>
          </tr>
          <tr className="hover:text-white animation ease-in-out duration-100">
            <td className="p-2 sm:p-4"> 2019 (Ongoing)</td>
            <td className="p-2 sm:p-4">
              Studying Computer Science at{" "}
              <a
                href="https://cs.vt.edu/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Virginia Tech
              </a>{" "}
              (Senior)
            </td>
          </tr>
          <tr className="hover:text-white animation ease-in-out duration-100">
            <td className="p-2 sm:p-4">2021 (Ongoing)</td>
            <td className="p-2 sm:p-4">
              Social Media and Communications Lead,{" "}
              <a
                href="https://sites.google.com/vt.edu/dscvt"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Google Developer Student Club at Virginia Tech
              </a>
            </td>
          </tr>
          <tr className="hover:text-white animation ease-in-out duration-100">
            <td className="p-2 sm:p-4">2021 (Ongoing)</td>
            <td className="p-2 sm:p-4">
              Web Development team,{" "}
              <a
                href="https://www.rocketryatvirginiatech.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Rocketry at Virginia Tech
              </a>
            </td>
          </tr>
          <tr className="hover:text-white animation ease-in-out duration-100">
            <td className="p-2 sm:p-4">2022</td>
            <td className="p-2 sm:p-4">
              Software Engineering Intern (React components team),{" "}
              <a
                href="https://sciencelogic.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                ScienceLogic
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
