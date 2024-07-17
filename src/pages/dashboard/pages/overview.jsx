import { K } from "../../../constants";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetProjects } from "../../../services/projects";
import { apiGetSkills } from "../../../services/skills";
import { apiGetVolunteering } from "../../../services/volunteering";

const Overview = () => {
  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });
  cons[(isLoading, setIsLoading)] = useState(false);

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
        apiGetSkills,
        apiGetAchievements,
        apiGetEducation,
        apiGetExperiences,
        apiGetProjects,
        apiGetVolunteering,
      ]);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      };

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // getData()
  }, []);

  return (
    <div className="py-40  px-10">
      <div className="grid grid-cols-3 gap-6">
        {K.OVERVIEW.map(({ icon, text, total }, index) => (
          <div
            key={index}
            className="h-40 w-[280px] bg-[#9BCEE6] text-[#08355D] font-bold shadow-md rounded-xl flex flex-col p-5"
          >
            <div className="flex justify-between">
              <span className="text-bg-[#0B4459]">{icon}</span>
              <span className="=text-lg font-semibold">{text}</span>
            </div>
            <span className="text-2xl font-semibold">{total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
