import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import { useEffect, useState } from "react";
// import { K } from "../../../constants";
import { apiDeleteProject, apiGetProjects } from "../../../services/projects";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProjects();
      console.log(res.data);
      setProjects(res.data.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteProject(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [_id]: false }));
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <PagesLayout
      headerText="Projects Done"
      buttonText="Add New Project"
      onClick={() => navigate("/dashboard/projects/add-project")}
    >
      {isLoading ? (
        <PagesLayout />
      ) : (
        <div>
          {projects.length == 0 ? (
            <p>No skill added yet</p>
          ) : (
            <div className="grid grid-cols-3 gap-4 pt-7">
              {projects.map(
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
                    <div className="ml-auto flex gap-x-2">
                      <button
                        onClick={() => handleEdit`${levelOfProfeciency}`}
                        className="bg-[#08355D] p-3 rounded-full"
                      >
                        <Edit className="text-white size-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(_id)`${levelOfProfeciency}`}
                        className="bg-[#08355D] p-3 rounded-full"
                      >
                        {deletingItems[_id] ? (
                          <Loader />
                        ) : (
                          <TrashIcon className="text-white size-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex flex-col text-3xl font-semibold">
                      <img
                        src={image}
                        className="size-[300px] m-3 hover:scale-110"
                      />
                      <span className="text-lg">{projectName}</span>
                      <span className="text-lg">{description}</span>
                      <span className="text-lg">{contributors}</span>
                      <span className="text-lg">{date}</span>
                      <span className="text-lg">{skill}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </PagesLayout>
  );
};

export default Projects;
