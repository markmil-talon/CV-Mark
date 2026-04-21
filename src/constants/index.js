import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';

import {
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

import {
  shoethrift,
  notekeeper,
  kochemo,
  quickmart,
  stocktrack,
} from '../assets';

export const projects = [
  {
    id: 1,
    title: 'StockTrack',
    description:
      'A full-stack inventory and stock tracking system designed to help users monitor items, manage stock levels, and generate actionable shopping lists.',
    impact:
      'Integrated frontend and backend workflows to handle real-time inventory updates.',
    features: [
      'Dashboard for tracking inventory status',
      'Stock recording and management system',
      'Automated shopping list generation',
    ],
    tech: ['React', 'TailwindCSS', 'Django', 'Python', 'PostgreSQL'],
    image: stocktrack,
    live: 'https://stocktrackph.vercel.app/',
  },
  {
    id: 2,
    title: 'QuickMart',
    description:
      'A full-stack online grocery platform with cart functionality, order tracking, and a seamless shopping experience.',
    impact:
      'Built RESTful APIs and integrated frontend state management for smooth user flows.',
    features: [
      'Shopping cart and checkout flow',
      'Order tracking system',
      'Single-page application architecture',
    ],
    tech: ['React', 'TailwindCSS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    image: quickmart,
    live: 'https://quickmartph.vercel.app/',
  },
  {
    id: 3,
    title: 'KocheMo',
    description:
      'A car marketplace interface focused on showcasing vehicles through a clean, interactive browsing experience.',
    impact:
      'Emphasized UI clarity and component reusability for scalable layouts.',
    features: [
      'Interactive product browsing',
      'Responsive single-page layout',
      'Clean and minimal UI design',
    ],
    tech: ['React', 'TailwindCSS'],
    image: kochemo,
    live: 'https://koche-mo.vercel.app/',
  },
  {
    id: 4,
    title: 'NoteKeeper',
    description:
      'A lightweight note-taking application designed for quick input, organization, and a distraction-free user experience.',
    impact: 'Focused on simplicity, usability, and efficient state handling.',
    features: [
      'Create and manage notes',
      'Minimal and clean interface',
      'Fast single-page interactions',
    ],
    tech: ['React', 'TailwindCSS'],
    image: notekeeper,
    live: 'https://ntekeep.netlify.app/',
  },
  {
    id: 5,
    title: 'ShoeThrift',
    description:
      'A modern e-commerce storefront inspired by Nike, featuring a clean product browsing experience and responsive UI optimized for fast navigation.',
    impact:
      'Focused on UI/UX refinement and responsive design patterns for product discovery.',
    features: [
      'Responsive landing page with product highlights',
      'Scrollable product showcase for quick browsing',
      'Modern UI interactions and layout design',
    ],
    tech: ['React', 'TailwindCSS'],
    image: shoethrift,
    live: 'https://markmil-talon.github.io/Shoe-Thrift/',
  },
];

export const skills = [
  {
    sklNum: 1,
    category: 'Frontend Development',
    sklName: [
      { name: 'HTML & CSS' },
      { name: 'Javascript' },
      { name: 'ReactJS' },
      { name: 'Bootstrap' },
      { name: 'TailwindCSS' },
      { name: 'ShadcnUI' },
      { name: 'TanstackQuery' },
    ],
  },
  {
    sklNum: 2,
    category: 'Backend Development',
    sklName: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Django' },
      { name: 'REST APIs' },
    ],
  },
  {
    sklNum: 3,
    category: 'Database & Tools',
    sklName: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Github' },
      { name: 'Vitest' },
      { name: 'Postman' },
    ],
  },
];

export const techSkills = [
  { icon: 'react', title: 'React', href: 'https://react.dev' },
  { icon: 'tailwind', title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { icon: 'bootstrap', title: 'Bootstrap', href: 'https://getbootstrap.com/' },
  { icon: 'shadcn', title: 'Shadcn UI', href: 'https://ui.shadcn.com/' },
  { icon: 'django', title: 'Django', href: 'https://www.djangoproject.com/' },
  {
    icon: 'javascript',
    title: 'Javascript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { icon: 'express', title: 'ExpressJS', href: 'https://expressjs.com/' },
  { icon: 'mongodb', title: 'MongoDB', href: 'https://www.mongodb.com/' },
  {
    icon: 'postgresql',
    title: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
  },
  { icon: 'github', title: 'Github', href: 'https://github.com/' },
];
