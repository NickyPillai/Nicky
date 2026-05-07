import type {
  Stat,
  Skill,
  Project,
  AIProject,
  Experience,
  ExperienceRole,
  Certification,
  Award,
  ImpactCard,
  Highlight,
} from "@/types";

export const HERO_CONTENT = {
  name: "Nicky Pillai",
  tagline: "Senior Product Manager & Digital Strategist",
  aboutText:
    "14 years in tech · 9 in product · $5M+ revenue delivered. I bridge engineering, business, and UX to ship products that expand markets and get adopted at scale.",
  ctaPrimary: "See My Work",
  ctaSecondary: "Book a Call",
  linkedinUrl: "https://www.linkedin.com/in/nicky-pillai/",
};

export const HERO_STATS = [
  { number: "14+", label: "Years in Tech" },
  { number: "$5M+", label: "Revenue Delivered" },
  { number: "27%", label: "TAM Expanded" },
  { number: "40K+", label: "Users Impacted" },
];

export const STATS: Stat[] = [
  { label: "Years in Tech", value: 14, suffix: "+" },
  { label: "Enterprise Projects", value: 10, suffix: "+" },
  { label: "Revenue Generated", value: 5, suffix: "M+" },
  { label: "TAM Expansion", value: 27, suffix: "%" },
];

export const ABOUT_BIO = [
  "I'm a <strong>Digital Product Manager</strong> with 14 years of tech experience — 9 years dedicated to full-cycle product management. I've worked across <strong>SaaS, HRMS, Telematics, and Smart Mobility</strong>, delivering B2B and B2G solutions that create measurable business value.",
  "My background as a software developer gives me an edge: I speak the language of engineering teams while staying firmly anchored in <strong>customer problems and business outcomes</strong>. I've shipped MVPs, sunset legacy products, led AI integrations, and scaled platforms to 40,000+ users.",
  "I hold certifications in <strong>CSM, CSPO, and SAFe® PM/PO</strong>, and I'm a hands-on practitioner of Agile, Scrum, and data-driven prioritization. Based in Dubai and open to regional and global opportunities.",
];

export const ABOUT_HIGHLIGHTS: Highlight[] = [
  {
    icon: "Target",
    title: "Product Strategy & Vision",
    description: "Roadmap planning, GTM strategy, MVP scoping, market research, OKR definition, and competitive analysis.",
  },
  {
    icon: "Settings",
    title: "Execution & Delivery",
    description: "Agile/Scrum, backlog grooming, sprint delivery, UAT, vendor management, de-risking releases.",
  },
  {
    icon: "Bot",
    title: "AI & Technical Fluency",
    description: "Hands-on with LLMs, RAG, AI agent workflows, vibe coding, SQL, REST APIs, and system architecture.",
  },
  {
    icon: "Globe",
    title: "Domain Expertise",
    description: "Deep experience in HRMS, Telematics, Smart Mobility, IoT, Fleet & Logistics, and Government solutions.",
  },
  {
    icon: "Users",
    title: "Stakeholder & Customer Alignment",
    description: "C-level presentations, government tender solutioning, cross-functional team leadership across 9+ teams.",
  },
];

