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

export const socialLinks: StringKeyValueType = {
  github: 'https://github.com/avitej-iyer',
  linkedin: 'https://www.linkedin.com/in/avitej-iyer',
};
export const author = { name: 'Avitej Iyer', email: 'iyeravitej2@gmail.com' };
export const seoData = {
  title: 'Avitej Iyer | Software Engineer & AI Researcher',
  description:
    'Avitej Iyer is a Penn State M.S. Computer Science graduate and software engineer specializing in AI systems, RAG, and full-stack development.',
  author: author.name,
  image:
    'https://github.com/avitej-iyer/website-picture/blob/main/Website%20snip.png?raw=true',
  url: 'https://avitejiyer.vercel.app',
  keywords: [
    'Avitej Iyer',
    'Software Engineer',
    'AI Researcher',
    'RAG Systems',
    'Full-Stack Developer',
  ],
};

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: { title: 'resume', url: `/${resumeFileName}` },
};
export const heroSection: HeroSectionType = {
  subtitle: "Hey there! I'm ",
  title: 'Avitej Iyer.',
  tagline: 'Software engineer, AI researcher, and full-time developer.',
  description:
    'I build reliable full-stack systems, retrieval-augmented generation workflows, and developer tools.',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
export const aboutSection: AboutSectionType = {
  title: 'about me',
  paragraphs: [
    'I’m a Penn State M.S. in Computer Science graduate (GPA 3.84) whose thesis explored efficient RAG systems for gene set function prediction.',
    'My work spans production software engineering, AI-assisted developer tooling, and grounded language-model systems. I enjoy turning technically ambitious ideas into dependable, useful products.',
    'I’m always eager to learn new technologies and frameworks, and I stay motivated by personal projects.',
  ],
  list: {
    title: 'A few technologies I’ve been working with recently:',
    items: [
      'LangChain',
      'FastAPI',
      'AWS',
      'Playwright',
      'FAISS',
      'vLLM',
      'Redis',
      'GoLang',
      'C/C++',
    ],
  },
  img: '/new.jpg',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  skills: [
    {
      id: getId(),
      title: 'full-stack development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive applications with TypeScript, Node.js, and Tailwind CSS',
        'Designing APIs and dependable automation with FastAPI and Playwright',
        'Shipping maintainable frontend and backend systems',
      ],
      softwareSkills: [
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'React', icon: 'logos:react' },
      ],
    },
    {
      id: getId(),
      title: 'AI systems, cloud & ML',
      lottie: {
        light: '/lotties/studying_light.json',
        dark: '/lotties/studying_dark.json',
      },
      points: [
        'Building grounded RAG systems with LangChain, FAISS, and vLLM',
        'Deploying cloud pipelines with AWS Lambda, S3, DynamoDB, and Bedrock',
        'Fine-tuning and evaluating LLMs with HuggingFace, TensorFlow, and Scikit-learn',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'Go', icon: 'vscode-icons:file-type-go' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'C#', icon: 'vscode-icons:file-type-csharp2' },
        { name: 'Java', icon: 'logos:java' },
        { name: 'C/C++', icon: 'logos:c-plusplus' },
        { name: 'Scikit-learn', icon: 'devicon:scikitlearn' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
      ],
    },
  ],
};

