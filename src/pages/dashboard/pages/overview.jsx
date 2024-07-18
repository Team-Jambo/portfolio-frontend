import { useEffect, useState } from "react";
import { K } from "../../../constants";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetProjects } from "../../../services/projects";
import { apiGetSkills } from "../../../services/skills";
import { apiGetVolunteering } from "../../../services/volunteering";
import PageLoader from "../../../components/PageLoader";

const Overview = () => {
  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAchievements,
        totalEducation,
        totalExperiences,
        totalProjects,
        totalVolunteering,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetEducation(),
        apiGetExperiences(),
        apiGetProjects(),
        apiGetVolunteering(),
      ]);
      console.log("Toatl skills:", totalSkills);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      };
      console.log(newData);

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="py-40 px-28">
          <div className="grid grid-cols-3 w-[800px] gap-10 justify-center">
            {K.OVERVIEW.map(({ icon, text, total }, index) => (
              <div
                key={index}
                className=" bg-white text-[#08355D] font-bold shadow-md rounded-xl flex flex-col p-9 ring-1 ring-slate-900/5  hover:bg-[#9BCEE6] hover:ring-[#9BCEE6] transition:transform 0.3s ease, box-shadow 0.3s ease; hover:-translate-y-1 hover:scale-110 duration-300 box-border"
              >
                <div className="flex justify-between">
                  <span className="text-[#2286C9] size-6">{icon}</span>
                  <span className="=text-4xl font-semibold text-[#2286c9]">
                    {text}
                  </span>
                </div>
                <span className="text-2xl font-semibold pt-9 ml-auto text-[#f79626]">
                  {total}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
