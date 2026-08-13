export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  description: string;
};

export const skills: Skill[] = [
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic and accessible web structure.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Responsive layouts and modern visual styling.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Interactive and dynamic web experiences.",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven interfaces and application architecture.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Production-ready React applications and full-stack experiences.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Fast and scalable utility-first UI development.",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript and scalable application logic.",
  },
  {
    name: "TypeScript",
    category: "Backend",
    description: "Typed JavaScript for better code quality and maintainability.",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "REST APIs and backend application architecture.",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Flexible NoSQL data modeling and storage.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Reliable relational database systems.",
  },
  {
    name: "Prisma",
    category: "Database",
    description: "Reliable ORM systems.",
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control and collaborative development.",
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Code hosting, collaboration and project management.",
  },
  {
    name: "Vercel",
    category: "Tools",
    description: "Deployment and hosting for modern web applications.",
  },
];