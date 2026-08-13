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
    gallery: [personalWebsiteImage, spokenImage, littleImage, trafficImage],
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
    features: [
      "Light and Dark Mode",
      "Email Functionality Injected",
      "Modern and Minimalist Sleek Design",
    ],
    github: "https://github.com/zeriaaron/personal-website",
    year: 2026,
    difficulty: 6,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
  },
  {
    id: 2,
    title: "Little Lemon Restaurant Website",
    description:
      "A website dedicated for the completing the project in the Meta Frontend Development Professional Certificate",
    category: "Frontend Development",
    image: littleImage,
    gallery: [personalWebsiteImage, spokenImage, freqTableImage],
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
    features: ["Sabi", "Lets", "Asdasd"],
    github: "",
    year: 2025,
    difficulty: 3,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
  },
  {
    id: 3,
    title: "Spoken",
    description:
      "Filipino sign language translator utilizing Computer Vision and Hand Landmark Detection for Deaf and Mute Individuals",
    category: "Artificial Intelligence",
    image: spokenImage,
    gallery: [personalWebsiteImage, spokenImage, freqTableImage],
    tech: [
      "Python",
      "MediaPipe",
      "LSTM",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Tkinter",
    ],
    features: ["Sabi", "Lets", "Asdasd"],
    github: "",
    year: 2024,
    difficulty: 1,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
  },
  {
    id: 4,
    title: "Philippine Informal Reading Inventory",
    description:
      "An app that automates the calculation of students' informal reading inventory in Mamatid Elementary School",
    category: "Data Automation",
    image: philiriImage,
    gallery: [personalWebsiteImage, spokenImage, freqTableImage],
    tech: ["Excel VBA"],
    features: ["Sabi", "Lets", "Asdasd"],
    github: "",
    year: 2023,
    difficulty: 5,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
  },
  {
    id: 5,
    title: "Smart Calculator",
    description:
      "A smart calculator application that extends its funcionality on an advanced and complex mathematical operations.",
    category: "Software Development & Mathematics",
    image: smartCalculatorImage,
    gallery: [personalWebsiteImage, spokenImage, freqTableImage],
    tech: ["MATLAB"],
    features: ["Sabi", "Lets", "Asdasd"],
    github: "",
    year: 2022,
    difficulty: 2,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
  },
  {
    id: 6,
    title: "Frequency Distribution Table",
    description:
      "An app with graphical user interface that provides beautiful views and graphs of the complete information of the chart.",
    category: "Software Development & Mathematics",
    image: freqTableImage,
    gallery: [personalWebsiteImage, spokenImage, freqTableImage],
    tech: ["MATLAB"],
    features: ["Sabi", "Lets", "Asdasd"],
    github: "",
    year: 2022,
    difficulty: 7,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
  },
  {
    id: 7,
    title: "CheckMe!",
    description: `A desktop application with a website documentation made for teachers to check students' quizzes.`,
    category: "Frontend & Software Development",
    image: checkMeImage,
    gallery: [personalWebsiteImage, spokenImage, freqTableImage],
    tech: ["HTML", "CSS", "JavaScript", "Tkinter"],
    features: ["Sabi", "Lets", "Asdasd"],
    github: "",
    year: 2022,
    difficulty: 8,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
  },
  {
    id: 8,
    title: "Traffic Lights Pulo Diezmo Road",
    description: `A miniature software and hardware development that reflects the Pulo Diezmo Road's traffic lights at Laguna.`,
    category: "Electronics",
    image: trafficImage,
    gallery: [personalWebsiteImage, spokenImage, freqTableImage],
    tech: ["Arduino UNO", "7-segment display"],
    features: ["Sabi", "Lets", "Asdasd"],
    github: "",
    year: 2023,
    difficulty: 4,
    cas: [
      {
        id: 1,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
      {
        id: 2,
        challenge: "I am challenged with",
        solution: "This is my solution",
      },
    ],
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
