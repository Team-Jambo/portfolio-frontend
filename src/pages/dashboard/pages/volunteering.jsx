import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { K } from "../../../constants";
import { ArrowBigRightDash, Edit, TrashIcon } from "lucide-react";
import PagesLayout from "../layouts/pagesLayout";
import {
  apiDeleteVolunteering,
  apiGetVolunteering,
} from "../../../services/volunteering";

const Volunteering = () => {
  const navigate = useNavigate();
  const [volunteering, setVolunteering] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchVolunteering = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetVolunteering();
      console.log(res.data);
      setVolunteering(res.data.Volunteering);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteVolunteering(_id);
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
    fetchVolunteering();
  }, []);

  return (
    <PagesLayout
      headerText="Volunteering"
      buttonText="Add New"
      onClick={() => navigate("/dashboard/volunteering/add-volunteering")}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {volunteering.length == 0 ? (
            <p>No skill added yet</p>
          ) : (
            <div className="flex flex-col gap-6 p-20">
              {volunteering.map(
                (
                  {
                    organization,
                    describtion,
                    skill,
                    startDate,
                    endDate,
                    role,
                    responsibility,
                    location,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    // className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
                    className="h-96 bg-white text-[#0B4459] font-bold  shadow-xl hover:shadow-2xl rounded-xl flex flex-col p-5"
                  >
                    <div className="ml-auto flex gap-x-2 ">
                      <button className="bg-[#F79726]  p-3 rounded-full">
                        <Edit className="text-white size-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(_id)}
                        className=" bg-[#F79726] p-3 rounded-full"
                      >
                        {deletingItems[_id] ? (
                          <Loader />
                        ) : (
                          <TrashIcon className=" text-white size-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex flex-col text-3xl font-semibold tracking-normal leading-4">
                      <span className="text-xl font-semibold">
                        {organization}
                      </span>
                      <span className="text-base ">{describtion}</span>
                      <span className="text-base text-slate-400">{skill}</span>
                      <span className="text-base text-slate-400">
                        {startDate}
                      </span>
                      <span className="text-sm text-slate-400">{endDate}</span>
                      <span className="text-base">{location}</span>
                      <span className="text-base">{role}</span>
                      <span className="text-base">{responsibility}</span>
                    </div>
                    <button
                      className="bg-[#0B4459] text-white px-4 py-2 ml-auto items-center rounded-lg flex flex-gap-x-3 "
                      onClick={onClick}
                    >
                      Show All 7 Volunteering Experiences
                      <ArrowBigRightDash className="ml-4" />
                    </button>
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

export default Volunteering;
