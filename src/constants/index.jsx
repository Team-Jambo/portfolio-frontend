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
  SeparatorVerticalIcon,
  SettingsIcon,
  Sparkles,
} from "lucide-react";
import ImageOne from "../assets/images/real-estaste.jpeg";
import ImageTtwo from "../assets/images/abouta.jpg";
import ImageThree from "../assets/images/food.jpeg";
import ImageFour from "../assets/images/fitness.jpg";
import ImageFive from "../assets/images/cash.jpg";

export const K = {
  NAVLINKS: [
    {
      icon: <LayoutDashboardIcon />,
      text: "Overview",
      link: "/dashboard",
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
  ],
  OVERVIEW: [
    {
      icon: <BookText />,
      text: "Skills",
      total: 5,
    },
    {
      icon: <GraduationCap />,
      text: "Education",
      total: 4,
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
      responsibilities:
        " Translate the business requirements and user stories to derive software design and performance requirements. Develop and maintain websites using popular frameworks, including React, Node.js, MongoDB, Express.js, and Bootstrap",
    },
    {
      position: "Web Development Trainee",
      company: "Company: MEST",
      location: "Location: Accra",
      startDate: "Start Date: January 2024",
      endDate: "End Date: April 2024",
      responsibilities:
        "Participated in agile software development and assisted the web development team with all aspects of website and application design.",
    },

    {
      position: "Creative Analyst",
      company: "Company: The Synergy Hub",
      location: "Location: Accra",
      startDate: "Start Date: May 2018",
      endDate: "End Date: December 2023",
      responsibilities:
        "Directed writes to regularly write about topics spanning careers, performance, business and professional success, in Accra’s most read news outlet and Managed a team of creatives that placed our website on Time square for a month",
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
  PROJECTS: [
    {
      projectName: "BOLIVARD STAYS WEBSITE",
      describtion:
        "A one stop shop website for persons looking to buy and rent houses in Ghana",
      contributors: "Antoinette Amedza & Ruth Boateng",
      date: "April 2016",
      skills: "Counselor",
      productUrl: "",
      image: ImageFive,
    },
    {
      projectName: "HMTL",
      describtion: "100",
      contributors: "Alex",
      date: "April 2016",
      skills: "Counselor",
      productUrl: "Counselor",
      image: ImageOne,
    },
    {
      projectName: "HMTL",
      describtion: "100",
      contributors: "Alex",
      date: "April 2016",
      skills: "Counselor",
      productUrl: "Counselor",
      image: ImageThree,
    },
    {
      projectName: "HMTL",
      describtion: "100",
      contributors: "Alex",
      date: "April 2016",
      skills: "Counselor",
      productUrl: "Counselor",
      image: ImageFour,
    },
    {
      projectName: "HMTL",
      describtion: "100",
      contributors: "Alex",
      date: "April 2016",
      skills: "Counselor",
      productUrl: "Counselor",
      image: ImageTtwo,
    },
    {
      projectName: "HMTL",
      describtion: "100",
      contributors: "Alex",
      date: "April 2016",
      skills: "Counselor",
      productUrl: "Counselor",
      image: "",
    },
  ],
  EDUCATION: [
    {
      institution: "HARVARD UNIVERSITY",
      program: "Masters in Computer Science",
      location: "United Kingdom",
      grade: "Sobresaliente (Excellent), cum laude",
      startDate: "September 2022",
      endDate: "June 2024",
    },
    {
      institution: "LONDON SCHOOL OF ECONOMICS",
      program: "Masters in Real Estaste Finance",
      location: "United Kingdom",
      grade: "Distinction",
      startDate: "January 2018",
      endDate: "June 2020",
    },
    {
      institution: "KWAME NRUMAH UNIVERSITY OF SCIENCE & TECH",
      program: "BSc. Land Economy",
      location: "Kumasi",
      grade: "First Class Honours",
      startDate: "September 2012",
      endDate: "June 2016",
    },
    {
      institution: "WESLEY GIRLS HIGH SCHOOL",
      program: "GENERAL ARTS",
      location: "CapeCost",
      grade: "Distinction",
      startDate: "September 2009",
      endDate: "June 2012",
    },
  ],
  PERSONALINFORMATION: [
    {
      name: "Stephen Parker",
      age: "25 years",
      resident: "Accra,Ghana",
      address: "2nd Slate Avenue, Gbawe",
      email: "stevepark@gmail.com",
    },
  ],
  ACHIEVEMENTS: [
    {
      awardType: "Best Creative Team",
      description:
        "Outstanding Performance for driving a team  top notch designers over  for project X",
      image: "",
      date: " June,2022",
      nameOfInstitution: "Heal the World Foundation",
    },
    {
      awardType: "Best Employee of the year Aawrd",
      description:
        "Best Employee in all service delivery activities for the year 2016",
      image: "",
      date: " December,20216",
      nameOfInstitution: "Heal the World Foundation",
    },
    {
      awardType: "Best Employee of the year Aawrd",
      description:
        "Best Employee in all service delivery activities for the year 2016",
      image: "",
      date: " December,20216",
      nameOfInstitution: "Heal the World Foundation",
    },
    {
      awardType: "Best Employee of the year Aawrd",
      description:
        "Best Employee in all service delivery activities for the year 2016",
      image: "",
      date: " December,20216",
      nameOfInstitution: "Heal the World Foundation",
    },
  ],
};
