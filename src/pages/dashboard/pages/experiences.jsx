import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";

const Experiences = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Experiences"
      buttonText="Add New Experience"
      onClick={() => navigate("/dashboard/experience/add-experecies")}
    >
      <span>Experience List here</span>
    </PagesLayout>
  );
};

export default Experiences;
