import { useEffect, useState } from "react";
import { K } from "../../../constants";
import PagesLayout from "../layouts/pagesLayout";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Edit, TrashIcon } from "lucide-react";
import {
  apiDeleteAchievement,
  apiGetAchievements,
} from "../../../services/achievements";
import PageLoader from "../../../components/PageLoader";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

const Achievements = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchAchievements = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAchievements();
      console.log(res.data);
      setAchievements(res.data.achievements);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteAchievement(_id);
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
    fetchAchievements();
  }, []);

  return (
    <PagesLayout
      headerText="Achievements Acquired"
      buttonText="Add New Achievement"
      onClick={() => navigate("/dashboard/achievements/add-achievement")}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {achievements.length == 0 ? (
            <p>No achievement added yet</p>
          ) : (
            <div className="flex flex-col gap-12 p-7 text-justify leading-7 pb-5 tracking-wide">
              {achievements.map(
                (
                  { awardType, description, image, date, nameOfInstitution },
                  index
                ) => (
                  <div
                    key={index}
                    className="h-40 w-[70vw] group relative py-1 px-2 transition-all duration-200 after:absolute after:buttom-0
              after:top-[92%] after:left-0 after:right-0 after:z-[-1] after:bg-[#9BCEE6] after:duration-200
              after:text-white hover:after:inset-0 text-[#0B4459] font-bold shadow-xl rounded-2xl p-5 "
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
                    <div className="grid grid-cols-2 text-3xl font-semibold">
                      <div className="text-[#f79626] pt-8">
                        <span className="text-lg">{awardType}</span>
                      </div>
                      <div className="text-lg text-[#2286C9] inline-grid grid-cols-1">
                        <span>{description}</span>
                        <span className="text-lg">{image}</span>
                        <span className="text-lg">{date}</span>
                        <span className="text-lg">{nameOfInstitution}</span>
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

export default Achievements;
