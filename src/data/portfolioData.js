export const portfolioData = {
    personal: {
        name: "Lakhan Kashyap",
        role: "Full Stack Software Engineer",
        title: "Building Scalable Systems & High-Performance Web Apps",
        email: "lakhankashyap795@gmail.com",
        phone: "+91 9634675735",
        github: "https://github.com/Lakhankashyap999",
        linkedin: "https://www.linkedin.com/in/lakhan-kashyap-fullstack",
        location: "Delhi NCR, India",
        availability: "Available for Full-time",
        about: "I am an engineering-driven Full Stack Developer with hands-on production experience at Shankrai Pvt Ltd and a master's background (MCA from AKTU). I bridge the gap between intuitive, silky-smooth React frontends and high-throughput, fault-tolerant Node.js & distributed database backends.",
        quote: "Code is like humor. When you have to explain it, it’s bad.",
        greeting: "const engineer = 'Lakhan Kashyap';",
        description: "Specialized in architecting performant React.js frontends, scalable Node.js microservices, and database systems. Experienced in production API design, JWT auth, and cloud workflows."
    },
    stats: [
        { value: 2, label: "Years of Production & Freelance Exp", plus: true },
        { value: 15, label: "Production & Open Source Repos", plus: true },
        { value: 500, label: "Active Users Served on Live Products", plus: true },
        { value: 200, label: "DSA & Algorithmic Problems Solved", plus: true }
    ],
    skills: {
        marquee1: [
            { name: "React.js", icon: "fab fa-react" },
            { name: "TypeScript", icon: "fas fa-code" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Express.js", icon: "fas fa-server" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "Redux Toolkit", icon: "fas fa-layer-group" },
            { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
            { name: "JavaScript (ES6+)", icon: "fab fa-js-square" }
        ],
        marquee2: [
            { name: "AWS EC2 / S3", icon: "fab fa-aws" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Redis Caching", icon: "fas fa-bolt" },
            { name: "Apache Kafka", icon: "fas fa-stream" },
            { name: "RESTful APIs", icon: "fas fa-network-wired" },
            { name: "JWT & OAuth 2.0", icon: "fas fa-shield-alt" },
            { name: "Git & GitHub CI/CD", icon: "fab fa-git-alt" },
            { name: "Linux Administration", icon: "fab fa-linux" }
        ],
        categories: [
            {
                title: "Frontend Engineering",
                icon: "fas fa-desktop",
                skills: [
                    { name: "React.js (v18/v19)", level: "Advanced" },
                    { name: "TypeScript", level: "Proficient" },
                    { name: "Redux Toolkit / Context API", level: "Advanced" },
                    { name: "React Router & React Query", level: "Advanced" },
                    { name: "Responsive UI & Tailwind CSS", level: "Advanced" },
                    { name: "GSAP & Web Animations", level: "Intermediate" }
                ]
            },
            {
                title: "Backend & Systems",
                icon: "fas fa-server",
                skills: [
                    { name: "Node.js & Express.js", level: "Advanced" },
                    { name: "RESTful Architecture & Microservices", level: "Advanced" },
                    { name: "MongoDB & Mongoose (Aggregations)", level: "Advanced" },
                    { name: "PostgreSQL & Complex SQL", level: "Proficient" },
                    { name: "JWT, RBAC & OAuth 2.0 Auth", level: "Advanced" },
                    { name: "Redis Caching & Message Queues", level: "Intermediate" }
                ]
            },
            {
                title: "Cloud, DevOps & Tools",
                icon: "fas fa-cloud",
                skills: [
                    { name: "AWS (EC2, S3, Lambda basics)", level: "Proficient" },
                    { name: "Docker Containerization", level: "Intermediate" },
                    { name: "Git Version Control & GitHub Actions", level: "Advanced" },
                    { name: "Linux CLI & Bash", level: "Proficient" },
                    { name: "Postman API Testing", level: "Advanced" },
                    { name: "Kafka Event Streaming", level: "Familiar" }
                ]
            }
        ]
    },
    projects: [
        {
            id: 1,
            title: "MyToolboxs.online",
            category: "Full Stack / Live SaaS",
            badge: "Live Product • 500+ Users",
            url: "https://mytoolboxs.online",
            description: "High-traffic web utility suite hosting 10+ daily digital tools (cryptographic token generators, unit converters, code formatters, and calculating utilities) engineered for lightning-fast sub-second load times.",
            highlights: [
                "500+ organic monthly users with zero advertising",
                "Client-side execution minimizing server compute costs to nearly zero",
                "Mobile-first responsive UX with dark/light themes and offline PWA caching"
            ],
            tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js"],
            liveLink: "https://mytoolboxs.online",
            githubLink: "https://github.com/Lakhankashyap999"
        },
        {
            id: 2,
            title: "Enterprise E-Commerce Platform",
            category: "Full Stack",
            badge: "Production Architecture",
            url: "https://shop.lakhankashyap.dev",
            description: "Production-grade e-commerce application featuring JWT authentication, role-based product inventory management, dynamic shopping cart state synchronization, and secure checkout processing workflows.",
            highlights: [
                "Role-based dashboards (Admin & Customer) with protected routes",
                "Optimized MongoDB indexing resulting in 40% faster query execution",
                "RESTful backend with input sanitization and rate-limiting"
            ],
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux"],
            liveLink: "https://mytoolboxs.online",
            githubLink: "https://github.com/Lakhankashyap999"
        },
        {
            id: 3,
            title: "Role-Based Employee Management ERP",
            category: "Full Stack / Enterprise",
            badge: "PostgreSQL & SQL",
            url: "https://ems.lakhankashyap.dev",
            description: "Corporate workforce management dashboard supporting complex relational organizational hierarchies, role-based access control (RBAC), multi-criteria filtering, salary record tracking, and audit logging.",
            highlights: [
                "Relational schema design on PostgreSQL with foreign key constraints",
                "Server-side pagination and debounced full-text search",
                "Automated departmental analytics and attendance tracking"
            ],
            tech: ["React.js", "Node.js", "PostgreSQL", "Express.js", "REST APIs"],
            liveLink: "https://mytoolboxs.online",
            githubLink: "https://github.com/Lakhankashyap999"
        },
        {
            id: 4,
            title: "Pluggy - Modular Web Utility Engine",
            category: "Frontend / Architecture",
            badge: "Component Ecosystem",
            url: "https://pluggy.lakhankashyap.dev",
            description: "A developer tool architecture designed to embed plug-and-play micro-widgets into any web application with minimal bundle overhead and pluggable API integrations.",
            highlights: [
                "Zero-dependency component architecture for maximum portability",
                "Custom state machine implementation for event routing",
                "Seamless integration bridge for React and vanilla web targets"
            ],
            tech: ["React.js", "TypeScript", "Node.js", "Webpack"],
            liveLink: "https://mytoolboxs.online",
            githubLink: "https://github.com/Lakhankashyap999"
        }
    ],
    experience: [
        {
            date: "Jan 2024 — Present",
            title: "Full Stack Software Developer",
            company: "Shankrai Private Limited",
            type: "Full-Time",
            location: "Noida, India",
            badge: "Current Role",
            points: [
                "Architected and deployed scalable backend microservices using Node.js, Express.js, and MongoDB.",
                "Engineered robust RESTful APIs utilized across internal web portals and third-party partner integrations.",
                "Crafted pixel-perfect, reusable UI component libraries with React.js and TypeScript, reducing development turnaround time by 30%.",
                "Implemented secure JWT-based stateless authentication and granular Role-Based Access Control (RBAC).",
                "Refactored heavy MongoDB aggregation pipelines, boosting API response throughput by over 35% under peak load.",
                "Standardized Git workflow, branch protections, code reviews, and automated CI test runs."
            ],
            stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Git"]
        },
        {
            date: "Jan 2023 — Present",
            title: "Freelance Full Stack Engineer",
            company: "Independent Client Engagements",
            type: "Contract",
            location: "Remote",
            badge: "Freelance",
            points: [
                "Designed, developed, and deployed full-stack bespoke applications for diverse commercial business requirements.",
                "Delivered production SaaS solutions from scratch, managing end-to-end database schemas, authentication, and cloud deployment.",
                "Collaborated directly with founders and product owners to translate business specs into clean, maintainable software."
            ],
            stack: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "AWS", "REST APIs"]
        }
    ],
    education: [
        {
            icon: "fas fa-graduation-cap",
            degree: "Master of Computer Applications (MCA)",
            institution: "Dr. APJ Abdul Kalam Technical University (AKTU)",
            year: "2024 — 2026",
            score: "68%",
            focus: "Advanced Software Engineering, Distributed Systems, Cloud Architecture"
        },
        {
            icon: "fas fa-university",
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Chaudhary Charan Singh University (CCSU)",
            year: "2021 — 2023",
            score: "70%",
            focus: "Data Structures, Database Management Systems, Web Technologies"
        },
        {
            icon: "fas fa-school",
            degree: "Senior Secondary (12th Grade)",
            institution: "DAV Public School",
            year: "Completed",
            score: "68%",
            focus: "Mathematics & Computer Science"
        }
    ],
    certifications: [
        {
            title: "Full Stack Web Development Certification",
            issuer: "Shreyans Coding School",
            credential: "React.js, Node.js, Express.js, MongoDB Architecture",
            icon: "fas fa-layer-group"
        },
        {
            title: "Advanced Frontend Development Mastery",
            issuer: "Industry Accredited",
            credential: "Modern React Patterns, Performance Optimization & UI Design",
            icon: "fab fa-react"
        },
        {
            title: "Data Structures and Algorithms (DSA)",
            issuer: "Algorithmic Problem Solving Training",
            credential: "Arrays, LinkedLists, Trees, Graphs, DP & Time/Space Optimization",
            icon: "fas fa-code-branch"
        }
    ],
    testimonials: [
        {
            quote: "Lakhan possesses an outstanding grasp of both backend scalability and frontend finesse. His contributions to our API architecture at Shankrai significantly improved response times.",
            name: "Senior Tech Lead",
            role: "Engineering Department, Shankrai Pvt Ltd"
        },
        {
            quote: "Working with Lakhan was seamless. He takes complex product specifications and turns them into clean, high-performing code with zero hand-holding.",
            name: "SaaS Product Owner",
            role: "Client Project"
        }
    ]
};
