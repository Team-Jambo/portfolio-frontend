import {
  BookCopy,
  BriefcaseBusiness,
  CopyPlus,
  FileSliders,
  GraduationCap,
  LayoutDashboard,
  MessageSquareCode,
  UserRoundCheck,
} from "lucide-react";

export const K = {
  NAVLINKS: [
    {
      icon: <LayoutDashboard />,
      text: "Home",
      link: "/dashbord/home",
    },
    {
      icon: <FileSliders />,
      text: "About",
      link: "/dashbord/about",
    },
    {
      icon: <BookCopy />,
      text: "Services",
      link: "/dashbord/services",
    },
    {
      icon: <GraduationCap />,
      text: "Education",
      link: "/dashbord/education",
    },
    {
      icon: <CopyPlus />,
      text: "Experience",
      link: "/dashbord/experience",
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Work",
      link: "/dashbord/work",
    },
    {
      icon: <MessageSquareCode />,
      text: "Blog",
      link: "/dashbord/blog",
    },
    {
      icon: <UserRoundCheck />,
      text: "Contact",
      link: "/dashbord/contact",
    },
  ],
};
