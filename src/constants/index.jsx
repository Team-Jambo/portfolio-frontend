import {
  Award,
  BookCopy,
  BookText,
  BriefcaseBusiness,
  CopyPlus,
  FileSliders,
  FolderKanbanIcon,
  GraduationCap,
  LayoutDashboardIcon,
  SettingsIcon,
  UserRoundCheck,
} from "lucide-react";

export const K = {
  NAVLINKS: [
    {
      icon: <LayoutDashboardIcon />,
      text: "Overview",
      link: "/dashboard/overview",
    },
    {
      icon: <FileSliders />,
      text: "About",
      link: "/dashboard/about",
    },
    {
      icon: <SettingsIcon />,
      text: "Skills",
      link: "/dashboard/skills",
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
      text: "Experiences",
      link: "/dashboard/experiences",
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Work",
      link: "/dashboard/work",
    },

    {
      icon: <UserRoundCheck />,
      text: "Contact",
      link: "/dashboard/contact",
    },
  ],
  OVERVIEW: [
    {
      icon: <BookText />,
      text: "Skills",
      total: 5,
    },
    {
      icon: <FolderKanbanIcon />,
      text: "Projects",
      total: 10,
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Experiences",
      total: 9,
    },
    {
      icon: <Award />,
      text: "Achievements",
      total: 40,
    },
  ],

  SKILLS: [
    {
      typeOfSkill: "HMTL",
      levelOfProfeciency: "Advanced",
    },
    {
      typeOfSkill: "CCS",
      levelOfProfeciency: "Advanced",
    },
    {
      typeOfSkill: "JavaScript",
      levelOfProfeciency: "Intermediate",
    },
    {
      typeOfSkill: "React",
      levelOfProfeciency: "Beginner",
    },
    {
      typeOfSkill: "Node.js",
      levelOfProfeciency: "Beginner",
    },
  ],
  WORK: [
    {
      position: "Position: Junior Web Developer",
      company: "Company: MEST",
      location: "Location: Accra",
      startDate: "Start Date:  May 2024 - Present",
      endDate: "",
      responsibilitiesOne:
        "Translate the business requirements and user stories to derive software design and performance requirements",
      responsibilitiesTwo:
        "Develop and maintain websites using popular frameworks, including React, Node.js, MongoDB, Express.js, and Bootstrap",
    },
    {
      position: "Web Development Trainee",
      company: "Company: MEST",
      location: "Location: Accra",
      startDate: "Start Date: January 2024",
      endDate: "End Date: April 2024",
      responsibilitiesOne: " Participated in agile software development",
      responsibilitiesTwo:
        "Assisted the web development team with all aspects of website and application design.",
    },
  ],
};
