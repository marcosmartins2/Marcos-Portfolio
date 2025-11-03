import
{
  mobile,
  backend,
  creator,
  github,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  UFG,
  angular,
  carrent,
  jobit,
  tripguide,
  docker,
  postgresql,
  cursinhoOnline,
  alPersonalPage,
  mcDonaldsClone,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React/Angular Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JAVASCRIPT",
    icon: javascript,
  },
  {
    name: "TYPESCRIPT",
    icon: typescript,
  },
  {
    name: "REACT JS",
    icon: reactjs,
  },
  {
    name: "TAILWIND CSS",
    icon: tailwind,
  },
  {
    name: "GIT",
    icon: git,
  },
  {
    name: 'GITHUB',
    icon: github
  },
  {
    name: 'ANGULAR',
    icon: angular
  },
  {
    name: 'DOCKER',
    icon: docker
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  }


];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "UFG",
    icon: UFG,
    iconBg: "#383E56",
    date: "March 2024 - Now",
    points: [
      "Developed modern, responsive web interfaces using Angular, TypeScript, React, HTML, and CSS.",
      "Optimized application performance and usability to ensure the best user experience.",
      "Integrated front-end applications with REST APIs and back-end services.",
      "Implemented reusable components, modules, and services to ensure scalability and maintainability.",
      "Collaborated with multidisciplinary teams (design, back-end, product, and QA) to deliver complete solutions aligned with business needs.",
      "Worked with agile methodologies (Kanban), participating in daily meetings and alignment sessions.",


    ],
  },
];
const projects = [
  {
    name: "CursinhoOnline - Online Learning Platform",
    description:
      "🚧 Currently in Development 🚧 - A comprehensive e-learning platform being built to help students prepare for college entrance exams (vestibulares) and ENEM. The platform will feature 500+ video lessons, personalized study tracking, essay correction, and live demonstrations. Being developed with a microservices architecture using Angular, Golang, PostgreSQL, and Docker to ensure scalability, high performance, and maintainability.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Golang",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: cursinhoOnline,
    source_code_link: "https://github.com/EducationalSiteOrganization/FrontEndWeb",
  },
  {
    name: "Physics Engineer Personal Portfolio",
    description:
      "A modern and elegant personal portfolio website developed for a physics engineering professional. The site showcases their academic background, research projects, publications, and professional expertise. Built with a focus on clean design, smooth animations, and responsive layout to provide an excellent user experience across all devices. Features include project galleries, interactive timelines, and contact integration.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: alPersonalPage,
    source_code_link: "https://github.com/marcosmartins2/anna-limonta",
  },
  {
    name: "McDonald's Self-Service Kiosk Clone",
    description:
      "A fully functional replica of McDonald's self-service ordering kiosk system. This project replicates the user experience of ordering food through an interactive touchscreen interface. Features include menu browsing with categories, customizable meals, shopping cart management, order summary, and payment simulation. Built with modern web technologies to ensure a smooth and intuitive user interface that mimics the real McDonald's kiosk experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: mcDonaldsClone,
    source_code_link: "https://github.com/marcosmartins2/mcdonalds-auto-check-out-clone",
  },
];

export { services, technologies, experiences, projects };