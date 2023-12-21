import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  github: 'https://github.com/avitej-iyer',
  linkedin: 'https://www.linkedin.com/in/avitej-iyer',
};

export const author = {
  name: 'Avitej Iyer',
  email: 'iyeravitej2@gmail.com',
};

export const seoData = {
  title: 'Avitej Iyer | Student | Developer',
  description:
    'Avitej is a senior in college who likes messing around with various technologies (especially frontend).',
  author: author.name,
  image:
    'https://github.com/avitej-iyer/website-picture/blob/main/Website%20snip.png?raw=true',
  url: 'https://avitejiyer.vercel.app',
  keywords: [
    'Avitej Iyer',
    'Avitej',
    'Avitej Iyer Portfolio',
    'Avitej Portfolio',
    '@Avitej Iyer',
    '@Avitej',
    'Iyer',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hey there! I'm ",
  title: 'Avitej Iyer.',
  tagline: 'Part time student, full time developer.',
  description:
    "I'm a passionate full-stack developer, with experience in both frontend and backend systems. I'm always eager to learn new technologies and work on new projects.",

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Python',
      'React',
      'JavaScript',
      'HTML/CSS',
      'GoLang',
      'C/C++',
    ],
  },
  img: '/new.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive websites using Node.js',
        'Maintaining and improving existing codebases and bug fixing',
        'Creating reusable components and libraries for future use',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        /*{ name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },*/
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'Backend systems, Cloud and ML',
      lottie: {
        light: '/lotties/studying_light.json',
        dark: '/lotties/studying_dark.json',
      },
      points: [
        'Developing sustainable and scalable applications using AWS',
        'Using Python and Tensorflow for analyzing real-world datasets and creating ML models',
        'Creating low-level systems using C/C++ and GoLang',
      ],
      softwareSkills: [
        { name: 'python', icon: 'logos:python' },
        { name: 'go', icon: 'vscode-icons:file-type-go' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Java', icon: 'logos:java' },
        { name: 'C/C++', icon: 'logos:c-plusplus' },
        { name: 'Scikit-Learn', icon: 'devicon:scikitlearn' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' }
      ]
      /*
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
      */
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "Where I've worked",
  experiences: [
    {
      company: 'Valuefy',
      companyUrl: 'https://valuefy.com',
      role: 'Software Developement Intern',
      started: 'May 2023',
      upto: 'August 2023',
      tasks: [
        "Used Loopback 3.x to help convert the previously monolithic architecture of the trading systems to a microservice-based architecture. This led to about a 60% decrease in the downtime of the services I worked on during updates",
        "Used Python, Matplotlib and Hicharts to parse project info and stock value changes to create automated end of project presentations. This helped reduce manual data collection and interpretation at the end of major projects.",
        "Integrated multiple trading APIs (including Alpaca and GTN) into the trading codebase and tested the same using Postman",
      ],
    },
    {
      company: 'RERC On AAC at Penn State',
      companyUrl: 'https://rerc-aac.psu.edu',
      role: 'Capstone Team Lead',
      started: 'August 2023',
      upto: 'Present',
      tasks: [
        "Responsible for developing an indoor point-to-point navigation system in Unity focusing on accessibilty for mentally and physically impaired individuals",
        "Developed a marker system using ARCore to guide users from one GPS co-ordinate to another. Also implemented a rapidly refreshing pathing mechanism to have a constant marker to endpoint.",
        "Managed 4 other team members’ workflows using Trello and Git. Also set up testing pipelines for seamless code improvement. ",
      ],
    },
    {
      company: 'Penn State Learning',
      companyUrl: 'https://pennstatelearning.psu.edu',
      role: 'Guided Study Group Leader',
      started: 'August 2022',
      upto: 'Present',
      tasks: [
        "Facilitated revision lectures for Calculus 2, while working alongside the Mathematics department.",
        "Created custom slides, Manim animations and worksheets for students to better their understanding of Calculus 2 concepts",
        "Organised exam reviews for each major exam, with upwards of 400 students in attendance - with the average attendee’s test scores being 12% higher than non-attendees",
      ],
    },
    {
      company: 'Penn State University',
      companyUrl: 'https://www.eecs.psu.edu',
      role: 'Learning Assistant and Grader',
      started: 'May 2021',
      upto: 'Present',
      tasks: [
        "Assisted professors by preparing course materials, conducting office hours for doubt clearing and grading",
        'Courses assisted include Newtonian Mechanics, Calculus 1, Discrete Math and Programming Language Concepts and Construction',
      ],
    },
    {
      company: 'Private Tutoring',
      companyUrl: '',
      role: '',
      started: 'January 2022',
      upto: 'Present',
      tasks: [
        "Tutored students in a variety of subjects - from helping high-schoolers with AP Calc and the SAT to college level tutoring for the GRE and advanced math classes",
        'Assisted 13 tutees to date, with significant score increases whenever recorded',
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'The Splice Programming Language',
      url: 'https://github.com/avitej-iyer/Splice-Core',
      repo: 'https://github.com/avitej-iyer/Splice-Core',
      img: '/project_images/Splice_go.png',
      year: 2023,
      tags: ['Golang'],
    },
    {
      id: getId(),
      name: 'Tweet Emotion Analyzer',
      url: 'https://github.com/avitej-iyer/Tweet-Emotion-Recognizer',
      repo: 'https://github.com/avitej-iyer/Tweet-Emotion-Recognizer',
      img: '/project_images/emotion.png',
      year: 2023,
      tags: ['Python', 'TensorFlow', 'Numpy', 'NLTK'],
    },
    /*
    {
      id: getId(),
      name: 'Instruction Set',
      url: 'https://github.com/avitej-iyer/202c-Instruction-Set',
      repo: 'https://github.com/avitej-iyer/202c-Instruction-Set',
      img: '/project_images/squat_pic.png',
      year: 2023,
      tags: ['Technical Writing'],
    },
    */
    {
      id: getId(),
      name: 'Blockchain Server Client Node',
      url: 'https://github.com/avitej-iyer/Blockchain-Server-Client-Node',
      repo: 'https://github.com/avitej-iyer/Blockchain-Server-Client-Node',
      img: '/project_images/blockchain.png',
      year: 2022,
      tags: ['JavaScript', 'Solidity', 'Node.js', 'Express.js'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    /*{
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },*/
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
