import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import { K } from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  apiDeleteExperience,
  apiGetExperiences,
} from "../../../services/experiences";
import PageLoader from "../../../components/PageLoader";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

const Experiences = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetExperiences();
      console.log(res.data);
      setExperiences(res.data.experience);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteExperience(_id);
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
    fetchExperiences();
  }, []);

  return (
    <PagesLayout
      headerText="Experiences"
      buttonText="Add New Experience"
      onClick={() => navigate("/dashboard/experiences/add-experience")}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {experiences.length == 0 ? (
            <p>No skill added yet</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 p-20">
              {experiences.map(
                (
                  {
                    position,
                    company,
                    location,
                    startDate,
                    endDate,
                    responsibilities,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className="h-96 bg-white text-[#0B4459] font-bold shadow-md rounded-xl flex flex-col p-5"
                  >
                    <div className="ml-auto flex gap-x-2 ">
                      <button className="bg-white shadow-md p-3 rounded-full">
                        <Edit className="text-gray-400 size-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(_id)}
                        className=" bg-white shadow-md p-3 rounded-full"
                      >
                        {deletingItems[_id] ? (
                          <Loader />
                        ) : (
                          <TrashIcon className=" text-gray-400 size-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex flex-col font-semibold transition:transform 0.3s ease, box-shadow 0.3s ease; hover:-translate-x-1 hover:scale-90 duration-300 ">
                      <span className="text-xl pb-4">{position}</span>
                      <span className="text-base font-semibold">{company}</span>
                      <span className="text-base font-semibold">
                        {location}
                      </span>
                      <span className="text-base font-semibold">
                        {startDate}
                      </span>
                      <span className="text-base font-semibold">{endDate}</span>
                      <span className=" pt-5 ml-5 text-sm list-item mb-2">
                        {responsibilities}
                      </span>
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

export default Experiences;
