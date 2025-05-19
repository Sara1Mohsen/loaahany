import { Project, Skill, SocialLink, NavLink, Experience } from '../types';
// import myImage from '../assets/loa2.png'; 

export const navLinks: NavLink[] = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
  { name: 'Projects', url: '#projects' },
  { name: 'Skills', url: '#skills' },
  { name: 'Contact', url: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/loaahany/', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'mail' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, cart functionality, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application that helps users organize tasks, set deadlines, and track progress. Features include drag-and-drop functionality, task filtering, and data visualization.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'An application for tracking workouts, nutrition, and fitness goals. Includes custom workout plans, progress tracking, and social sharing features.',
    tags: ['React Native', 'GraphQL', 'AWS', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'An application for tracking workouts, nutrition, and fitness goals. Includes custom workout plans, progress tracking, and social sharing features.',
    tags: ['React Native', 'GraphQL', 'AWS', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const skills: Skill[] = [
  { name: 'React', icon: 'code', category: 'UI' },
  { name: 'JavaScript', icon: 'code', category: 'UI' },
  { name: 'TypeScript', icon: 'code', category: 'UI' },
  { name: 'HTML/CSS', icon: 'code', category: 'UI' },
  { name: 'Tailwind CSS', icon: 'code', category: 'UI' },
  { name: 'Node.js', icon: 'server', category: 'UX' },
  { name: 'Express', icon: 'server', category: 'UI' },
  { name: 'MongoDB', icon: 'database', category: 'UI' },
  { name: 'PostgreSQL', icon: 'database', category: 'UI' },
  { name: 'GraphQL', icon: 'git-branch', category: 'UI' },
  { name: 'Figma', icon: 'pen-tool', category: 'design' },
  { name: 'Adobe XD', icon: 'pen-tool', category: 'design' },
  { name: 'Git', icon: 'git-branch', category: 'other' },
  { name: 'Docker', icon: 'box', category: 'other' },
  { name: 'AWS', icon: 'cloud', category: 'other' },
];

export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Lead development of web applications using React and TypeScript. Collaborate with designers and UI engineers to implement features and optimize performance.'
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions LLC',
    period: '2018 - 2021',
    description: 'Developed responsive web applications using modern JavaScript frameworks. Implemented UI/UX designs and integrated with backend APIs.'
  },
  {
    title: 'Web Developer Intern',
    company: 'StartUp Co.',
    period: '2017 - 2018',
    description: 'Assisted in building websites and web applications. Learned modern web development practices and collaborated with senior developers.'
  }
];

export const aboutMe = {
  name: "Loaa Hany",
  title: "UI/UX Developer",
  bio: "I'm a passionate UI/UX developer with 5+ years of experience creating beautiful, functional web applications. I specialize in React, TypeScript, and modern frontend technologies. When I'm not coding, you'll find me hiking, reading, or exploring new technologies.",
  location: "Cairo, Egypt",
  email: "loaahany209@gmail.com",
  availability: "Available for freelance work",
};