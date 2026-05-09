// =====================================================================
// WEBSITE CONTENT CONFIGURATION
// You can edit all the text, links, and data here without writing any HTML!
// =====================================================================

const SITE_CONTENT = {
    // SEO & Meta
    seo: {
        title: "Rana Vivek | Python Developer",
        description: "Portfolio of Rana Vivek, Python/Backend Developer and FastAPI Engineer."
    },

    // Hero Section
    hero: {
        photoUrl: "assets/hero_illustration.png", // Image for the right side of the hero section
        greeting: "Hello, I am",
        name: "Rana Vivek",
        roles: ["Python Developer", "Backend Developer", "FastAPI Engineer"],
        description: "B.Voc IT student and Junior Developer passionate about building robust backend logic, REST APIs, and production-ready web applications.",
        resumeLink: "#" // Replace with actual resume link (e.g., "resume.pdf")
    },

    // About Section
    about: {
        photoUrl: "vivek_rana.JPG", // Add your image file name here (e.g., "profile.jpg"). Leave empty to show initials.
        title: "Turning ideas into functional, real-world solutions.",
        paragraphs: [
            "I am a B.Voc Information Technology student currently pursuing my degree at Bhagwan Mahavir University in Surat. With over a year of internship experience, I've dived deep into the world of web and backend development.",
            "My expertise lies in Python and FastAPI, creating scalable REST APIs, managing databases, and setting up deployment workflows. I also have hands-on experience customizing WordPress and Shopify sites for real clients.",
            "Whether it's building an AI-powered chatbot using LangChain and Jina AI or creating a robust e-commerce backend, I love solving complex problems and continuously learning new technologies."
        ],
        stats: [
            { value: "1+", label: "Years Experience" },
            { value: "20+", label: "Projects Completed" }
        ]
    },

    // Skills Section
    skills: [
        {
            category: "Backend & DB",
            icon: "fas fa-server",
            tags: ["Python", "FastAPI", "REST API", "SQL", "RDBMS", "Backend Logic"]
        },
        {
            category: "Web Dev",
            icon: "fas fa-globe",
            tags: ["HTML5", "CSS3", "JavaScript", "WordPress", "Shopify"]
        },
        {
            category: "AI & ML",
            icon: "fas fa-robot",
            tags: ["LangChain", "RAG Architecture", "Jina AI", "Streamlit"]
        },
        {
            category: "Tools & Others",
            icon: "fas fa-tools",
            tags: ["Git & GitHub", "CLI Development", "Deployment", "Debugging"]
        }
    ],

    // Experience Section
    experience: [
        {
            role: "Web Developer Intern",
            company: "Softrica",
            location: "Surat, Gujarat",
            date: "Feb 2025 – Present",
            points: [
                "Worked on live production websites for real clients.",
                "Built robust backend logic and REST APIs using Python and FastAPI.",
                "Customized and maintained WordPress and Shopify websites.",
                "Handled deployment workflows, active debugging, and system maintenance.",
                "Utilized Git & GitHub for effective version control and team collaboration."
            ]
        }
    ],

    // Personal Projects Section
    projects: [
        {
            filter: "ai python",
            shortName: "RAG AI Chatbot",
            fullName: "RAG-Based AI Chatbot",
            imageUrl: "assets/project_ai.png", // Custom generated project thumbnail
            tech: ["FastAPI", "LangChain", "Jina AI", "Streamlit"],
            description: "AI-powered chatbot using Retrieval-Augmented Generation. Features a FastAPI backend, Streamlit UI, LangChain orchestration, and Jina AI embeddings.",
            githubUrl: "#", // Replace with actual link
            liveUrl: ""     // Leave empty if there's no live link
        },
        {
            filter: "python",
            shortName: "CLI Product Manager",
            fullName: "Product Manager CLI App",
            imageUrl: "assets/project_cli.png", // Custom generated project thumbnail
            tech: ["Python", "CLI", "File I/O"],
            description: "Command-line app with user authentication, product management, purchasing system, and detailed daily/monthly/yearly sales tracking capabilities.",
            githubUrl: "#",
            liveUrl: ""
        },
        {
            filter: "python",
            shortName: "Budget Tracker",
            fullName: "Personal Budget Tracker",
            imageUrl: "assets/project_budget.png", // Custom generated project thumbnail
            tech: ["Python", "CLI"],
            description: "Python CLI application to log, categorize, and analyze personal income and expenses, complete with comprehensive financial summary reports.",
            githubUrl: "#",
            liveUrl: ""
        }
    ],

    // Live Production Sites
    liveProjects: [
        { name: "Softrica (company profile)", url: "https://www.softrica.com/" },
        { name: "Gurukripa Hotel (restaurant company)", url: "https://www.gurukripahotel.com/" },
        { name: "Jisha Enterprise(company profile)", url: "https://www.jishaenterprise.co/" },
        { name: "Nutbes (Shopify e-commerce store)", url: "https://www.nutbes.com/" },
        { name: "Maico Metals (company profile)", url: "https://www.maicometals.com/" },
        { name: "Ramson Export (company profile)", url: "https://www.ramsonexport.com/" },
        { name: "NeoStack (company profile)", url: "https://neostack.me/" },
        { name: "Kalakruti Processors (company profile)", url: "https://kalakrutiprocessors.com/" },
        { name: "Tylissa (Shopify e-commerce store)", url: "https://tylissa.com/" },
        { name: "Phonix FX (landing page)", url: "https://phonixfx.com/" },
        { name: "Kyu Agent Fail Ho Jate Hai (landing page)", url: "https://kyuagentfailhojatehai.com/" },

    ],

    // Education Section
    education: [
        {
            year: "2024 – 2027 (Ongoing)",
            degree: "B.Voc — Information Technology",
            school: "Bhagwan Mahavir University, Surat"
        },
        {
            year: "2021 – 2022",
            degree: "HSC 12th Grade (82%)",
            school: "Shree Uttar Gujarat School"
        },
        {
            year: "2023 – 2024",
            degree: "SSC 10th Grade (75%)",
            school: "Shree Uttar Gujarat School"
        }
    ],

    // Contact Section
    contact: {
        email: "ranavivekashokbhai@gmail.com",
        phone: "+91 8160466054",
        location: "Surat, Gujarat, India",
        linkedin: "https://linkedin.com/in/rana-vivek",
        github: "https://github.com/RANA-VIVEK-27" // Replace with actual GitHub link
    }
};
