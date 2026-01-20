// Personal Information
export const PERSONAL_INFO = {
    name: "Christian Sheen",
    title: "Full-Stack Software Engineer",
    email: "csheen1725@gmail.com",
    phone: "(786) 832-1691",
    location: "Atlanta, GA, United States",
    github: "https://github.com/blksmth1725",
    linkedin: "https://linkedin.com/in/christiansheen",
    summary: "I’m a full-stack software engineer with 4+ years of experience working on production web and mobile applications across the stack. I enjoy solving real problems, improving existing systems, and building features that make products easier to use and maintain. My work spans frontend, backend, APIs, and mobile, with a strong focus on writing practical, reliable code that supports real users and business needs. \n\nAt Watch Systems, I’ve helped migrate legacy desktop applications to modern browser-based platforms, contributed to both frontend and backend development, and worked on systems integrated with NCIC databases under CJIS and NCIC security standards. I’ve also contributed to a mobile application used by law enforcement in the field, which gave me valuable experience building software for high-trust, real-world environments. \n\nPreviously, I worked on a CRM platform using Next.js, GraphQL, and SwiftUI, where I built production features, payment flows, and mobile views backed by persisted authentication. I enjoy working close to business logic, understanding how users actually operate within systems, and shaping features that feel intuitive instead of forced."
};

// Work Experience
export interface WorkExperience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
}

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        id: "watch-systems-2025",
        company: "Watch Systems LLC",
        position: "Software Engineer",
        location: "Remote",
        startDate: "2025",
        endDate: "2026",
        description: "Driving the production release of a browser-based application while actively optimizing performance, stability, and usability to enable a complete and reliable transition away from the legacy desktop platform.",
        responsibilities: [
            "Driving the production release of a browser-based application",
            "Optimizing performance, stability, and usability",
            "Ensuring a complete and reliable transition away from the legacy desktop platform",
            "Collaborating with the team to ensure the application is ready for production"
        ],
        technologies: ["JavaScript", "React", ".NET", "SQL", "NCIC Integration", "CJIS Compliance", "Performance Optimization", "Stability Optimization", "Usability Optimization"]
    },
    {
        id: "watch-systems-2024",
        company: "Watch Systems LLC",
        position: "Software Engineer",
        location: "Remote",
        startDate: "2024",
        endDate: "2025",
        description: "Created a Dockerized application for local development and deployment. This was used internally by the team and was implemented as a chron job that sent out daily emails to compare our third party data with our in house datat to ensure accuracy.  Updating Progressive Web Application which served as a mobile light weight version of the desktop application. This allowed officers to make quick updates out in the field.",
        responsibilities: [
            "Dockerized application for local development and deployment",
            "Daily email notifications to compare third party data with in house data",
            "Cron job implementation for daily email notifications",
            "Network access and resource management",
            "Progressive Web Application development",
            "Intra agency communication feature"
        ],
        technologies: ["Python", "SQL", "Docker", "Cron", "BeautifulSoup", "Jenja2", "Mail Gun", "Networking", "Progressive Web Application", "PHP"]
    },
    {
        id: "watch-systems-2023",
        company: "Watch Systems LLC",
        position: "Software Engineer",
        location: "Remote",
        startDate: "2023",
        endDate: "2024",
        description: "Legacy desktop application NCIC database optimization under CJIS security standards. Developed stored procedures and optimized database queries for large scale data processing. Updating Progressive Web Application which served as a mobile light weight version of the desktop application. This allowed officers to make quick updates out in the field.",
        responsibilities: [
            "NCIC standards compliance",
            "Bug fixes and performance optimizations",
            "Frontend and backend development",
            "Large scale database optimization",
            "Stored Procedures development",
            "Progressive Web Application development",
            "Intra agency communication feature"
        ],
        technologies: ["Python", "SQL", "PHP", "NCIC Integration", "CJIS Compliance", "Progressive Web Application"]
    },
    {
        id: "watch-systems-2022",
        company: "Watch Systems LLC",
        position: "Software Engineer",
        location: "Remote",
        startDate: "2022",
        endDate: "2023",
        description: "Contributing to legacy desktop application migration to modern browser-based platforms with NCIC database integration under CJIS security standards.",
        responsibilities: [
            "Migrated legacy desktop applications to modern browser-based platforms",
            "Developed frontend and backend components for law enforcement software",
            "Integrated systems with NCIC databases under CJIS and NCIC security standards",
            "Built mobile application features for field use by law enforcement",
            "Collaborated on high-trust, real-world environment software solutions"
        ],
        technologies: ["JavaScript", "React", ".NET", "SQL", "NCIC Integration", "CJIS Compliance"]
    },
    {
        id: "crm-platform",
        company: "Pedra CRM Platform",
        position: "Junior Full-Stack Developer",
        location: "Remote",
        startDate: "2020",
        endDate: "2022",
        description: "Developed production features for CRM platform using modern web technologies with focus on payment flows and mobile experiences.",
        responsibilities: [
            "Built production features using Next.js, GraphQL, and SwiftUI",
            "Implemented secure payment processing systems with data handling",
            "Developed mobile views with persisted authentication",
            "Contributed to 20+ GraphQL endpoints resulting in 3 production features",
            "Increased online orders by 15% through strategic feature development"
        ],
        technologies: ["Next.js", "GraphQL", "SwiftUI", "React", "TypeScript", "Payment Processing"]
    },
    {
        id: "architecture-operations",
        company: "Architecture & Operations",
        position: "Architect/Operations Specialist",
        location: "Atlanta, GA",
        startDate: "2018",
        endDate: "2020",
        description: "Worked in architecture and operations providing foundation for design thinking and systematic approach to problem-solving.",
        responsibilities: [
            "Developed architectural designs and operational procedures",
            "Applied design thinking principles to complex problems",
            "Managed project timelines and stakeholder communications",
            "Created documentation and process improvements"
        ],
        technologies: ["CAD Software", "Project Management", "Process Design", "Documentation"]
    }
];

