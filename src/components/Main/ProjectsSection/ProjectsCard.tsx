import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectVariant } from "../../../variants/projectVariant";
import Github from "../../Utils/icons/Github";
import LiveLink from "./icon/LiveLink";

export type ProjectCardprops = {
  image: string;
  name: string;
  about: string;
  link: string;
  liveLink: string;
  builtWith: string[];
};

const ProjectsCard = ({
  // about,
  image,
  link,
  name,
  liveLink,
  builtWith,
  // orientation,
}:
ProjectCardprops) => {
  return (
    <motion.div
      className="w-full  rounded-lg"
      initial={{ opacity: 0, y: 25 }}
      variants={projectVariant}
      whileInView={projectVariant.image}
      viewport={{ once: true }}
    >
      <div className="max-w-[500px]   gap-2 mx-2 my-3 hover:scale-95 transform delay-300 duration-300  shadow-lg rounded-lg  border-cyan">
        <Image
          src={image}
          alt={name}
          width={450}
          height={250}
          // fill
          priority
          className="w-full "
        />
        <div className="px-2 py-1 lg:px-8 lg:py-4 bg-body">
          <div className=" flex justify-between  items-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex items-center  space-x-4">
              <Link href={`${link}`} aria-label={`${name} github link`}>
                <>
                  <Github />
                </>
              </Link>
              <Link href={`${liveLink}`} aria-label={`${name} live link`}>
                <>
                  <LiveLink />
                </>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap md:items-center mt-2 md:justify-start">
            {builtWith.map((item, index) => (
              <span
                key={index}
                className="text-sm font-semibold capitalize bg-veryDark px-2 py mx-1 my-1 rounded-sm select-none text-white lg:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
