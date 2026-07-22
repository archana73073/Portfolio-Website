import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from './formal.jpeg';
import projectImg4 from './project4.avif';
import projectImg5 from './calculator.png';

// certificates
import javaCertificate from "./java.png";
import tcsionCertificate from "./tcsion.png";
import dbmsCertificate from "./dbmsinfosys.png";
import aiToosCertificate from "./aiTools.png";
import htmlCssJsWorkshopCertificate from "./htmlCssJsWorkshop.png";


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'Creating innovative solutions for real-world problems.',
      color: 'text-purple'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing clean, maintainable, and efficient code.',
      color: 'text-blue'
    }
  ];

export const skills = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Knowledge of Java, JavaScript, Python with hands-on coding and problem-solving experience.',
    tags: ['Java','Javascript','Python'],
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React.js','HTML','CSS','JavaScript','Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js','REST API'],
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Working with SQL, MySQL, and MongoDB for efficient data storage and management.',
    tags: ['MongoDB', 'SQL', 'MySQL'],
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Problem Solving',
    icon: FaLightbulb,
    description: 'Practicing Data Structures and Algorithms to improve logical thinking and coding skills.',
    tags: ['DSA','OOPs','Leetcode','Problem Solving'],
  },

];



export const projects = [
  
  {
    title: "Portfolio Website",
    description: "Built a responsive portfolio using React.js, Tailwind CSS, and Vite.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS","Vite"],
    icons: [FaReact, FaCloud],
    demo: "https://archana-portfolio73070.netlify.app/",
    code: "https://github.com/archana73073/Portfolio-Website",
  },
  {
    title: "Python-GUI Calculator",
    description: "Built a Python-GUI Calculator handling arithmetic operations with event-driven UI.",
    image: projectImg5,
    tech: ["Python","Tkinter"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "demo.png",
    code: "https://github.com/archana73073/Python_GUI_calculator",
    
  },
  
];


export const educationData= [
  {
    degree: "B.Tech",
    instituteName: "Galgotias College of Engineering and Technology , Greater Noida",
    duration: "2023 - Present",
    description:
      "CGPA: 8.34",
    color: "purple"
  },
  {
    degree: "Senior Secondary",
    instituteName: "Swami Vivekanand Intermediate College, Khadda Kushinagar",
    duration: "2022 - 2023",
    description:
      "Percentage: 92%",
    color: "pink"
  },
  {
    degree: "High School",
    instituteName: "Kanti Devi I C , Souharauna Kushinagar",
    duration: "2021 - 2022",
    description:
      "Percentage: 78%",
    color: "blue"
  }
];

export const certificateData=[
  {
    id: 1,
    title: "Programming in Java",
    organization: "NPTEL - IIT Kharagpur",
    duration: "Jan - Apr 2026 (12 weeks)",
    score:"97% (Elite)",
    image: javaCertificate,
    view: javaCertificate,
  },

  {
    id: 2,
    title: "AI and Cybersecurity Awareness",
    organization: "TCS iON - TCS Foundation",
    date: "15 July 2026",
    program: "AI For All",
    image: tcsionCertificate,
    view: tcsionCertificate,
    // download: awsCertificate,
  },

  {
    id: 3,
    title: "DBMS Part - 1",
    organization: "Infosys Springboard",
    date: "2 Dec 2025",
    image: dbmsCertificate,
    view: dbmsCertificate,
  },

  {
    id: 4,
    title: "AI Tools Workshop",
    organization: "be10x",
    date: "7 Dec 2025",
    image: aiToosCertificate,
    view: aiToosCertificate,
    // download: reactCertificate,
  },

  {
    id: 5,
    title: "HTML CSS Js Workshop",
    organization: "Engiversee",
    date: "2024",
    image: htmlCssJsWorkshopCertificate,
    view: htmlCssJsWorkshopCertificate,
    // download: sqlCertificate,
  },

];