// Education & Certifications
export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    status: "completed" | "in-progress";
    gpa?: string;
    description?: string;
    courses?: string[];
    technologies?: string[];
}

export const EDUCATION: Education[] = [
    {
        id: "georgia-tech",
        institution: "Georgia Institute of Technology",
        degree: "Bachelor of Science",
        field: "Computer Science",
        location: "Atlanta, GA",
        startDate: "2018",
        endDate: "2022",
        status: "completed",
        gpa: "3.7",
        description: "Focused on software engineering, algorithms, and system design with emphasis on practical application development.",
        courses: [
            "Data Structures and Algorithms",
            "Software Engineering",
            "Database Systems",
            "Computer Networks",
            "Operating Systems",
            "Web Development"
        ],
        technologies: ["Java", "Python", "C++", "SQL", "JavaScript", "React"]
    },
    {
        id: "online-certifications",
        institution: "Various Online Platforms",
        degree: "Professional Certifications",
        field: "Web Development & Cloud Computing",
        location: "Online",
        startDate: "2020",
        endDate: "Present",
        status: "in-progress",
        description: "Continuous learning through various online platforms to stay current with modern technologies.",
        courses: [
            "AWS Cloud Practitioner",
            "React Advanced Patterns",
            "Node.js Microservices",
            "GraphQL Fundamentals",
            "TypeScript Deep Dive"
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "GraphQL", "TypeScript"]
    }
];

// Skills & Technologies
export interface Skill {
    name: string;
    level: number; // 1-5
    category: "frontend" | "backend" | "database" | "tools" | "mobile";
}

export const SKILLS: Skill[] = [
    // Frontend
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "React", level: 5, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "HTML/CSS", level: 5, category: "frontend" },
    { name: "Tailwind CSS", level: 4, category: "frontend" },

    // Backend
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Express.js", level: 4, category: "backend" },
    { name: "GraphQL", level: 3, category: "backend" },
    { name: "REST APIs", level: 5, category: "backend" },
    { name: "Python", level: 3, category: "backend" },

    // Database
    { name: "MySQL", level: 4, category: "database" },
    { name: "PostgreSQL", level: 3, category: "database" },
    { name: "MongoDB", level: 3, category: "database" },

    // Tools
    { name: "Git", level: 5, category: "tools" },
    { name: "Docker", level: 3, category: "tools" },
    { name: "AWS", level: 3, category: "tools" },
    { name: "Linux", level: 4, category: "tools" },

    // Mobile
    { name: "React Native", level: 3, category: "mobile" },
    { name: "SwiftUI", level: 2, category: "mobile" }
];

