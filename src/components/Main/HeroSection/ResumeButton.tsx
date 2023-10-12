import Link from "next/link";
import { Download } from "../icons";
// import Link from "next/link";

const ResumeButton = () => {
  return (
    <button
      className={`flex items-center justify-center rounded-md px-5 w-fit h-11 bg-buttonBg  hover:bg-cyan_dark duration-300 group cursor-pointer`}
    >
      <Link
        legacyBehavior
        href={`https://drive.google.com/file/d/1FvII-frByYy_wZpLksm1SSI7plIqbqW7/view?usp=drive_link`}
      >
        <a target="_blank" rel="noreferrer">
          <div className="flex w-full h-full items-center">
            <span className="text-white text-sm mr-3 group:hover:mr-1 font-normal capitalize tracking-wide">
              view resume
            </span>
            <div className="h-4 w-4">
              <Download height="4" width="4" />
            </div>
          </div>
        </a>
      </Link>
    </button>
  );
};

export default ResumeButton;
