import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";
import ImageBig from "../../../assets/images/picture.jpeg";
import ImageTwo from "../../../assets/images/login.avif";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="PROJECTS"
      buttonText="Add New Project"
      onClick={() => navigate("/dashboard/projects/add-project")}
    >
      <div className="grid grid-cols-3 gap-4 pt-7">
        {K.PROJECTS.map(
          (
            {
              projectName,
              description,
              contributors,
              date,
              skill,
              projectUrl,
              image,
            },
            index
          ) => (
            <div
              key={index}
              className="h-[480px] bg-[#9BCEE6] text-[#0B4459] font-bold shadow-md rounded-xl flex flex-col p-5"
            >
              <div className="flex flex-col text-3xl font-semibold">
                <img
                  src={ImageTwo}
                  className="size-[300px] m-3 hover:scale-110"
                />
                <span className="text-lg">{projectName}</span>
                <span className="text-lg">{description}</span>
                <span className="text-lg">{contributors}</span>
                <span className="text-lg">{date}</span>
                <span className="text-lg">{skill}</span>
                <span className="text-lg">{projectUrl}</span>
                <span className="text-lg">{image}</span>
              </div>
            </div>
          )
        )}
      </div>
    </PagesLayout>
  );
};

export default Projects;
