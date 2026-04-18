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
    title: 'ShoeThrift',
    description:
      'An e-commerce app that resembles a Nike store, built with React and TailwindCSS.',
    features: ['Landing Page', 'Product Catalog', 'New UI Experience'],
    tech: ['React', 'TailwindCSS'],
    image: shoethrift,
    live: 'https://markmil-talon.github.io/Shoe-Thrift/',
  },
  {
    id: 2,
    title: 'StockTrack',
    description:
      'A stock tracking app with modern design, built using React, TailwindCSS, and Django Python for the backend.',
    features: ['Dashboard', 'Stock Recording', 'Creates Shopping List'],
    tech: ['React', 'TailwindCSS', 'Django', 'Python', 'PostgreSQL'],
    image: stocktrack,
    live: 'https://stocktrackph.vercel.app/',
  },

  {
    id: 3,
    title: 'QuickMart',
    description:
      'An online grocery store with modern design, built using React and TailwindCSS, and NodeJS for backend.',
    features: ['Single Page App', 'Shopping cart', 'Order tracking'],
    tech: ['React', 'TailwindCSS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    image: quickmart,
    live: 'https://quickmartph.vercel.app/',
  },
  {
    id: 4,
    title: 'KocheMo',
    description: 'A car shop app built using React and TailwindCSS.',
    features: ['Single Page App', 'Clean UI', 'Interactive elements'],
    tech: ['React', 'TailwindCSS'],
    image: kochemo,
    live: 'https://koche-mo.vercel.app/',
  },
  {
    id: 5,
    title: 'NoteKeeper',
    description:
      'A note-taking app with a clean interface, built using React and TailwindCSS.',
    features: ['Single Page App', 'UI Update', 'Simple app'],
    tech: ['React', 'TailwindCSS'],
    image: notekeeper,
    live: 'https://ntekeep.netlify.app/',
  },
];

export const skills = [
  {
    sklNum: 1,
    sklName: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Javascript' },
      { name: 'ReactJS' },
      { name: 'NodeJS' },
    ],
  },
  {
    sklNum: 2,
    sklName: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
    ],
  },
  {
    sklNum: 3,
    sklName: [
      { name: 'Bootstrap' },
      { name: 'TailwindCSS' },
      { name: 'ShadcnUI' },
    ],
  },
  {
    sklNum: 4,
    sklName: [
      { name: 'Github' },
      { name: 'TanstackQuery' },
      { name: 'Vitest' },
    ],
  },
];
