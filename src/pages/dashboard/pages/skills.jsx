import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const getBarColor = (level) => {
  if (level >= 75) return "bg-green-600"; // Green for high proficiency
  if (level >= 50) return "bg-amber-400"; // Orange for medium proficiency
  return "bg-red-600"; // Red for low proficiency
};

const Skills = () => {
  const navigate = useNavigate();

  const handleEdit = ({ levelOfProfeciency }) => {
    console.log("Edit skill at index:", levelOfProfeciency);
    navigate(`/asset/constants/skill/${levelOfProfeciency}`);
  };

  const handleDelete = (index) => {
    console.log("Delete skill at index:", index);
    navigate(`/dashboard/skills/edit-skill/${index}`);
  };

  return (
    <PagesLayout
      headerText="Skills Acquired"
      buttonText="Add New Skill"
      onClick={() => navigate("/dashboard/skills/add-skill")}
    >
      <div className="grid grid-cols-2 gap-12 gap-x-20 p-24 pt-9">
        {K.SKILLS.map(({ typeOfSkill, levelOfProfeciency }, index) => (
          <div
            key={index}
            className="h-54 w-[380px] bg-[#9BCEE6] text-[#08355D] font-bold shadow-2xl flex flex-col p-6"
          >
            <div className="ml-auto flex gap-x-2">
              <button
                onClick={() => handleEdit`${levelOfProfeciency}`}
                className="bg-[#08355D] p-3 rounded-full"
              >
                <Edit className="text-white size-5" />
              </button>
              <button
                onClick={() => handleDelete`${levelOfProfeciency}`}
                className="bg-[#08355D] p-3 rounded-full"
              >
                <TrashIcon className="text-white size-5" />
              </button>
            </div>
            <div className="flex flex-col text-xl font-semibold">
              <span className="pb-9">{typeOfSkill}</span>
              <div className="relative w-full bg-gray-300 h-4 rounded-full">
                <div
                  className={`h-full rounded-full ${getBarColor(
                    levelOfProfeciency
                  )}`}
                  style={{ width: `${levelOfProfeciency}%` }}
                >
                  <span className="absolute right-0 pr-1 text-white text-sm">
                    {levelOfProfeciency}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Skills;
