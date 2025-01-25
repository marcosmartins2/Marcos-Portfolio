import {
    mobile,
    backend,
    creator,
    github,
    python,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    UFG,
    django,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "React Developer",
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
      name:'GITHUB',
      icon:github
    },
    {
      name:'PYTHON',
      icon:python
    },
    {
      name:'DJANGO',
      icon:django
    }
    
    
  ];
  
  const experiences = [
    {
      title: "Extension Academic Project",
      company_name: "UFG",
      icon: UFG,
      iconBg: "#383E56",
      date: "March 2024 - Now",
      points: [
        "Developing and maintaining  applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Worked with version control (Git/GitHub) to streamline development.",
        "participation in meetings with the team to align schedules",
      
      ],
    },
  ]
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      tags: [
        {
          name: "Technology",
          color: "blue-text-gradient",
        },
        {
          name: "Technology",
          color: "green-text-gradient",
        },
        {
          name: "Technology",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      tags: [
        {
          name: "Technology",
          color: "blue-text-gradient",
        },
        {
          name: "Technology",
          color: "green-text-gradient",
        },
        {
          name: "Technology",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      tags: [
        {
          name: "Technology",
          color: "blue-text-gradient",
        },
        {
          name: "Technology",
          color: "green-text-gradient",
        },
        {
          name: "Technology",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };