export const portfolioData = {
  name: "Md Jahirul Islam",
  title: "Python Backend Developer",
  location: "Dhaka, Bangladesh",
  email: "jahirulislam92134@gmail.com",
  phone: "+8801521796083",
  github: "https://github.com/jahir010",
  linkedin: "https://www.linkedin.com/in/jahirul-islam-5b448a245/",
  bio: "I'm a passionate Python Backend Developer with 1.5+ years of professional experience crafting production-grade APIs using FastAPI and Django. I've delivered scalable backend systems across 6+ client products at a software agency, integrating real-time features, payment gateways, and third-party services.",
  stats: {
    competitiveProgramming: "500+ CP Problems",
    clientProducts: "6+ Client Products",
    experience: "1.5+ Years Exp",
  },
  availability: "Available for opportunities",
};

export const aboutContent = {
  title: "ABOUT ME",
  description: "I'm a passionate Python Backend Developer with 1.5+ years of professional experience crafting production-grade APIs using FastAPI and Django. I've delivered scalable backend systems across 6+ client products at a software agency, integrating real-time features, payment gateways, and third-party services.",
  stats: [
    { label: "CP Problems", value: "500+", color: "green" },
    { label: "Client Products", value: "6+", color: "green" },
    { label: "Years Experience", value: "1.5+", color: "green" },
  ],
};

export const skillsData = {
  title: "TECHNICAL SKILLS",
  categories: [
    {
      name: "Languages",
      items: ["Python", "SQL", "C/C++"],
    },
    {
      name: "Frameworks & Libraries",
      items: ["FastAPI", "Django", "Tortoise ORM", "Celery", "WebSocket"],
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
    },
    {
      name: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub Actions", "VS Code"],
    },
    {
      name: "Integrations",
      items: ["Stripe", "Razorpay", "Phonepe", "Cashfree", "Firebase FCM", "Google Translate API", "Selenium", "BeautifulSoup"],
    },
  ],
};

export const experienceData = {
  title: "WORK EXPERIENCE",
  experiences: [
    {
      position: "Python Backend Developer",
      company: "Softvence Agency",
      location: "Dhaka",
      startDate: "Oct 2025",
      endDate: "Jun 2026",
      responsibilities: [
        "Designed & delivered RESTful APIs using FastAPI for 6+ client products",
        "Integrated Stripe, Razorpay, Cashfree for payments; Firebase FCM for push",
        "Modelled & optimized PostgreSQL/MySQL schemas for multi-role platforms",
        "Collaborated with frontend, QA, and PMs through code reviews & agile",
      ],
    },
    {
      position: "Backend Developer",
      company: "gradmate.ai",
      location: "New York, USA (Remote)",
      startDate: "Feb 2025",
      endDate: "Sept 2025",
      responsibilities: [
        "Built FastAPI endpoints for faculty profiles, programmes, assistantships",
        "Engineered web-scraping pipelines (Selenium, BeautifulSoup) for 3,000+ sites",
        "Implemented academic ranking algorithms based on CSRankings.org",
      ],
    },
  ],
};

export const projectsData = {
  title: "PROJECTS",
  projects: [
    {
      id: 1,
      name: "Quikle",
      tech: "FastAPI · Tortoise ORM · Redis · Celery · WebSocket · Firebase · PostgreSQL",
      date: "Dec 2025",
      description: "Multi-role quick-commerce delivery backend",
      highlights: [
        "Multi-role quick-commerce delivery backend (Customer, Vendor, Rider, Admin)",
        "Real-time order tracking & in-app messaging via WebSockets + Redis Pub/Sub",
        "Integrated Razorpay & Cashfree for payments, refunds, vendor dashboards",
        "Automated push notifications via Celery, APScheduler & Firebase FCM; AI chatbot",
      ],
      link: "https://github.com/jahir010/quikle",
    },
    {
      id: 2,
      name: "Pet Fence Installation Marketplace",
      tech: "FastAPI · Tortoise ORM · PostgreSQL · Stripe · WebSocket",
      date: "2024",
      description: "Bid-based job request & assignment system",
      highlights: [
        "Bid-based job request & assignment system (Customer, Installer, Admin)",
        "Full job lifecycle: post creation, bidding, scheduling, completion tracking",
        "Stripe integration for payments, commission deduction, automated payouts",
        "Real-time notifications via WebSockets, Firebase FCM, WhatsApp/email",
      ],
      link: "https://github.com/jahir010/petdoor_usa",
    },
    {
      id: 3,
      name: "RealStory",
      tech: "FastAPI · Tortoise ORM · PostgreSQL · Redis · WebSocket · Firebase",
      date: "Apr 2026",
      description: "Short-form video platform with engagement tracking",
      highlights: [
        "Short-form video platform with categorized uploads & affiliate links",
        "Engagement: view tracking, favorites, share analytics, nested reviews",
        "Adaptive video streaming via WebSocket with dynamic chunk sizing",
        "Multi-language support via Google Translate API; analytics dashboards",
      ],
      link: "https://github.com/jahir010",
    },
    {
      id: 4,
      name: "Archicopro",
      tech: "FastAPI · Tortoise ORM · PostgreSQL · Redis · Celery",
      date: "May 2026",
      description: "Organizational intranet platform",
      highlights: [
        "Organizational intranet: Articles, Forums, Events, Trainings, Document Mgmt",
        "Moderated forum with approval workflows, audit logs, role-level permissions",
        "Hierarchical document library with nested folders & multi-format support",
        "Automated DB backups, activity logging, global search, email notifications",
      ],
      link: "https://github.com/jahir010/passarinhama_v2",
    },
  ],
};

