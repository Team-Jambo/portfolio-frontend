import { Link } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import { InfoIcon } from "lucide-react";
import ImageOne from "../../../assets/images/profile.png";
import { K } from "../../../constants";

const About = () => {
  return (
    <PagesLayout buttonText="Add to About">
      <div className="flex flex-col border-b-[2px] border-dashed border-top-color:rgba(11, 68, 89, 1);">
        <h1 className="flex font-bold text-2xl text-[#f79626] pt-8">
          About Me <InfoIcon className="ml-auto size-7" />
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-xl font-medium pt-5 text-[#2286C9] ">
            Software Developer
          </h3>
          <p className="pr-3 border-b-[1px] border-dashed text-justify leading-7 pb-5 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dignissim convallis metus. Donec sit amet libero nunc. Praesent
            dignissim odio felis, eu eleifend ipsum rhoncus id. Nam porttitor
            elit feugiat venenatis viverra. Suspendisse pulvinar, leo ac
            ultricies porttitor, lectus diam fringilla dolor, et bibendum mauris
            augue euismod eros. Vivamus efficitur pretium massa, vel blandit
            magna iaculis sit amet. Nulla vehicula risus sed turpis euismod,
            quis porta turpis feugiat. Vestibulum id mi vitae sapien blandit
            interdum et sit amet sem. Duis sem odio, dignissim non sollicitudin
            vitae, elementum id metus. Nulla sollicitudin viverra diam, nec
            elementum urna imperdiet in. Vestibulum efficitur eu est eu rutrum.
          </p>
        </div>

        <div className=" mt-10 ml-20">
          <img src={ImageOne} className=" size-[300px] rounded-full" />
        </div>
      </div>

      <div className="flex flex-col w-1/2 text-justify leading-7">
        <h3 className="font-bold text-2xl pt-14 text-[#f79626] ">
          Personal Infomation
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4 text-justify ">
        {K.PERSONALINFORMATION.map(
          ({ name, age, resident, address, email }, index) => (
            <div key={index} className=" font-medium text-3xl">
              <div className="inline-grid text-xl font-medium pt-3">
                <span className="text-[16px] text-slate-600">
                  <span className=" underline underline-offset-8 text-[#2286C9] mr-16">
                    NAME:
                  </span>
                  {name}
                </span>

                <span className="text-[16px] text-slate-600">
                  <span className=" mr-[85px] text-[#2286c9] underline underline-offset-8">
                    AGE:
                  </span>
                  {age}
                </span>
                <span className="text-[16px] text-slate-600">
                  <span className=" text-[#2286c9] underline underline-offset-8 mr-10">
                    RESIDENT:
                  </span>
                  {resident}
                </span>
                <span className="text-[16px] text-slate-600">
                  <span className=" text-[#2286c9] underline underline-offset-8 mr-10">
                    ADDRESS:
                  </span>
                  {address}
                </span>
                <span className="text-[16px] text-slate-600">
                  <span className=" text-[#2286c9] underline underline-offset-8 mr-16">
                    EMAIL:
                  </span>
                  {email}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </PagesLayout>
  );
};

export default About;
