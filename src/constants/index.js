import {
  blender,
  docker,
  express,
  javascript,
  mariadb,
  nodejs,
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
    name: "MariaDB",
    icon: mariadb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

export {
  navLinks,
  technologies
}