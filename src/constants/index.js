import {
  blender,
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
  windows
} from '../assets'

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
      id: "contact",
      title: "Contact",
    },
  ];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    description: "Able to create complex HTML structures and utilize HTML5 features like semantic markup, form validation, and multimedia embedding.",
  },
  {
    name: "JavaScript",
    icon: javascript,
    description: "Possess a fundamental understanding of JavaScript syntax, including variables, loops, and functions. Developing the ability to apply programming concepts to practical applications and beginning to explore more advanced features and libraries in JavaScript.",
  },
  {
    name: "ExpressJS",
    icon: express,
    description: "Familiar with creating web applications using ExpressJS, routing, middleware, and handling HTTP requests.",
  },
  {
    name: "Vue JS",
    icon: vue,
    description: "Familiar with VueJS framework, reactive data binding, component structure, and creating dynamic user interfaces.",
  },
  {
    name: "React JS",
    icon: react,
    description: "Familiar with ReactJS framework, virtual DOM, JSX syntax, and building complex UI components.",
  },
  {
    name: "Node JS",
    icon: nodejs,
    description: "Familiar with NodeJS runtime environment, event-driven programming, asynchronous I/O, and using npm packages.",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description: "Familiar with using TailwindCSS utility-first CSS framework to style web applications, and creating custom designs using its extensive class library.",
  },
  {
    name: "CSS3",
    icon: css3,
    description: "Able to create responsive layouts, implement animations and transitions, and use preprocessors like Sass or Less.",
  },
  {
    name: "MariaDB",
    icon: mariadb,
    description: "Familiar with MariaDB database, SQL syntax, and basic database administration.",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description: "Familiar with MongoDB NoSQL database, document-oriented data model, and querying documents using MongoDB Compass.",
  },
  {
    name: "Docker",
    icon: docker,
    description: "Familiar with Docker containerization platform, creating and managing container images, and deploying applications using Docker Compose.",
  },
  {
    name: "PHP",
    icon: php,
    description: "Familiar with PHP programming language, server-side scripting, and building dynamic web pages and applications.",
  },
  {
    name: "Blender",
    icon: blender,
    description: "Familiar with Blender 3D modeling and animation software, basic modeling tools, and creating simple 3D models and animations.",
  },
  {
    name: "Manjaro Linux",
    icon: manjaro,
    description: "Experienced with Linux system administration, including managing users and groups, setting up networking, and configuring services.",
  },
  {
    name: "Kali Linux",
    icon: kali,
    description: "Experienced with penetration testing and vulnerability assessment, including using Kali tools like Nmap, Metasploit, and Wireshark.",
  },
  {
    name: "Windows",
    icon: windows,
    description: "Proficient in scripting and automation with PowerShell, managing Windows Server roles and services, and optimizing system performance and security.",
  },
];

export {
  navLinks,
  technologies
}