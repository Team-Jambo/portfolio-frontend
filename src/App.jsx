import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/dashboard/layouts";
import Overview from "./pages/dashboard/pages/overview";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Skills from "./pages/dashboard/pages/skills";
import Services from "./pages/dashboard/pages/services";
import Education from "./pages/dashboard/pages/education";
import Experiences from "./pages/dashboard/pages/experiences";
import Work from "./pages/dashboard/pages/work";
import Contact from "./pages/dashboard/pages/contact";
import Preview from "./pages/preview";
import About from "./pages/dashboard/pages/about";
import AddSkill from "./pages/dashboard/pages/addSkill";
import AddExperience from "./pages/dashboard/pages/addExperience";
import Addwork from "./pages/dashboard/pages/addWork";
import Achievements from "./pages/dashboard/pages/achievements";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
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
          path: "overview",
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
          path: "services",
          element: <Services />,
        },
        {
          path: "education",
          element: <Education />,
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
          path: "work",
          element: <Work />,
        },
        {
          path: "work/add-work",
          element: <Addwork />,
        },
        {
          path: "achievements",
          element: <Achievements />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "preview",
      element: <Preview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