export const SKILLS: Skill[] = [
  {
    category: "Product Strategy",
    icon: "ClipboardList",
    items: [
      "Roadmap Planning",
      "GTM Strategy",
      "MVP Scoping & Phasing",
      "MLP Definition",
      "Competitor Analysis",
      "Market Research",
      "OKR / KPI Management",
      "Product Lifecycle Mgmt",
      "TAM Analysis",
      "Lean Canvas",
      "Business Case",
    ],
  },
  {
    category: "Execution & Delivery",
    icon: "Zap",
    items: [
      "Agile / Scrum",
      "SAFe",
      "Kanban",
      "Waterfall",
      "Product Backlog Grooming",
      "User Stories",
      "SDLC",
      "UAT",
      "Vendor Management",
      "De-risking Deliveries",
      "Release Management",
    ],
  },
  {
    category: "Research & UX",
    icon: "Search",
    items: [
      "Usability Testing",
      "UX-first Mindset",
      "User-Centered Design",
      "Customer Interviews",
      "Figma",
      "Hotjar",
      "UIzard",
      "Wireframing",
      "Crunchbase / CB Insights",
      "Gartner Research",
    ],
  },
  {
    category: "Technical Skills",
    icon: "Wrench",
    items: [
      "SQL",
      "REST APIs",
      "Data Modelling",
      "System Architecture",
      "C# / .NET",
      "Python",
      "Node.js",
      "GitHub",
      "Jira / Confluence",
      "Azure DevOps",
      "Zendesk",
      "New Relic",
    ],
  },
  {
    category: "AI & Emerging Tech",
    icon: "Bot",
    items: [
      "LLM / AI Prompting",
      "RAG Architecture",
      "AI Agent Workflows",
      "Vibe Coding",
      "Claude / Claude Code",
      "Gemini AI Studio",
      "ChatGPT",
      "Computer Vision",
      "IoT / Telematics",
      "Sensor Fusion",
    ],
  },
  {
    category: "Domain Expertise",
    icon: "Globe",
    items: [
      "HRMS",
      "Payroll",
      "Shift Scheduling",
      "Telematics",
      "GPS Tracking",
      "Fleet Management",
      "Smart Mobility",
      "Logistics",
      "Government (B2G)",
      "SaaS B2B",
      "Digital Transformation",
      "School Transportation",
    ],
  },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    role: "Product Manager",
    duration: "Dec 2022 – Feb 2026 · 3y 2m",
    company: "Yomly",
    companyDetail: "Dubai, UAE · B2B SaaS HRMS",
    highlights: [
      "+27% TAM expansion by launching a Shift & Scheduling module, unlocking Logistics and Retail verticals through clear ROI definition and phased MVP execution.",
      "~50% reduction in payroll discrepancies by integrating Time & Attendance with core HRMS; optimized overtime calculations across 3 enterprises and 11 clients.",
      "40,000 users impacted through a Digital Experience roadmap delivering UX enhancements across Leave, Benefits, Attendance and Expense modules.",
      "Legacy module sunset — led fix-vs-build cost analysis, replacing outdated Performance Management with a modern, market-aligned solution.",
      "+24% sprint velocity by implementing Scrum methodologies and strengthening cross-functional team collaboration.",
      "90% reduction in documentation time by building AI-driven agent workflows with Jira APIs to automate PRDs, decision-support, and product communication.",
      "80% reduction in time-to-wireframe, compressing a week of documentation into under a day via AI tooling.",
    ],
  },
  {
    role: "Product Manager",
    duration: "Nov 2020 – Nov 2022 · 2y",
    company: "Dubai Technologies",
    companyDetail: "Dubai, UAE · Telematics & Smart Mobility",
    highlights: [
      "AI co-pilot for Dubai RTA — shipped computer vision + sensor-fusion system automating 33% of examiner judgement logic for the Smart Drive Testing System, standardizing evaluations.",
      "$5M in deal value generated by leading RFP solutioning, delivering high-impact POCs, and presenting technical strategies to C-level stakeholders with Sales team.",
      "SaaS transformation — converted a project-scoped platform into an investment-ready SaaS model using Lean Canvas, competitor analysis, and a 5-year product roadmap.",
      "53% reduction in monthly incidents by translating customer feedback into prioritized product enhancements and proactive issue resolution.",
      "Route planning automation reduced planning time from 2 hours to 15 minutes through smart driver and vehicle allocation.",
    ],
  },
  {
    role: "Product Owner / Business Analyst",
    duration: "Apr 2016 – Oct 2020 · 4y 6m",
    company: "Dubai Technologies",
    companyDetail: "Dubai, UAE · Telematics & Smart Mobility",
    highlights: [
      "Architected a B2B AI Driving Analysis platform from concept using NPI governance — integrating IoT hardware, firmware, and software into a cohesive product and technical workflow.",
      "10+ enterprise SaaS & on-premise implementations for Dubai RTA, Etisalat, Dubai Municipality, Dubai Transport Corporation, and Be'ah Oman.",
      "19% reduction in L2 escalations through secure self-service override tools empowering L1 support teams.",
      "Smart Drive Testing System for RTA — orchestrated 9 cross-functional teams across Engineering, R&D, Sales, and Marketing for on-time delivery.",
      "Led multiple API-driven integrations with government platforms and enterprise systems, ensuring secure, scalable, and compliant data exchange.",
    ],
  },
  {
    role: "Software Developer",
    duration: "Aug 2014 – Apr 2016 · 2y",
    company: "Dubai Technologies",
    companyDetail: "Dubai, UAE",
    highlights: [
      "Expanded beyond core development to independently manage full project lifecycle — from requirement discovery to post-launch support — while consistently hitting all delivery milestones.",
    ],
  },
  {
    role: "Programmer Analyst",
    duration: "Nov 2011 – Mar 2014 · 2y 4m",
    company: "Cognizant Technology Solutions",
    companyDetail: "Kochi, India",
    highlights: [
      "Full-stack development (Client/Server/Database) per SRS requirements, with 100% adherence to release timelines across enterprise client projects.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Smart Drive Testing System",
    description:
      "AI co-pilot for road test examiners integrating computer vision and sensor fusion, automating 33% of examiner judgement logic and standardizing licensing evaluations for Dubai RTA.",
    link: "/case-studies/smart-drive-testing-system",
    type: "case-study",
    tags: ["AI", "Computer Vision", "Gov"],
    client: "Dubai RTA · Government of Dubai",
    tagColor: "green",
  },
  {
    title: "School Bus Transportation System",
    description:
      "End-to-end smart transportation solution for parents, drivers, and attendants with real-time GPS, IoT safety devices, geofence automation, and an enterprise admin portal.",
    link: "/case-studies/school-bus-transportation",
    type: "case-study",
    tags: ["IoT", "Fleet", "Mobile"],
    client: "Dubai Taxi Corporation",
    tagColor: "purple",
  },
  {
    title: "Roadside Recovery Assistance",
    description:
      "Uber-style on-demand roadside assistance platform with public app, dispatch app, and auto-dispatch algorithm — reducing average response time by ~40%.",
    link: "/case-studies/roadside-recovery",
    type: "case-study",
    tags: ["Transport", "SaaS"],
    client: "Emirates Transport",
    tagColor: "gold",
  },
  {
    title: "Rent-a-Car Management System",
    description:
      "Dynamic rental agreement and invoicing platform with Salik/fines integration, live GPS tracking, and insurance claim support for a major UAE transport authority.",
    link: "/case-studies/rent-a-car",
    type: "case-study",
    tags: ["Transport", "FinTech"],
    client: "Emirates Transport",
    tagColor: "green",
  },
  {
    title: "Shift & Scheduling Module",
    description:
      "Flexible scheduling module for operationally complex verticals — Logistics and Retail — expanding Yomly's TAM by 27% through phased MVP delivery.",
    link: "",
    type: "case-study",
    tags: ["HRMS", "SaaS"],
    client: "Yomly · B2B HRMS Platform",
    tagColor: "purple",
  },
  {
    title: "AI Driving Analysis Platform",
    description:
      "B2B telematics platform built from concept using NPI governance, integrating IoT hardware, firmware, and software into a cohesive product ecosystem for driving behaviour analytics.",
    link: "",
    type: "case-study",
    tags: ["IoT", "Telematics"],
    client: "Dubai Technologies",
    tagColor: "gold",
  },
];

