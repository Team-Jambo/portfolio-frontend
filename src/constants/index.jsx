import { SparklesIcon } from "@heroicons/react/16/solid";
import {
  Award,
  BookText,
  BriefcaseBusiness,
  CopyPlus,
  FileSliders,
  FolderKanbanIcon,
  GraduationCap,
  HandHelpingIcon,
  LayoutDashboardIcon,
  LogOut,
  SeparatorVerticalIcon,
  SettingsIcon,
  Sparkles,
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
      text: "Projects",
      link: "/dashboard/projects",
    },
    {
      icon: <Sparkles />,
      text: "Achievements",
      link: "/dashboard/achievements",
    },
    {
      icon: <HandHelpingIcon />,
      text: "Volunteering",
      link: "/dashboard/volunteering",
    },

    {
      icon: <UserRoundCheck />,
      text: "Contact",
      link: "/dashboard/contact",
    },
    {
      icon: <LogOut />,
      text: "Logout",
      link: "/signup",
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
    {
      icon: <SeparatorVerticalIcon />,
      text: "Socials",
      total: 4,
    },
  ],

  SKILLS: [
    {
      typeOfSkill: "HMTL",
      levelOfProfeciency: "100",
    },
    {
      typeOfSkill: "CCS",
      levelOfProfeciency: "90",
    },
    {
      typeOfSkill: "JavaScript",
      levelOfProfeciency: "60",
    },
    {
      typeOfSkill: "React",
      levelOfProfeciency: "40",
    },
    {
      typeOfSkill: "Node.js",
      levelOfProfeciency: "30",
    },
  ],
  EXPERIENCES: [
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
  VOLUNTEERING: [
    {
      organization: "NADMO",
      describtion: "Disaster and Humanitarian Relief",
      skill: "Location: Accra",
      startDate: "June 2016",
      endDate: "October 2016",
      role: "To offer free psychological first aid, trauma counselling and group psychotherapy for diasaster survivors",
      responsibility:
        "I volunteered with a team of professionals and NGOs in Accra, Ghana to offer free psychological first aid, trauma counselling and group psychotherapy for survivors, families and the entire community of Amasaman who were involved in the collapsed school building in March 2019.",
      location: "Accra",
    },
    {
      organization: "LEADIT",
      describtion: "Eduaction",
      skill: "Location: Accra",
      startDate: "March 2016",
      endDate: "April 2018",
      role: "Business and Investment Educator",
      responsibility:
        "As an LeadIt Student participant, we turn basic needs into business opportunities by embarking on creative projects, building feasible business idea and giving livelihood to set target audience in an economically, socially and environmentally sustainable wayAs an Enactus Student participant, we turn basic needs into business opportunities by embarking on creative projects, building feasible business idea and giving livelihood to set target audience in an economically, socially and environmentally sustainable way. . ",
      location: "Accra",
    },
    {
      organization: "Heal The World Foundation",
      describtion: "Children",
      skill: "Location: Accra",
      startDate: "March 2015",
      endDate: "April 2016",
      role: "Counselor",
      responsibility:
        "We focus on facilitating an intentional recovery journey for sexual abuse survivors through our 3 core programs: - Heal, Educate & Empower ",
      location: "Accra",
    },
  ],
};
