import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/dashboard/layouts";
import Overview from "./pages/dashboard/pages/overview";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/dashboard/pages/home";
import Skills from "./pages/dashboard/pages/skills";
import Services from "./pages/dashboard/pages/services";
import Education from "./pages/dashboard/pages/education";
import Experience from "./pages/dashboard/pages/experience";
import Work from "./pages/dashboard/pages/work";
import Blog from "./pages/dashboard/pages/blog";
import Contact from "./pages/dashboard/pages/contact";
import Preview from "./pages/preview";
import About from "./pages/dashboard/pages/about";

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
          path: "home",
          element: <Home />,
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
          path: "services",
          element: <Services />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "work",
          element: <Work />,
        },
        {
          path: "blog",
          element: <Blog />,
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
