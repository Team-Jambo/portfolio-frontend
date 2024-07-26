import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageLoader from "../../../components/PageLoader";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";
import {
  apiDeleteEducation,
  apiGetEducation,
} from "../../../services/education";

const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      console.log(res.data);
      setEducation(res.data.eduaction);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteEducation(_id);
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
    fetchEducation();
  }, []);

  return (
    <PagesLayout
      headerText="Education"
      buttonText="Add New Education"
      onClick={() => navigate("/dashboard/education/add-education")}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {education.length == 0 ? (
            <p>No skill added yet</p>
          ) : (
            <div className="flex flex-col gap-12 p-7 text-justify leading-7 pb-5 tracking-wide">
              {education.map(
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
          )}
        </div>
      )}
    </PagesLayout>
  );
};

export default Education;
