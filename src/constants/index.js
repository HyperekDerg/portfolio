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
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ExpressJS",
    icon: express,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "CSS3",
    icon: css3,
  },
  {
    name: "MariaDB",
    icon: mariadb,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Manjaro Linux",
    icon: manjaro,
  },
  {
    name: "Kali Linux",
    icon: kali,
  },
  {
    name: "Windows",
    icon: windows,
  },
];

export {
  navLinks,
  technologies
}