export const educationData = {
  title: "EDUCATION",
  education: [
    {
      school: "Manarat International University",
      location: "Dhaka, Bangladesh",
      degree: "B.Sc. in Computer Science and Engineering",
      gpa: "3.42/4.00",
      startYear: 2020,
      endYear: 2024,
    },
    {
      school: "Govt. Bangla College",
      location: "Dhaka, Bangladesh",
      degree: "HSC Science",
      gpa: "3.67/5.00",
      startYear: 2018,
      endYear: 2018,
    },
    {
      school: "A.M High School",
      location: "Hatiya, Bangladesh",
      degree: "SSC Science",
      gpa: "5.00/5.00",
      startYear: 2016,
      endYear: 2016,
    },
  ],
};

export const certificatesData = {
  title: "CERTIFICATES",
  certificates: [
    {
      title: "Data Scientist in Python",
      issuer: "DataCamp",
      duration: "26 hours",
      completedDate: "Nov 24, 2024",
      certificateId: "550,340",
      link: "https://drive.google.com/file/d/11TAV5zk8RQiENF_-iPCr-EDTyyP8WMws/view?usp=sharing",
    },
    {
      title: "Associate Data Scientist in Python",
      issuer: "DataCamp",
      duration: "90 hours",
      completedDate: "Nov 07, 2024",
      certificateId: "541,364",
      link: "https://drive.google.com/file/d/1cTrMhS-J_4unNo7nwJBZKurVk8ixPtjp/view?usp=sharing",
    },
  ],
  achievement: {
    title: "500+ problems solved",
    description: "Vjudge, Codeforces, CSES",
  },
};

export const commands = [
  { cmd: "help", description: "Show available commands" },
  { cmd: "ls", description: "List all sections" },
  { cmd: "cat <section>", description: "View a section (about, skills, experience, projects, education, certificates)" },
  { cmd: "cd <section>", description: "Navigate to a section" },
  { cmd: "whoami", description: "Display developer identity" },
  { cmd: "skills --list", description: "Show all skills" },
  { cmd: "projects --list", description: "List all projects" },
  { cmd: "resume", description: "Download resume" },
  { cmd: "clear", description: "Clear terminal" },
  { cmd: "neofetch", description: "System info" },
  { cmd: "date", description: "Show current date/time" },
];

export const systemInfo = {
  system: "Python 3.11",
  shell: "bash 5.2",
  database: "PostgreSQL 16",
  cache: "Redis 7",
  framework: "FastAPI",
  packages: "42 (pip)",
  uptime: "1.5+ years",
  terminal: "portfolio v3.0",
  encoding: "UTF-8",
};

export const fileStructure = [
  { name: "about.py", icon: "fa-user-circle", label: "About Me" },
  { name: "skills.py", icon: "fa-microchip", label: "Technical Skills" },
  { name: "experience.py", icon: "fa-briefcase", label: "Work Experience" },
  { name: "projects.py", icon: "fa-folder-open", label: "Projects" },
  { name: "education.py", icon: "fa-graduation-cap", label: "Education" },
  { name: "certificates.py", icon: "fa-certificate", label: "Certificates" },
];
