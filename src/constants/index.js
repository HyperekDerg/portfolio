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
  laravel,
  java,
  cpp,
  makefile,
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
    name: "Java",
    icon: java,
    description:
      "Proficient in Java programming, with a focus on developing applications using the Spring framework. Skilled in object-oriented programming (OOP) and capable of creating basic applications by leveraging object-oriented principles. Experienced in utilizing Spring to simplify application development and manage dependencies effectively. Familiar with creating simple web applications and backend systems using Java and Spring.",
  },
  {
    name: "C++",
    icon: cpp,
    description:
      "Experienced in C++ programming, adept at crafting console applications with and without object-oriented design. Proficient in leveraging object-oriented principles to create modular and maintainable code structures when necessary. Skilled in optimizing code for performance and efficiency, with a focus on understanding memory management and implementing algorithmic optimizations. Knowledgeable in configuring and handling C++ builds across different systems, ensuring compatibility and seamless deployment.",
  },
  {
    name: "Makefile",
    icon: makefile,
    description:
      "Proficient in crafting Makefiles to streamline the development workflow, capable of automating tasks such as running containers, recompiling code, cleaning, and preparing the development environment. Skilled in writing efficient and modular Makefiles that enable developers to quickly build, test, and deploy applications across different environments.",
  },
  {
    name: "Docker",
    icon: docker,
    description:
      "Proficient in the Docker containerization platform, adept at creating and managing container images to streamline application deployment. Skilled in utilizing Docker Compose for orchestrating multi-container environments, simplifying the setup of complex application stacks.",
  },
  {
    name: "HTML 5",
    icon: html,
    description:
      "Skilled in crafting complex HTML structures and leveraging HTML5 features, including semantic markup, advanced form validation, and seamless multimedia embedding. Experienced in optimizing web performance, ensuring cross-browser compatibility, and integrating responsive design principles to enhance user experience across all devices. Proficient in using modern tools and frameworks to streamline development and maintain clean, maintainable code.",
  },
  {
    name: "JavaScript",
    icon: javascript,
    description:
      "Possess a strong grasp of JavaScript syntax, including variables, loops, and functions. Adept at applying fundamental programming concepts to practical applications, with a growing proficiency in advanced features and libraries. Continuously exploring modern JavaScript frameworks and tools to enhance development efficiency and create dynamic, interactive web experiences.",
  },
  {
    name: "ExpressJS",
    icon: express,
    description:
      "Familiar with creating web applications using Express.js, including routing, middleware, and handling HTTP requests. Proficient in developing server-side logic and integrating with databases to build functional and efficient applications.",
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
      "Familiar with the React.js framework, including virtual DOM, JSX syntax, and building complex UI components. Capable of creating dynamic and responsive user interfaces that enhance user experience. Experienced in state management using tools like Redux and Context API, as well as integrating RESTful APIs to build robust front-end applications. Proficient in optimizing performance and ensuring code maintainability through modular and reusable component design.",
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
      "Proficient in leveraging the Tailwind CSS framework to style web applications efficiently. Skilled in crafting custom designs utilizing its extensive class library, ensuring a streamlined and consistent visual experience across projects. Experienced in optimizing CSS code for improved maintainability and scalability, while also embracing Tailwind's flexibility to accommodate unique design requirements.",
  },
  {
    name: "CSS3",
    icon: css3,
    description:
      "Able to create responsive layouts, implement animations, and transitions with CSS3. Proficient in utilizing preprocessors like Sass or Less to enhance workflow efficiency and maintain clean, modular code. Skilled in harnessing the power of CSS variables to streamline design consistency and facilitate easy theme customization.",
  },
  {
    name: "MariaDB",
    icon: mariadb,
    description:
      "Familiar with the MariaDB database management system, proficient in SQL syntax, and basic database administration tasks. Capable of designing and implementing relational database structures, optimizing queries for performance, and ensuring data integrity. Experienced in database maintenance, including backups, user management, and troubleshooting common issues.",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description:
      "Familiar with MongoDB NoSQL database, document-oriented data model, and querying documents using MongoDB Compass.",
  },
  {
    name: "PHP",
    icon: php,
    description:
      "Proficient in the PHP programming language, specializing in server-side scripting and dynamic web page and application development. Skilled in leveraging PHP frameworks like Laravel to expedite development and ensure code maintainability. Experienced in implementing secure authentication, handling database interactions, and integrating third-party APIs to create robust and scalable web solutions.",
  },
  {
    name: "Laravel",
    icon: laravel,
    description:
      "Proficient in developing robust applications using Laravel 9+. Skilled in creating RESTful APIs and designing efficient database structures, complete with seed data for testing and deployment.",
  },
  {
    name: "Manjaro Linux",
    icon: manjaro,
    description:
      "Experienced in utilizing Manjaro Linux as the primary development environment, proficient in leveraging its robust features for seamless software development. Skilled in Linux system administration, including managing users and groups, configuring networking, and setting up services tailored to development needs. Capable of optimizing the development workflow through customizations and integrating development tools effectively. Experienced in maintaining system stability and security, ensuring an efficient and reliable environment for software development projects.",
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
      "Proficient in scripting and automation using PowerShell, with a focus on managing Windows Server roles and services. Skilled in optimizing system performance and security measures to ensure the smooth operation of Windows-based environments. Experienced in diagnosing and resolving OS issues, including configuration errors and system crashes, to maintain system stability. Capable of configuring basic Windows Server services such as DNS, DHCP, and file sharing, and adept at implementing Group Policy for centralized management and security enforcement.",
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
      "During my internship at Animativ, I specialized in Drupal backend development while also assisting with some frontend tasks and docker DevOps. Additionally, I worked on programming GSM modules to connect them with smart house applications.",
    startDate: "Jul 2022",
    endDate: "Aug 2022",
    location: "Mińsk Mazowiecki, Poland",
  },
  {
    name: "Volunteering at open events at the University of Siedlce",
    description:
      "Volunteering at the University of Siedlce's open events, I help create welcoming experiences for visitors, assisting in organization and guidance to showcase the university's community spirit.",
    startDate: "Oct 2023",
    endDate: "Present day",
    location: "Siedlce, Poland",
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
