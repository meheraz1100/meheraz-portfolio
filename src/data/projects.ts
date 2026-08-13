export type Project = {
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  accent: string;
  image: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "ShortLink",
    description:
      "A modern URL shortening platform focused on fast redirects, link management and click tracking.",
    category: "Full-Stack Web Application",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://shortlink-saas-pro.vercel.app/",
    githubUrl: "https://github.com/meheraz1100/ShortLink-SaaS-Project",
    featured: true,
    accent: "lime",
    image: "/shortlink.png",
  },
  {
    number: "02",
    title: "DevHQ",
    description:
      "A collaborative developer management platform designed to organize teams, tasks and project workflows.",
    category: "Full-Stack Web Application",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://dev-hq.vercel.app/",
    githubUrl: "https://github.com/meheraz1100/DevHQ-Client",
    featured: true,
    accent: "cyan",
    image: "/devhq.png",
  },
  {
    number: "03",
    title: "FeedMe",
    description:
      "A modern meal planning and delivery platform connecting food discovery, planning and ordering into one experience.",
    category: "Web Application",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://feedme-meal.vercel.app/",
    githubUrl: "https://github.com/meheraz1100/feedme-client",
    featured: true,
    accent: "orange",
    image: "/feedme.png",
  },
];