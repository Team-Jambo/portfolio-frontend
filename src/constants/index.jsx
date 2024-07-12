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
      link: "home",
    },
    {
      icon: <FileSliders />,
      text: "About",
      link: "/dashboard/about",
    },
    {
      icon: <BookCopy />,
      text: "Services",
      link: "/dashboard/services",
    },
    {
      icon: <GraduationCap />,
      text: "Education",
      link: "/dashboard/education",
    },
    {
      icon: <CopyPlus />,
      text: "Experience",
      link: "/dashboard/experience",
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Work",
      link: "/dashboard/work",
    },
    {
      icon: <MessageSquareCode />,
      text: "Blog",
      link: "/dashboard/blog",
    },
    {
      icon: <UserRoundCheck />,
      text: "Contact",
      link: "/dashboard/contact",
    },
  ],
};
