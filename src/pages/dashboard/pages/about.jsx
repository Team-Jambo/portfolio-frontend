import { Link } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import { InfoIcon } from "lucide-react";

const About = () => {
  return (
    <>
      <PagesLayout buttonText="Add to About"></PagesLayout>

      <div className="flex flex-col border-b-[2px] border-dashed 	border-top-color:rgba(11, 68, 89, 1);">
        <h1 className="flex text-xl">
          About Me <InfoIcon className="ml-[58rem] size-7" />
        </h1>
      </div>
      <div className="flex flex-col w-1/2">
        <h3 className="text-xl font-medium pt-5 ">Software Developer</h3>
        <p className="pr-3 border-b-[1px] border-dashed leading-7 pb-5 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dignissim convallis metus. Donec sit amet libero nunc. Praesent
          dignissim odio felis, eu eleifend ipsum rhoncus id. Nam porttitor elit
          feugiat venenatis viverra. Suspendisse pulvinar, leo ac ultricies
          porttitor, lectus diam fringilla dolor, et bibendum mauris augue
          euismod eros. Vivamus efficitur pretium massa, vel blandit magna
          iaculis sit amet. Nulla vehicula risus sed turpis euismod, quis porta
          turpis feugiat. Vestibulum id mi vitae sapien blandit interdum et sit
          amet sem. Duis sem odio, dignissim non sollicitudin vitae, elementum
          id metus. Nulla sollicitudin viverra diam, nec elementum urna
          imperdiet in. Vestibulum efficitur eu est eu rutrum.
        </p>
      </div>

      <div className="flex flex-col w-1/2">
        <h3 className="text-xl font-medium pt-7">Personal Infomation</h3>
      </div>
      <div>
        <h1 className="text-black text-xl max-sm:text-lg font-bold">
          EXPERIENCE
        </h1>
        <h1 className="text-[#B0B0B0] text-xl max-sm:text-lg font-extralight">
          EXPERTISE
        </h1>

        <h1 className="text-[#B0B0B0] text-xl max-sm:text-lg font-extralight">
          SKILLS SUMMARY
        </h1>
        <h1 className="text-[#B0B0B0] text-xl max-sm:text-lg font-extralight">
          ACHIEVEMENT
        </h1>
        <h1 className="text-[#B0B0B0] text-xl max-sm:text-lg font-extralight">
          SOCIAL LINKS
        </h1>
      </div>
    </>
  );
};

export default About;