export const AI_PROJECTS: AIProject[] = [
  {
    title: "HR Performance Calibration Tool",
    description:
      "A SaaS prototype giving HR managers an eagle-eye view of performance ratings across the organisation, helping identify deviations and course-correct before appraisals are finalised.",
    techTags: ["Claude API", "Next.js", "AI/LLM", "Vercel"],
    link: "https://hr-performance-calibration-tool.vercel.app/login",
    status: "live",
  },
  {
    title: "HoReCa Website Revamp Prototype",
    description:
      "A restaurant & hospitality sector website prototype demonstrating modern digital experience design — customer-focused UX for the F&B industry, built with AI-assisted vibe coding.",
    techTags: ["Next.js", "Vibe Coding", "UX Design"],
    link: "https://restaurant-store-prototype.vercel.app/",
    status: "live",
  },
  {
    title: "Email & Brief Drafter",
    description:
      "An AI tool that writes a tailored job application email and explains why you are apt for the role — based on the job title and description you provide.",
    techTags: ["AI/LLM", "Lovable", "Prompt Engineering"],
    link: "https://ai-profile-draft.lovable.app/",
    status: "live",
  },
  {
    title: "Kindergarten Worksheet Generator",
    description:
      "Generates age-appropriate worksheets with developmental activities for early childhood education, aligned to India Education Department's unMuk guidelines.",
    techTags: ["AI/LLM", "Education Tech", "RAG"],
    link: "",
    status: "in-progress",
  },
];

