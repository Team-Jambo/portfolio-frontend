import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/dashboard/layouts";
import Overview from "./pages/dashboard/pages/overview";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Skills from "./pages/dashboard/pages/skills";
import Education from "./pages/dashboard/pages/education";
import Experiences from "./pages/dashboard/pages/experiences";
import Preview from "./pages/preview";
import About from "./pages/dashboard/pages/about";
import AddSkill from "./pages/dashboard/pages/addSkill";
import AddEducation from "./pages/dashboard/pages/addEducation";
import AddExperience from "./pages/dashboard/pages/addExperience";
import Achievements from "./pages/dashboard/pages/achievements";
import Volunteering from "./pages/dashboard/pages/volunteering";
import AddVolunteering from "./pages/dashboard/pages/addVolunteering";
import Projects from "./pages/dashboard/pages/projects";
import AddProject from "./pages/dashboard/pages/addProject";
import AddAchievement from "./pages/dashboard/pages/addachievement";
import Pricing from "./pages/auth/pricing";
import { apiGetUserDetails } from "./services/preview";
import AuthLayout from "./pages/auth/authLayout";
import { toast } from "react-toastify";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "skills/add-skill",
          element: <AddSkill />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "education/add-education",
          element: <AddEducation />,
        },
        {
          path: "experiences",
          element: <Experiences />,
        },
        {
          path: "experiences/add-experience",
          element: <AddExperience />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "projects/add-project",
          element: <AddProject />,
        },
        {
          path: "achievements",
          element: <Achievements />,
        },
        {
          path: "achievements/add-achievement",
          element: <AddAchievement />,
        },
        {
          path: "volunteering",
          element: <Volunteering />,
        },
        {
          path: "volunteering/add-volunteering",
          element: <AddVolunteering />,
        },
      ],
    },
    {
      path: "preview/:username",
      element: <Preview />,
      loader: async ({ params }) => {
        const username = params.username;
        try {
          const response = await apiGetUserDetails(username);
          const userProfileData = response?.data.user;
          return userProfileData;
        } catch (error) {
          toast.error("An error occured");
          return null;
        }
      },
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
