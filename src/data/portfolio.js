export const personalInfo = {
  name: "Adan Safeer",
  title: "Front End Developer",
  email: "akraj25085@gmail.com",
  phone: "(+92) 3124165364",
  location: "Abbottabad",
  bio: "Ambitious front-end developer ready to use my growing skills in front-end development. I have a solid understanding of modern programming languages and best practices. I enjoy coming up with creative solutions to support company marketing goals. I'm good at handling the details that go into web development, like planning and security. I communicate well, work well with others, and am flexible. I'm motivated, hard-working, and can succeed both in teams and when working alone.",
  resumeUrl: "/resume",
  social: {
    github: "https://github.com/adan-rajpoot",
    linkedin: "https://www.linkedin.com/in/adan-safeer-7a8757342/",
    twitter: "https://twitter.com/adan",
    portfolio: "https://adan.dev"
  }
};

export const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React and Node.js",
    longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/burger/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "/projects/ecommerce.jpg",
    featured: true
  },
  {
    id: "2",
    title: "Task Manager",
    description: "Collaborative task management application",
    longDescription: "A collaborative task management tool that allows teams to organize projects and track progress in real-time.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/burger/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    imageUrl: "/projects/taskmanager.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Weather App",
    description: "Real-time weather application",
    longDescription: "A modern weather application that provides real-time weather data and forecasts based on user location.",
    technologies: ["React", "JavaScript", "OpenWeatherMap API", "CSS3"],
    githubUrl: "https://github.com/burger/weather-app",
    liveUrl: "https://weather-app-demo.vercel.app",
    imageUrl: "/projects/weather.jpg",
    featured: false
  },
  {
    id: "4",
    title: "Social Dashboard",
    description: "Analytics dashboard for social media",
    longDescription: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms.",
    technologies: ["Next.js", "React", "Chart.js", "PostgreSQL"],
    githubUrl: "https://github.com/burger/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    imageUrl: "/projects/dashboard.jpg",
    featured: false
  }
];

export const experiences = [
  {
    id: "1",
    company: "Tech Solutions Inc",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of multiple web applications",
      "Implemented modern development practices",
      "Mentored junior developers",
      "Optimized application performance"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: "2",
    company: "Digital Agency",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Developed client websites and applications",
      "Collaborated with design teams",
      "Integrated third-party APIs",
      "Maintained code quality standards"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Express"]
  }
];

export const skills = [
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "MongoDB", level: 90, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" }
];

export const blogPosts = [
  {
    id: "1",
    title: "Modern React Development",
    excerpt: "Best practices for building scalable React applications",
    content: "# Modern React Development\n\nReact has evolved significantly...",
    publishedAt: "2024-01-15",
    tags: ["React", "JavaScript", "Best Practices"],
    readTime: 8
  },
  {
    id: "2",
    title: "Full Stack Development Tips",
    excerpt: "Essential tips for full stack developers",
    content: "# Full Stack Development Tips\n\nFull stack development requires...",
    publishedAt: "2024-01-10",
    tags: ["Full Stack", "Development", "Tips"],
    readTime: 10
  }
];
