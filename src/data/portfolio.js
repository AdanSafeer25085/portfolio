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
    title: "Ecommerce Shop",
    description: "Modern shop website built with Next.js and Tailwind CSS",
    longDescription: "A responsive and interactive shop showcasing my projects and skills. Features smooth animations, dark mode, and optimized performance.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/AdanSafeer25085/Shop",
    liveUrl: "https://shop-steel-six.vercel.app/",
    imageUrl: "/projects/portfolio.jpg",
    featured: true
  },
  {
    id: "6",
    title: "Weather Dashboard",
    description: "Real-time weather monitoring with forecasts",
    longDescription: "A weather dashboard that provides real-time weather data, 7-day forecasts, and weather alerts for multiple locations with beautiful visualizations.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS", "Recharts"],
    githubUrl: null,
    liveUrl: "https://weather-site-theta-beige.vercel.app",
    imageUrl: "/projects/weather.jpg",
    featured: false
  },
  {
    id: "2",
    title: "Blood Donation Platform",
    description: "Property listing and management system",
    longDescription: "A comprehensive real estate platform for property listings, virtual tours, and agent management. Includes advanced search filters and interactive maps.",
    technologies: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/AdanSafeer25085/Blood-Donation",
    liveUrl: "https://blood-donation-flame.vercel.app/",
    imageUrl: "/projects/realestate.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Blog Platform",
    description: "Full-stack blogging application with CMS",
    longDescription: "A modern blogging platform with content management system, user authentication, and comment system. Features rich text editor and SEO optimization.",
    technologies: ["Next.js", "React", "PostgreSQL", "Prisma", "NextAuth.js"],
    githubUrl: "https://github.com/adan-rajpoot/blog-platform",
    liveUrl: "https://blog-adan.vercel.app",
    imageUrl: "/projects/blog.jpg",
    featured: true
  },
  {
    id: "4",
    title: "E-Learning Platform",
    description: "Online course management and learning system",
    longDescription: "An interactive e-learning platform with video streaming, course progress tracking, quizzes, and certificate generation.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    githubUrl: "https://github.com/adan-rajpoot/e-learning",
    liveUrl: "https://learn-with-adan.vercel.app",
    imageUrl: "/projects/elearning.jpg",
    featured: false
  },
  {
    id: "5",
    title: "Expense Tracker",
    description: "Personal finance management application",
    longDescription: "A comprehensive expense tracking app with budget planning, expense categorization, and visual analytics using charts and graphs.",
    technologies: ["React", "Firebase", "Chart.js", "Material-UI", "Redux"],
    githubUrl: "https://github.com/adan-rajpoot/expense-tracker",
    liveUrl: "https://expense-tracker-adan.vercel.app",
    imageUrl: "/projects/expense.jpg",
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
