import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Skills"
      buttonText="Add New Skill"
      onClick={() => navigate("/dashboard/skills/add-skill")}
    >
      <div className="grid grid-cols-3 gap-6 p-20">
        {K.SKILLS.map(({ typeOfSkill, levelOfProfeciency }, index) => (
          <div
            key={index}
            className="h-40 w-[280px] bg-[#9BCEE6] text-[#08355D] font-bold shadow-md rounded-xl flex flex-col p-5"
          >
            <div className="ml-auto flex gap-x-2 ">
              <span className="bg-[#08355D]  p-3 rounded-full">
                <Edit className="text-white size-5" />
              </span>
              <span className=" bg-[#08355D] p-3 rounded-full">
                <TrashIcon className=" text-white size-5" />
              </span>
            </div>
            <div className="flex flex-col text-xl font-semibold">
              <span className="pb-9">{typeOfSkill}</span>
              <span className="text-sm">{levelOfProfeciency}</span>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Skills;