// Projects
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    startDate: string;
    endDate: string;
    status: "completed" | "in-progress" | "planned";
}

export const PROJECTS: Project[] = [
    {
        id: "portfolio-website",
        title: "Personal Portfolio Website",
        description: "Full-stack portfolio website built with Next.js and MySQL",
        longDescription: "A comprehensive portfolio website showcasing my work experience, projects, and skills. Features include user authentication, responsive design, and dynamic content management.",
        technologies: ["Next.js", "React", "TypeScript", "MySQL", "CSS3", "Node.js"],
        features: [
            "Responsive design for all devices",
            "User authentication system",
            "Dynamic content management",
            "Contact form with email integration",
            "Modern UI/UX design"
        ],
        githubUrl: "https://github.com/blksmth1725/cs_portfolio",
        liveUrl: "https://christiansheen.dev",
        startDate: "2024",
        endDate: "2024",
        status: "completed"
    },
    {
        id: "task-management-app",
        title: "Task Management Application",
        description: "React-based task management app with real-time updates",
        longDescription: "A collaborative task management application that allows teams to create, assign, and track tasks in real-time. Built with modern React patterns and WebSocket integration.",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "JWT"],
        features: [
            "Real-time task updates",
            "Team collaboration features",
            "Drag-and-drop task organization",
            "User authentication and authorization",
            "Email notifications"
        ],
        githubUrl: "https://github.com/blksmth1725/task-manager",
        startDate: "2023",
        endDate: "2023",
        status: "completed"
    },
    {
        id: "e-commerce-platform",
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        longDescription: "A complete e-commerce platform with product catalog, shopping cart, payment processing, and admin dashboard. Includes inventory management and order tracking.",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
        features: [
            "Product catalog with search and filtering",
            "Shopping cart and checkout process",
            "Stripe payment integration",
            "Admin dashboard for inventory management",
            "Order tracking and history"
        ],
        githubUrl: "https://github.com/blksmth1725/ecommerce-platform",
        liveUrl: "https://shop-demo.christiansheen.dev",
        startDate: "2023",
        endDate: "2024",
        status: "in-progress"
    }
];

// Languages
export interface Language {
    name: string;
    proficiency: "Native" | "Fluent" | "Conversational" | "Basic";
    description: string;
}

export const LANGUAGES: Language[] = [
    {
        name: "English",
        proficiency: "Native",
        description: "Native or Bilingual Proficiency"
    },
    {
        name: "Spanish",
        proficiency: "Native",
        description: "Native or Bilingual Proficiency"
    },
    {
        name: "Italian",
        proficiency: "Conversational",
        description: "Limited Working Proficiency"
    }
];

// Professional Highlights
export const PROFESSIONAL_HIGHLIGHTS = [
    "Designed and implemented payment processing systems with secure data handling",
    "Contributed to 20+ GraphQL endpoints resulting in 3 production features",
    "Increased online orders by 15% through strategic marketing campaigns during COVID",
    "Successfully migrated legacy desktop applications to modern web platforms",
    "Developed mobile applications for high-trust law enforcement environments",
    "Integrated systems with NCIC databases under strict CJIS security compliance"
];

// Core Competencies
export const CORE_COMPETENCIES = [
    "Full-Stack Web Development",
    "Frontend Development (React, Next.js, TypeScript)",
    "Backend Development (Node.js, Express, GraphQL)",
    "Database Design and Management",
    "API Development and Integration",
    "Mobile Application Development",
    "System Architecture and Design",
    "Agile Development Methodologies"
];

// Contact Information for forms
export const CONTACT_INFO = {
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone,
    location: PERSONAL_INFO.location,
    socialMedia: {
        github: PERSONAL_INFO.github,
        linkedin: PERSONAL_INFO.linkedin
    }
};

// Education Summary Stats
export const EDUCATION_SUMMARY = {
    yearsLearning: "6+",
    certifications: "5+",
    collegeCredits: "120+",
    technologies: "15+"
};