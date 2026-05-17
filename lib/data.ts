export const profile = {
  name: "Nitin Kumar",
  title: "Full Stack Developer",
  tagline: "Building cloud-native, AI-powered, end-to-end web apps.",
  location: "Bengaluru, Karnataka, India",
  email: "nitinraj7488204975@gmail.com",
  phone: "+91-7488204975",
  summary:
    "Full Stack Developer with 1+ year of backend internship experience building end-to-end web applications using React.js, Node.js, Express.js, and MongoDB. Built AI-powered tagging systems and cloud-native tools using Go. Open source contributor to GoFr framework. 1000+ LeetCode problems solved with strong system design fundamentals.",
  socials: {
    github: "https://github.com/NitinKumar004",
    githubAlt: "https://github.com/NitinKumar004",
    linkedin: "https://www.linkedin.com/in/nitin-kumar-patel-49360a257/",
    leetcode: "https://leetcode.com/u/nitin_patel04/",
  },
  stats: [
    { label: "LeetCode Solved", value: "1000+", suffix: "" },
    { label: "Years Experience", value: "1", suffix: "+" },
    { label: "Open Source PRs", value: "Active", suffix: "" },
    { label: "CGPA", value: "9.14", suffix: "/10" },
  ],
};

export const skills = {
  Frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "GoFr (Go)",
    "REST APIs",
    "Microservices",
    "HTTP Servers",
    "SDK Design",
  ],
  Databases: ["MongoDB", "SQLite", "MySQL", "PostgreSQL"],
  Languages: ["JavaScript", "Go", "Python", "Java", "C++", "SQL"],
  "Cloud & Tools": [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Linux",
    "Git",
    "GitHub",
    "Postman",
    "JIRA",
    "Agile/Scrum",
  ],
};

export const experience = [
  {
    role: "Backend Developer Intern",
    company: "zop.dev",
    period: "May 2025 — Present · 1+ year",
    location: "Bengaluru, India",
    highlights: [
      {
        text: "Spearheaded IaC backend in Go and GoFr; improved cloud resource management across AWS, Azure, and GCP.",
        metric: "+40%",
        label: "cloud resource management",
      },
      {
        text: "Developed AI-powered auto-tagging engine analyzing multi-cloud metadata for resource owners.",
        metric: "95%",
        label: "prediction accuracy",
      },
      {
        text: "Built RESTful APIs consumed by React.js dashboards through modular service architecture.",
        metric: "-25%",
        label: "system complexity",
      },
      {
        text: "Redesigned Kubernetes deployment pipelines across staging and production.",
        metric: "-30%",
        label: "deployment time",
      },
      {
        text: "Implemented automated cloud provisioning workflows in Go.",
        metric: "-30%",
        label: "infrastructure cost",
      },
      {
        text: "Designed and developed a high-performance Kubernetes deployment orchestration system in Go, enabling rapid, automated, and resilient deployments across multi-cloud environments.",
        metric: "K8s",
        label: "deployment orchestration",
      },
    ],
  },
];

export const resume = {
  path: "/Nitin_Kumar_Resume.pdf",
  filename: "Nitin_Kumar_Resume.pdf",
  updated: "May 2026",
  size: "482 KB",
  pages: 1,
};

export const projects = [
  {
    title: "CloudEmu",
    subtitle: "Founder · Open Source",
    description:
      "Fast-growing open-source Go library for zero-cost cloud emulation. SDK-compatible HTTP server adopted by 1000+ developers, emulating 10 services in ~10ms.",
    tech: ["Go", "AWS", "Azure", "GCP", "SDK", "HTTP Server"],
    accent: "from-emerald-400 to-cyan-400",
    metric: "1000+",
    metricLabel: "developers",
    featured: true,
    url: "https://github.com/stackshy/cloudemu",
  },
  {
    title: "FitAI Tracker",
    subtitle: "Full Stack AI App",
    description:
      "Full-stack AI fitness app with React.js and Node.js; integrated MediaPipe for real-time pose detection at 30fps.",
    tech: ["React.js", "Node.js", "Express.js", "MediaPipe"],
    accent: "from-cyan-500 to-blue-500",
    metric: "30 FPS",
    metricLabel: "real-time pose",
    url: "https://github.com/",
  },
  {
    title: "Smart Catalogs",
    subtitle: "Image Processing Platform",
    description:
      "Image processing platform using FastAPI and OpenCV; automated product data extraction with SQLite3 CRUD and Flask deployment serving 200+ listings.",
    tech: ["FastAPI", "Python", "Flask", "SQLite3", "OpenCV"],
    accent: "from-emerald-500 to-teal-500",
    metric: "-60%",
    metricLabel: "data entry time",
    url: "https://github.com/",
  },
  {
    title: "RozgarSite",
    subtitle: "Location-Based Job API",
    description:
      "RESTful job-matching API in Go and GoFr with MySQL spatial queries; solves rural worker discovery by connecting nearby employers and workers.",
    tech: ["Go", "GoFr", "MySQL", "REST API"],
    accent: "from-amber-500 to-orange-500",
    metric: "Spatial",
    metricLabel: "MySQL queries",
    url: "https://github.com/",
  },
  {
    title: "Smart Backup & Compression",
    subtitle: "CLI Tool",
    description:
      "CLI backup tool in C++ with LZ77 compression; cron scheduling and Git tracking integrated.",
    tech: ["C++", "Shell", "Linux", "Git", "Cron"],
    accent: "from-rose-500 to-pink-500",
    metric: "-60%",
    metricLabel: "storage",
    url: "https://github.com/",
  },
];

export const openSource = {
  title: "GoFr Framework",
  description:
    "Active open source contributor to GoFr, a Go microservice framework. Shipped merged PRs for new features, bug fixes, and participated in code reviews with maintainers.",
  tech: ["Go", "Open Source", "Microservices"],
};

export const achievements = [
  {
    title: "1000+ LeetCode Problems",
    detail: "1500 rating with strong system design fundamentals",
  },
  { title: "2-Star CodeChef", detail: "Competitive programming" },
  { title: "5-Star HackerRank", detail: "Problem solving badge" },
  {
    title: "3rd at Smart Cataloging Hackathon",
    detail: "Image processing build",
  },
  { title: "IBM ML Certificate", detail: "Machine Learning fundamentals" },
];

export const education = {
  degree: "B.E. — Computer Science & Engineering",
  school: "Chitkara University, Rajpura, Punjab",
  period: "2022 — 2026",
  cgpa: "9.14 / 10",
};