export const IMPACT_CARDS: ImpactCard[] = [
  {
    number: "$5M+",
    metric: "Revenue Generated",
    context: "Through strategic RFP solutioning, high-impact POCs, and C-level technical presentations in partnership with Sales at Dubai Technologies.",
  },
  {
    number: "27%",
    metric: "TAM Expansion",
    context: "Unlocked Logistics and Retail verticals at Yomly by launching a Shift & Scheduling module with clear ROI definition and phased execution.",
  },
  {
    number: "90%",
    metric: "Documentation Time Saved",
    context: "Built AI-driven agent workflows using Jira APIs and LLMs to automate PRDs, product communications, and decision-support processes.",
  },
  {
    number: "~50%",
    metric: "Payroll Discrepancies Reduced",
    context: "Integrated Time & Attendance with HRMS core; optimized overtime calculations across 3 enterprises and 11 additional clients.",
  },
  {
    number: "19%",
    metric: "L2 Escalations Reduced",
    context: "Designed and deployed secure self-service override tools empowering L1 teams and reducing operational load.",
  },
  {
    number: "+24%",
    metric: "Sprint Velocity Improvement",
    context: "Implemented Scrum methodologies and cross-functional practices at Yomly, directly improving delivery cadence and team predictability.",
  },
  {
    number: "53%",
    metric: "Monthly Incidents Reduced",
    context: "Translated customer feedback into prioritized enhancements and proactive issue resolution at Dubai Technologies.",
  },
  {
    number: "33%",
    metric: "Examiner Logic Automated",
    context: "AI co-pilot for Dubai RTA road test examiners — integrated computer vision and sensor fusion to standardize evaluations and reduce cognitive load.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Yomly",
    location: "Dubai, UAE",
    roles: [{ title: "Product Manager", duration: "Dec 2022 – Feb 2026" }],
    highlights: [
      "Expanded TAM by 27% by launching Shift & Scheduling module for Logistics and Retail",
      "Slashed payroll discrepancies by ~50% through Time & Attendance integration",
      "Drove engagement across 40,000 users via Digital Experience roadmap",
      "Boosted sprint velocity by 24% through Agile transformation",
      "Reduced documentation time by 90% with AI-driven agent workflows",
    ],
  },
  {
    company: "Dubai Technologies",
    location: "Dubai, UAE",
    roles: [
      { title: "Product Manager", duration: "Nov 2020 – Nov 2022" },
      { title: "Product Owner", duration: "Apr 2016 – Oct 2020" },
      { title: "Software Developer", duration: "Aug 2014 – Apr 2016" },
    ],
    highlights: [
      "Shipped AI co-pilot for Dubai RTA road test examiners, automating 33% of judgement logic",
      "Generated $5M in deal value through RFP solutioning and POCs",
      "Reduced monthly incident reporting by 53%",
      "Delivered 10+ enterprise implementations for Dubai RTA, Etisalat, Dubai Municipality",
      "Cut L2 escalations by 19% via self-service override tools",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    location: "Kochi, India",
    roles: [
      { title: "Programmer Analyst", duration: "Nov 2011 – Mar 2014" },
    ],
    highlights: [
      "Full-stack development ensuring 100% adherence to release timelines",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance" },
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance" },
  { name: "SAFe Product Owner / Product Manager", issuer: "Scaled Agile" },
  { name: "PMP (Course Completed)", issuer: "PMI" },
];

export const AWARDS: Award[] = [
  {
    name: "Trend Setter Award",
    year: "2021",
    link: "https://www.linkedin.com/posts/dubai-technologies_happyinternationalwomensday-choosetochallenge-activity-6775767394339053568-DSrd/",
    image: "/award-trendsetter.png",
    accent: "#E8780A",
  },
  {
    name: "Digitization & Semi-automation of Driver Licensing",
    year: "2020",
    link: "https://x.com/rta_dubai/status/1150756745993773056",
    image: "/award-rta-tweet.png",
    accent: "#1D9BF0",
  },
  {
    name: "Movers & Shakers of the Year",
    year: "2019",
    image: "/award-employee-year.png",
    accent: "#C2553A",
  },
  {
    name: "Movers & Shakers of the Month",
    year: "2017",
    image: "/award-employee-month.png",
    accent: "#C9974A",
  },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nicky-pillai/",
  github: "https://github.com/NickyPillai",
  email: "nickypillai2005@gmail.com",
};

export const IMPACT_MARQUEE_ITEMS = [
  "$5M+ Revenue Generated",
  "27% TAM Expansion",
  "90% Documentation Time Saved",
  "~50% Payroll Discrepancies Cut",
  "19% L2 Escalations Reduced",
  "+24% Sprint Velocity Boost",
  "53% Monthly Incidents Reduced",
  "33% Examiner Logic Automated",
  "40K+ Users Impacted",
  "10+ Enterprise Implementations",
  "9 Cross-Functional Teams Led",
  "14 Years in Tech",
];
