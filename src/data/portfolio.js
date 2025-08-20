export const personalInfo = {
  name: "Adan Safeer",
  title: "Front End Developer",
  email: "akraj25085@gmail.com",
  phone: "(+92) 3124165364",
  location: "Abbottabad",
  bio: "Ambitious front-end developer ready to use my growing skills in front-end development. I have a solid understanding of modern programming languages and best practices. I enjoy coming up with creative solutions to support company marketing goals. I'm good at handling the details that go into web development, like planning and security. I communicate well, work well with others, and am flexible. I'm motivated, hard-working, and can succeed both in teams and when working alone.",
  resumeUrl: "/resume",
  social: {
    github: "https://github.com/AdanSafeer25085",
    linkedin: "https://www.linkedin.com/in/adan-safeer-7a8757342/",
    whatsapp: "https://wa.me/923124165364",
    portfolio: "https://adan.dev"
  }
};

export const projects = [
  {
    id: "1",
    title: "Ecommerce Shop",
    description: "Modern shop built with Next.js and Tailwind CSS",
    longDescription: "A responsive and interactive shop showcasing my projects and skills. Features smooth animations, dark mode, and optimized performance.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/AdanSafeer25085/Shop",
    liveUrl: "https://shop-steel-six.vercel.app/",
    imageUrl: "/projects/ecomrece-shop.png",
    featured: true
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description: "Real-time weather monitoring with forecasts",
    longDescription: "A weather dashboard that provides real-time weather data, 7-day forecasts, and weather alerts for multiple locations with beautiful visualizations.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS", "Recharts"],
    githubUrl: null,
    liveUrl: "https://weather-site-theta-beige.vercel.app",
    imageUrl: "/projects/weather.png",
    featured: false
  },
  {
    id: "3",
    title: "Blood Donation Platform",
    description: "Property listing and management system",
    longDescription: "A comprehensive real estate platform for property listings, virtual tours, and agent management. Includes advanced search filters and interactive maps.",
    technologies: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/AdanSafeer25085/Blood-Donation",
    liveUrl: "https://blood-donation-flame.vercel.app/",
    imageUrl: "/projects/blood-donation.png",
    featured: true
  },
  {
    id: "4",
    title: "Landing Page",
    description: "just for practise application",
    longDescription: "A page just for showcase of the frontend.",
    technologies: ["React", "tailwind", "JavaScript"],
    githubUrl: "https://github.com/AdanSafeer25085/landingPage",
    liveUrl: "https://landing-pag-three.vercel.app/",
    imageUrl: "/projects/landing.png",
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
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "supabase", level: 95, category: "database" },
  { name: "MongoDB", level: 90, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "Git", level: 90, category: "tools" }
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
