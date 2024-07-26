import { useEffect, useState } from "react";
import { K } from "../../../constants";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetProjects } from "../../../services/projects";
import { apiGetSkills } from "../../../services/skills";
import { apiGetVolunteering } from "../../../services/volunteering";
import PageLoader from "../../../components/PageLoader";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link, useOutletContext } from "react-router-dom";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};
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
  const [profile] = useOutletContext();

  const getPreviewLink = () => {
    if (!profile) return "/preview/jamboree";

    return `/preview/${User.userName}`;
  };

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

      console.log("Toatl skills:", totalSkills.data.Skills.length);

      const newData = {
        skills: totalSkills.data.skills.length ?? 0,
        projects: totalProjects.data.projects.length ?? 0,
        achievements: totalAchievements.data.achievements.length ?? 0,
        volunteering: totalVolunteering.data.volunteering.length ?? 0,
        education: totalEducation.data.education.length ?? 0,
        experiences: totalExperiences.data.experience.length ?? 0,
      };

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
        <div className="py-8 px-28">
          <Link
            to={getPreviewLink()}
            className="bg-primary text-white ml-[770px] px-6 py-3 rounded-lg"
          >
            View Preview
          </Link>

          <div className="grid grid-cols-3 w-[900px] gap-12 justify-center">
            {K.OVERVIEW.map(({ icon, text, id }, index) => (
              <motion.div
                key={index}
                className=" bg-white text-[#08355D] font-bold shadow-md rounded-xl flex flex-col p-9 ring-1 ring-slate-900/5  hover:bg-[#9BCEE6] hover:ring-[#9BCEE6] hover:shadow-2xl transition:transform 0.3s ease, box-shadow 0.3s ease; hover:-translate-y-1 hover:scale-110 duration-300 box-border"
                variants={fadeInAnimationVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex justify-between">
                  <span className="text-[#2286C9] size-6">{icon}</span>
                  <span className="=text-4xl font-semibold text-[#2286c9]">
                    {text}
                  </span>
                </div>
                <CountUp
                  className="text-2xl font-semibold"
                  start={0}
                  end={data[id]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
