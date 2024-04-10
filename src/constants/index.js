import {
  docker,
  express,
  javascript,
  mariadb,
  nodejs,
  react,
  tailwind,
  vue,
  html,
  css3,
  mongodb,
  php,
  manjaro,
  kali,
  windows,
  hiveHub,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "history",
    title: "History",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    description:
      "Able to create complex HTML structures and utilize HTML5 features like semantic markup, form validation, and multimedia embedding.",
  },
  {
    name: "JavaScript",
    icon: javascript,
    description:
      "Possess a fundamental understanding of JavaScript syntax, including variables, loops, and functions. Developing the ability to apply programming concepts to practical applications and beginning to explore more advanced features and libraries in JavaScript.",
  },
  {
    name: "ExpressJS",
    icon: express,
    description:
      "Familiar with creating web applications using ExpressJS, routing, middleware, and handling HTTP requests.",
  },
  {
    name: "Vue JS",
    icon: vue,
    description:
      "Familiar with VueJS framework, reactive data binding, component structure, and creating dynamic user interfaces.",
  },
  {
    name: "React JS",
    icon: react,
    description:
      "Familiar with ReactJS framework, virtual DOM, JSX syntax, and building complex UI components.",
  },
  {
    name: "Node JS",
    icon: nodejs,
    description:
      "Familiar with NodeJS runtime environment, event-driven programming, asynchronous I/O, and using npm packages.",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description:
      "Familiar with using TailwindCSS utility-first CSS framework to style web applications, and creating custom designs using its extensive class library.",
  },
  {
    name: "CSS3",
    icon: css3,
    description:
      "Able to create responsive layouts, implement animations and transitions, and use preprocessors like Sass or Less.",
  },
  {
    name: "MariaDB",
    icon: mariadb,
    description:
      "Familiar with MariaDB database, SQL syntax, and basic database administration.",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description:
      "Familiar with MongoDB NoSQL database, document-oriented data model, and querying documents using MongoDB Compass.",
  },
  {
    name: "Docker",
    icon: docker,
    description:
      "Familiar with Docker containerization platform, creating and managing container images, and deploying applications using Docker Compose.",
  },
  {
    name: "PHP",
    icon: php,
    description:
      "Familiar with PHP programming language, server-side scripting, and building dynamic web pages and applications.",
  },
  {
    name: "Manjaro Linux",
    icon: manjaro,
    description:
      "Experienced with Linux system administration, including managing users and groups, setting up networking, and configuring services.",
  },
  {
    name: "Kali Linux",
    icon: kali,
    description:
      "Experienced with penetration testing and vulnerability assessment, including using Kali tools like Nmap, Metasploit, and Wireshark.",
  },
  {
    name: "Windows",
    icon: windows,
    description:
      "Proficient in scripting and automation with PowerShell, managing Windows Server roles and services, and optimizing system performance and security.",
  },
];

const work = [
  {
    name: "HiveHub",
    image: hiveHub,
    description:
      "HiveHub is a C++ application designed to efficiently collect and manage information about different individuals. The project focuses on user-friendly features such as adding, editing, removing, and filtering people based on various criteria.",
    starting_year: "Nov 1, 2023",
    ending_year: "Jan 25, 2024",
    link: "https://github.com/HyperekDerg/HiveHub",
    technology: "C++",
  },
  {
    name: "UWS Knowledge Base",
    image:
      "https://user-content.gitlab-static.net/3cc7c7173fa6f6589cef1dc4ad14e13e110ee683/68747470733a2f2f67656e6269742e7577732e6564752e706c2f6c6f676f2e706e67",
    description:
      "UWS Knowledge Base is a project carried out by GENBIT research circle. This project creates a full-stack application supporting frontend, backend and database.",
    starting_year: "March 17, 2024 ",
    ending_year: "Present day",
    link: "https://gitlab.com/genbit-test-side/baza-wiedzy",
    technology: "React, Laravel, Docker, Node.js",
  },
];

const history = [
  {
    name: "Internship at Animativ Software House",
    description:
      "During my internship at Animativ, I specialized in Drupal backend development while also assisting with some frontend tasks and docker DevOps. Additionally, I worked on programming GMS modules to connect them with smart house applications.",
    startDate: "Jul 2022",
    endDate: "Aug 2022",
    location: "Mińsk Mazowiecki, Poland",
  },
  {
    name: "UWS GENBIT research circle",
    description:
      "I am a member of the research circle at UWS, where I actively participate in various IT-related activities and events. As a member, I engage in discussions, workshops, and projects aimed at enhancing my skills and knowledge in the field of computer science.",
    startDate: "Jan 2024",
    endDate: "Present day",
    location: "Siedlce, Poland",
  },
];

export { navLinks, technologies, work, history };