export const experienceSection: ExperienceSectionType = {
  title: 'My Experience',
  experiences: [
    {
      company: 'ClearOpx',
      companyUrl: '',
      role: 'Software Engineering Intern',
      started: 'June 2026',
      upto: 'August 2026',
      tasks: [
        'Migrated legacy Selenium ingestion pipelines to C# and Playwright, reducing average runtime by 16% and memory usage by 80%.',
        'Modernized dynamic SQL translation across core backend controllers by replacing unmaintained query parsers with Microsoft OData.',
        'Built a Pytest differential-testing suite with multi-clause query fuzzing to catch sorting and data-formatting bugs before deployment.',
        'Automated failure diagnostics with DOM snapshots and full-page logs; prototyped LLM-driven self-healing selectors with Playwright MCP agents.',
      ],
    },
    {
      company: 'Pennsylvania State University',
      companyUrl: 'https://www.psu.edu',
      role: 'Graduate Assistant',
      started: 'August 2024',
      upto: 'May 2026',
      tasks: [
        'Architected GeneInterpreter, a dual-graph RAG system using FAISS that cut inference latency 4×, from 42 seconds to 10 seconds.',
        'Reduced gene-set-recognition hallucinations from 18.9% to under 2% through knowledge-graph grounding.',
        'Fine-tuned LLMs with Unsloth on synthetic NCBI Q&A pairs and deployed vLLM checkpoints for benchmarking.',
        'Mentored more than 100 students as a TA for Computer Vision and Programming Languages.',
      ],
    },
    {
      company: 'Waters Corporation',
      companyUrl: 'https://www.waters.com',
      role: 'Generative AI and Machine Learning Intern',
      started: 'May 2024',
      upto: 'July 2024',
      tasks: [
        'Contributed to an AI chatbot using LangChain, AWS, and OpenSearch to index 1,000+ product manuals within an Agile team.',
        'Built AWS Lambda parsing modules with BeautifulSoup and NumPy to prepare scraped HTML for the RAG ingestion pipeline.',
      ],
    },
    {
      company: 'Valuefy',
      companyUrl: 'https://valuefy.com',
      role: 'Software Engineering Intern',
      started: 'May 2023',
      upto: 'August 2023',
      tasks: [
        'Collaborated on a Loopback microservices migration that reduced production downtime during updates by 20%.',
        'Validated and deployed REST APIs for multi-account trade synchronization using Bluebird and Postman.',
        'Automated client-facing Python reporting pipelines, reducing delivery time from hours to minutes for 15+ reports.',
      ],
    },
    {
      company: 'Research (w/ Dr. Zhang)',
      companyUrl: 'https://ryanzhumich.github.io/',
      role: 'Researcher',
      started: 'August 2024',
      upto: 'Present',
      tasks: [
        'Architected a dockerized AI-driven pipeline for novel gene function discovery, using LangChain for agentic workflows and vLLM for efficient LLM inference.',
        'Developed an iterative LLM self-correction mechanism to improve mechanistic hypothesis generation from large-scale gene and GO datasets.',
        'Integrated INDRA knowledge graph retrieval with LLM reasoning to provide mechanistic context for under-characterized genes.',
        'Fine-tuned LLMs with TRL and Unsloth on domain-specific biological data to enhance hypothesis generation and interpretation.',
      ],
    },
    {
      company: 'RERC On AAC at Penn State',
      companyUrl: 'https://rerc-aac.psu.edu',
      role: 'Capstone Team Lead',
      started: 'August 2023',
      upto: 'Present',
      tasks: [
        'Developed an indoor point-to-point navigation system in Unity focused on accessibility for mentally and physically impaired individuals.',
        'Developed an ARCore marker system to guide users between GPS coordinates, with a rapidly refreshing pathing mechanism.',
        'Managed four team members’ workflows with Trello and Git and set up testing pipelines for seamless code improvement.',
      ],
    },
    {
      company: 'Penn State Learning',
      companyUrl: 'https://pennstatelearning.psu.edu',
      role: 'Guided Study Group Leader',
      started: 'August 2022',
      upto: 'Present',
      tasks: [
        'Facilitated Calculus 2 revision lectures alongside the Mathematics department.',
        'Created custom slides, Manim animations, and worksheets to help students understand Calculus 2 concepts.',
        'Organized major-exam reviews for up to 400 students; attendees averaged test scores 12% higher than non-attendees.',
      ],
    },
    {
      company: 'Penn State University',
      companyUrl: 'https://www.eecs.psu.edu',
      role: 'Learning Assistant and Grader',
      started: 'May 2021',
      upto: 'Present',
      tasks: [
        'Prepared course materials, conducted office hours, and graded coursework.',
        'Supported Newtonian Mechanics, Calculus 1, Discrete Math, and Programming Language Concepts and Construction.',
      ],
    },
    {
      company: 'Private Tutoring',
      companyUrl: '',
      role: 'Tutor',
      started: 'January 2022',
      upto: 'Present',
      tasks: [
        'Tutored students from AP Calculus and SAT preparation through GRE and advanced college mathematics.',
        'Assisted 13 tutees to date, with significant score increases whenever recorded.',
      ],
    },
  ],
};

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Interactive LLM Agent Playground',
      url: 'https://agentic-playground-zplh.vercel.app',
      year: 2026,
      tags: ['React Flow', 'OpenRouter', 'Gemini'],
    },
    {
      id: getId(),
      name: 'AR Navigation App for Accessibility',
      url: 'https://github.com/avitej-iyer',
      year: 2024,
      tags: ['Unity', 'C#', 'AR Foundation', 'YOLOv4'],
    },
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
      tags: ['Python', 'TensorFlow', 'NumPy', 'NLTK'],
    },
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

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm open to software engineering and AI/ML opportunities.",
    "I'm also currently looking for remote roles and new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};
export const socialSection: SocialSectionType = {
  socialLinks: [
    { icon: 'tabler:brand-github', url: socialLinks.github },
    { icon: 'lucide:linkedin', url: socialLinks.linkedin },
  ],
};
export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
