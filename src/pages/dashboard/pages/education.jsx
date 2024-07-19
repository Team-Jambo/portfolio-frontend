import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";

const Education = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Education"
      buttonText="Add New Education"
      onClick={() => navigate("/dashboard/education/add-education")}
    >
      <div className="flex flex-col gap-12 p-7 text-justify leading-7 pb-5 tracking-wide">
        {K.EDUCATION.map(
          (
            { institution, program, location, grade, startDate, endDate },
            index
          ) => (
            <div
              key={index}
              className="h-40 w-[70vw] group relative py-1 px-2 transition-all duration-200 after:absolute after:buttom-0
              after:top-[92%] after:left-0 after:right-0 after:z-[-1] after:bg-[#9BCEE6] after:duration-200
              after:text-white hover:after:inset-0 text-[#0B4459] font-bold shadow-xl rounded-2xl p-5 "
            >
              <div className="grid grid-cols-2 text-3xl font-semibold">
                <div className="text-[#f79626] pt-8">
                  <span className="text-lg">{institution}</span>
                </div>
                <div className="text-lg text-[#2286C9] inline-grid grid-cols-1">
                  <span>{program}</span>
                  <span className="text-lg">{location}</span>
                  <span className="text-lg">{grade}</span>
                  <span className="text-lg">{startDate}</span>
                  <span className="text-lg">{endDate}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </PagesLayout>
  );
};

export default Education;
