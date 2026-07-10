import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from './arc_pic.jpg';
import projectImg4 from './project4.avif';
import projectImg5 from './calculator.png';



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
    description: 'Knowledge of Java, JavaScript, Python, and C++ with hands-on coding and problem-solving experience.',
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
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
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
