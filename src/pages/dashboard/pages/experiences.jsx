import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";

const Experiences = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Experiences"
      buttonText="Add New Experience"
      onClick={() => navigate("/dashboard/experiences/add-experience")}
    >
      <div className="flex flex-col gap-6 p-20">
        {K.EXPERIENCES.map(
          (
            {
              position,
              company,
              location,
              startDate,
              endDate,
              responsibilitiesOne,
              responsibilitiesTwo,
            },
            index
          ) => (
            <div
              key={index}
              className="h-96 bg-[#9BCEE6] text-[#0B4459] font-bold shadow-md rounded-xl flex flex-col p-5"
            >
              <div className="ml-auto flex gap-x-2 ">
                <span className="bg-[#F79726]  p-3 rounded-full">
                  <Edit className="text-white size-5" />
                </span>
                <span className=" bg-[#F79726] p-3 rounded-full">
                  <TrashIcon className=" text-white size-5" />
                </span>
              </div>
              <div className="flex flex-col text-3xl font-semibold transition:transform 0.3s ease, box-shadow 0.3s ease; hover:-translate-x-1 hover:scale-90 duration-300 ">
                <span className="pb-9">{position}</span>
                <span className="text-lg">{company}</span>
                <span className="text-lg">{location}</span>
                <span className="text-lg">{startDate}</span>
                <span className="text-lg">{endDate}</span>
                <span className=" pt-5 ml-5 text-lg list-item mb-2">
                  {responsibilitiesOne}
                </span>
                <span className="ml-5 text-lg list-item mb-2">
                  {responsibilitiesTwo}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </PagesLayout>
  );
};

export default Experiences;
