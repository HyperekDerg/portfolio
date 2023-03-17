import {
  blender,
  css,
  docker,
  express,
  figma,
  github,
  html,
  javascript,
  krita,
  mariadb,
  mongodb,
  nodejs,
  powershell,
  react,
  tailwind,
  vue
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
    name: "CSS3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Github",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Krita",
    icon: krita,
  },
];

export {
  navLinks,
  technologies
}