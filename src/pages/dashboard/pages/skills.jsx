import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const getBarColor = (level) => {
  if (level >= 75) return "bg-green-600"; // Green for high proficiency
  if (level >= 50) return "bg-orange-700"; // Orange for medium proficiency
  return "bg-red-400"; // Red for low proficiency
};
const Skills = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Skills"
      buttonText="Add New Skill"
      onClick={() => navigate("/dashboard/skills/add-skill")}
    >
      <div className="grid grid-cols-3 gap-12 gap-x-20 p-20 pt-9">
        {K.SKILLS.map(({ typeOfSkill, levelOfProfeciency }, index) => (
          <div
            key={index}
            className="h-44 w-[280px] bg-[#9BCEE6] text-[#08355D] font-bold shadow-md rounded-xl flex flex-col p-6"
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
              <div className="w-full bg-gray-300 h-4 rounded-full">
                <div
                  className={`h-full rounded-full ${getBarColor(
                    levelOfProfeciency
                  )}`}
                  style={{ width: `${levelOfProfeciency}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Skills;
