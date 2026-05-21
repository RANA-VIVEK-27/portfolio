// =====================================================================
// WEBSITE CONTENT CONFIGURATION
// You can edit all the text, links, and data here without writing any HTML!
// =====================================================================

const SITE_CONTENT = {
    // SEO & Meta
    seo: {
        title: "Rana Vivek | Python & Backend Developer",
        description: "Portfolio of Rana Vivek, Python/Backend Developer and FastAPI Specialist."
    },

    // Hero Section
    hero: {
        photoUrl: "assets/hero_illustration.png", // Image for the right side of the hero section
        greeting: "Hello, I am",
        name: "Rana Vivek",
        roles: ["Python Developer", "Backend Developer", "FastAPI Specialist"],
        description: "Motivated B.Voc IT student and aspiring Python / Backend Developer with experience in web development. Passionate about building scalable backend systems.",
        resumeLink: "Rana_Vivek_Resume_ATS.pdf" // resume link
    },

    // About Section
    about: {
        photoUrl: "vivek_rana.JPG", // Add your image file name here (e.g., "profile.jpg"). Leave empty to show initials.
        title: "Building scalable backend systems and robust web applications.",
        paragraphs: [
            "I am an aspiring Python and Backend Developer currently pursuing a B.Voc in Information Technology at Bhagwan Mahavir University in Surat. I have over a year of internship experience at Softrica, working on real client-facing production websites.",
            "My technical expertise centers around Python, FastAPI, and REST API development. I have hands-on experience orchestrating AI pipelines using LangChain and Jina AI, as well as customizing WordPress and Shopify sites for various industries.",
            "I am passionate about learning modern technologies and transitioning into a professional backend engineering role where I can build impactful, scalable systems."
        ],
        stats: [
            { value: "1+", label: "Years Experience" },
            { value: "20+", label: "Live Projects" }
        ]
    },

    // Skills Section
    skills: [
        {
            category: "Languages & DB",
            icon: "fas fa-code",
            tags: ["Python", "JavaScript", "SQL", "RDBMS", "HTML", "CSS"]
        },
        {
            category: "Frameworks & Tools",
            icon: "fas fa-layer-group",
            tags: ["FastAPI", "LangChain", "Streamlit", "Git & GitHub"]
        },
        {
            category: "AI & ML",
            icon: "fas fa-robot",
            tags: ["RAG Architecture", "Jina AI Embeddings", "Vector Storage", "Semantic Search"]
        },
        {
            category: "CMS & E-commerce",
            icon: "fas fa-shopping-cart",
            tags: ["WordPress", "Shopify", "Web Development"]
        },
        {
            category: "Soft Skills",
            icon: "fas fa-brain",
            tags: ["Deployment", "Debugging"]
        }
    ],

    // Experience Section
    experience: [
        {
            role: "Web Developer Intern",
            company: "Softrica",
            location: "Gujarat, India",
            date: "Feb 2025 – Present",
            points: [
                "Developed and customized 20+ live production WordPress and Shopify websites for real clients across various industries.",
                "Managed deployment workflows, performed active debugging, and maintained website stability.",
                "Collaborated directly with clients and internal teams, managing the real-world project lifecycle.",
                "Contributed to notable projects including Gurukripa Hotel, Jisha Enterprise, and NeoStack."
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
            description: "Independently built an AI-powered chatbot using RAG architecture from scratch. Developed the backend API with FastAPI, integrated Jina AI embeddings for semantic search, and designed the UI with Streamlit.",
            githubUrl: "#", // Replace with actual link
            liveUrl: ""     // Leave empty if there's no live link
        },
        {
            filter: "python",
            shortName: "Budget Tracker",
            fullName: "Personal Budget Tracker",
            imageUrl: "assets/project_budget.png", // Custom generated project thumbnail
            tech: ["Python", "CLI", "File I/O"],
            description: "Built a Python command-line tool to log, categorize, and track personal expenses and savings over time. Generates financial summaries and insights using structured file-based data handling.",
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
            year: "2024 – 2027",
            degree: "B.Voc in Information Technology",
            school: "Bhagwan Mahavir University, Surat"
        },
        {
            year: "2024",
            degree: "HSC – 12th Grade (82%)",
            school: "Shree Uttar Gujarat School"
        },
        {
            year: "2022",
            degree: "SSC – 10th Grade (75%)",
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
