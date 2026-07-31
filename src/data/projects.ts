import personalWebsiteImage from "../assets/personal_website.png";
import spokenImage from "../assets/spoken.jpg";
import philiriImage from "../assets/philiri.png";
import smartCalculatorImage from "../assets/smart_calculator.png";
import freqTableImage from "../assets/freq_table.png";
import checkMeImage from "../assets/checkme.png";
import trafficImage from "../assets/traffic_lights.png";
import littleImage from "../assets/little_lemon.png";

export const projects = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "A personalized website for showcasing my skills, experience, work and providing information about me",
    category: "Frontend Development",
    image: personalWebsiteImage,
    tech: [
      "React",
      "HTML",
      "TailwindCSS",
      "TypeScript",
      "React Router",
      "React Hook Form",
      "Zustand",
      "Zod",
      "Jest",
      "EmailJS",
      "Git",
      "GitHub",
    ],
    github: "",
    year: 2026,
  },
  {
    id: 2,
    title: "Little Lemon Restaurant Website",
    description:
      "A website dedicated for the completing the project in the Meta Frontend Development Professional Certificate",
    category: "Frontend Development",
    image: littleImage,
    tech: [
      "React",
      "Figma",
      "React Router",
      "Yup",
      "Zod",
      "Formik",
      "Redux",
      "Jest",
      "Git",
      "GitHub",
    ],
    github: "",
    year: 2025,
  },
  {
    id: 3,
    title: "Spoken",
    description:
      "Filipino sign language translator utilizing Computer Vision and Hand Landmark Detection for Deaf and Mute Individuals",
    category: "Artificial Intelligence",
    image: spokenImage,
    tech: [
      "Python",
      "MediaPipe",
      "LSTM",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Tkinter",
    ],
    github: "",
    year: 2024,
  },
  {
    id: 4,
    title: "Philippine Informal Reading Inventory",
    description:
      "An app that automates the calculation of students' informal reading inventory in Mamatid Elementary School",
    category: "Data Automation",
    image: philiriImage,
    tech: ["Excel VBA"],
    github: "",
    year: 2023,
  },
  {
    id: 5,
    title: "Smart Calculator",
    description:
      "A smart calculator application that extends its funcionality on an advanced and complex mathematical operations.",
    category: "Software Development & Mathematics",
    image: smartCalculatorImage,
    tech: ["MATLAB"],
    github: "",
    year: 2022,
  },
  {
    id: 6,
    title: "Frequency Distribution Table",
    description:
      "An app with graphical user interface that provides beautiful views and graphs of the complete information of the chart.",
    category: "Software Development & Mathematics",
    image: freqTableImage,
    tech: ["MATLAB"],
    github: "",
    year: 2022,
  },
  {
    id: 7,
    title: "CheckMe!",
    description: `A desktop application with a website documentation made for teachers to check students' quizzes.`,
    category: "Frontend & Software Development",
    image: checkMeImage,
    tech: ["HTML", "CSS", "JavaScript", "Tkinter"],
    github: "",
    year: 2022,
  },
  {
    id: 8,
    title: "Traffic Lights Pulo Diezmo Road",
    description: `A miniature software and hardware development that reflects the Pulo Diezmo Road's traffic lights at Laguna.`,
    category: "Electronics",
    image: trafficImage,
    tech: ["Arduino UNO", "7-segment display"],
    github: "",
    year: 2023,
  },
  // {
  //   id: 9,
  //   title:,
  //   description:,
  //   category:,
  //   image:,
  //   tech: [''],
  //   github: '',
  // },
];
