import type {
  Stat,
  Skill,
  Project,
  Experience,
  ExperienceRole,
  Service,
  Certification,
  Award,
  ImpactCard,
  Highlight,
} from "@/types";

export const HERO_CONTENT = {
  name: "Nicky Pillai",
  tagline: "Senior Product Manager & Digital Strategist",
  heading: {
    line1: "Senior Product",
    line2: "Manager",
    line3: "& Digital Strategist",
  },
  aboutText:
    "14 years in tech. 5 years in product. I bridge engineering, business, and UX to ship products that generate revenue, expand markets, and actually get adopted. Specialised in HRMS, Telematics, SaaS & AI-driven products across B2B and B2G.",
  ctaPrimary: "See My Impact",
  ctaSecondary: "LinkedIn Profile",
  linkedinUrl: "https://www.linkedin.com/in/nicky-pillai-b6968138/",
};

export const HERO_STATS = [
  { icon: "TrendingUp", number: "$5M+", label: "Revenue generated through strategic RFPs & POCs" },
  { icon: "Rocket", number: "40%", label: "TAM expansion via new Shift & Scheduling module" },
  { icon: "Zap", number: "90%", label: "Reduction in documentation time using AI automation" },
  { icon: "Users", number: "40K+", label: "Users impacted through digital experience improvements" },
];

export const STATS: Stat[] = [
  { label: "Years in Tech", value: 14, suffix: "+" },
  { label: "Enterprise Projects", value: 10, suffix: "+" },
  { label: "Revenue Generated", value: 5, suffix: "M+" },
  { label: "TAM Expansion", value: 40, suffix: "%" },
];

export const ABOUT_BIO = [
  'I\'m a <strong>Digital Product Manager</strong> with 14 years of tech experience — 5 years dedicated to full-cycle product management. I\'ve worked across <strong>SaaS, HRMS, and Telematics</strong>, delivering B2B and B2G solutions that create measurable business value.',
  'My background as a software developer gives me an edge: I speak the language of engineering teams while staying firmly anchored in <strong>customer problems and business outcomes</strong>. I\'ve shipped MVPs, sunset legacy products, led AI integrations, and scaled platforms to 40,000+ users.',
  'I hold certifications in <strong>CSM, CSPO, and SAFe® PM/PO</strong>, and I\'m a hands-on practitioner of Agile, Scrum, and data-driven prioritization. I\'m based in Dubai and open to regional and global opportunities.',
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
    icon: "Handshake",
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
      "Claude Code",
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
      "Recruitment",
      "Shift Scheduling",
      "Telematics",
      "GPS Tracking",
      "Fleet Management",
      "Smart Mobility",
      "Logistics",
      "Government (B2G)",
      "SaaS B2B",
      "Digital Transformation",
    ],
  },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    role: "Product Manager",
    duration: "Dec 2022 - Feb 2026 · 3y 2m",
    company: "Yomly",
    companyDetail: "Dubai, UAE · B2B SaaS HRMS",
    highlights: [
      "+40% TAM expansion by launching a Shift & Scheduling module, unlocking Logistics and Retail verticals through clear ROI definition and phased MVP execution.",
      "~50% reduction in payroll discrepancies by integrating Time & Attendance with core HRMS; optimized overtime calculations across 3 enterprises and 11 clients.",
      "40,000 users impacted through a Digital Experience roadmap delivering UX enhancements across Leave, Benefits, Attendance and Expense modules.",
      "Legacy module sunset — led fix-vs-build cost analysis, replacing outdated Performance Management with a modern, market-aligned solution.",
      "+24% sprint velocity by implementing Scrum methodologies and strengthening cross-functional team collaboration.",
      "90% reduction in documentation time by building AI-driven agent workflows with Jira APIs to automate PRDs, decision-support, and product communication.",
      "Data-driven delivery — leveraged SQL-based analysis for prioritization; mitigated risk through schema validation and automated data reconciliation.",
    ],
  },
  {
    role: "Product Manager",
    duration: "Nov 2020 - Nov 2022 · 2y",
    company: "Dubai Technologies",
    companyDetail: "Dubai, UAE · Telematics & Smart Mobility",
    highlights: [
      "AI co-pilot for Dubai RTA — shipped computer vision + sensor-fusion system automating 33% of examiner judgement logic for the Smart Drive Testing System, standardizing evaluations.",
      "$5M in deal value generated by leading RFP solutioning, delivering high-impact POCs, and presenting technical strategies to C-level stakeholders with Sales team.",
      "SaaS transformation — converted a project-scoped platform into an investment-ready SaaS model using Lean Canvas, competitor analysis, and a 5-year product roadmap.",
      "75% reduction in monthly incidents by translating customer feedback into prioritized product enhancements and proactive issue resolution.",
    ],
  },
  {
    role: "Product Owner",
    duration: "Apr 2016 - Oct 2020 · 4y 6m",
    company: "Dubai Technologies",
    companyDetail: "Dubai, UAE · Telematics & Smart Mobility",
    highlights: [
      "Architected a B2B AI Driving Analysis platform from concept using NPI governance — integrating IoT hardware, firmware, and software into a cohesive product and technical workflow.",
      "10+ enterprise SaaS & on-premise implementations for Dubai RTA, Etisalat, Dubai Municipality, Dubai Transport Corporation, and Be'ah Oman.",
      "80% reduction in L2 escalations through secure self-service override tools empowering L1 support teams.",
      "Smart Drive Testing System for RTA — orchestrated 9 cross-functional teams across Engineering, R&D, Sales, and Marketing for on-time delivery.",
    ],
  },
  {
    role: "Software Developer",
    duration: "Aug 2014 - Apr 2016 · 2y",
    company: "Dubai Technologies",
    companyDetail: "Dubai, UAE",
    highlights: [
      "Full-stack development (Client/Server/Database) per SRS requirements, with 100% adherence to release timelines.",
    ],
  },
  {
    role: "Programmer Analyst",
    duration: "Nov 2011 - Mar 2014 · 2y 4m",
    company: "Cognizant Technology Solutions",
    companyDetail: "Kochi, India",
    highlights: [
      "Software development and delivery across enterprise client projects in India.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Smart Drive Testing System",
    description:
      "AI co-pilot for road test examiners integrating computer vision and sensor fusion, automating 33% of judgement logic and standardizing licensing evaluations.",
    link: "/case-studies/smart-drive-testing-system",
    type: "case-study",
    tags: ["AI", "Computer Vision"],
    client: "Dubai RTA · Government of Dubai",
    tagColor: "green",
  },
  {
    title: "HR Performance Calibration Tool",
    description:
      "An AI-powered HR tool built independently to demonstrate product thinking, AI implementation skills, and rapid prototyping ability. Built from concept to deployment using AI-assisted development workflows.",
    link: "https://hr-performance-calibration-tool.vercel.app",
    type: "external",
    tags: ["AI / LLM", "Live Project", "Self-built"],
    tagColor: "green",
  },
  {
    title: "Shift & Scheduling Module",
    description:
      "Flexible scheduling module for operationally complex verticals (Logistics, Retail), expanding Yomly's TAM by 40% through phased MVP delivery.",
    link: "",
    type: "case-study",
    tags: ["HRMS", "SaaS"],
    client: "Yomly · B2B HRMS Platform",
    tagColor: "purple",
  },
  {
    title: "AI Driving Analysis Platform",
    description:
      "B2B telematics platform built from initial concept using NPI governance, integrating IoT hardware, firmware, and software into a cohesive product ecosystem.",
    link: "",
    type: "case-study",
    tags: ["IoT", "Telematics"],
    client: "Dubai Technologies",
    tagColor: "gold",
  },
  {
    title: "Integrated Waste Management",
    description:
      "Fleet and operations management solution for environmental services, managing complex logistics and compliance tracking across Oman.",
    link: "",
    type: "case-study",
    tags: ["IoT", "Waste Mgmt"],
    client: "Be'ah · Oman Environmental Services",
    tagColor: "green",
  },
  {
    title: "School Bus Management System",
    description:
      "Comprehensive tracking and management system for school bus operations with real-time GPS and fleet monitoring capabilities.",
    link: "",
    type: "case-study",
    tags: ["Fleet", "Transport"],
    client: "Dubai Taxi Corporation · Emirates Transport",
    tagColor: "purple",
  },
  {
    title: "Fleet & Logistics Management",
    description:
      "End-to-end fleet management and logistics optimization system for one of the UAE's largest telecom operators.",
    link: "",
    type: "case-study",
    tags: ["Fleet", "Logistics"],
    client: "Etisalat (e&)",
    tagColor: "gold",
  },
  {
    title: "Wastewater Management System",
    description:
      "Government infrastructure solution for wastewater operations management, ensuring compliance and operational efficiency.",
    link: "",
    type: "case-study",
    tags: ["Utilities", "Gov"],
    client: "RAK Wastewater Authority, Govt. of RAK",
    tagColor: "green",
  },
  {
    title: "Roadside Assistance & Rent-a-Car",
    description:
      "Multi-system solution including roadside assistance dispatch and rental fleet management for one of UAE's largest transport authorities.",
    link: "",
    type: "case-study",
    tags: ["Transport", "SaaS"],
    client: "Emirates Transport",
    tagColor: "purple",
  },
  {
    title: "Digital Experience Roadmap",
    description:
      "Mobile UX enhancement program for HRMS apps covering Leave, Benefits, Attendance and Expenses — driving engagement across 40,000 users.",
    link: "",
    type: "case-study",
    tags: ["HRMS", "Mobile"],
    client: "Yomly · 40,000+ Users",
    tagColor: "gold",
  },
];

export const IMPACT_CARDS: ImpactCard[] = [
  {
    number: "$5M+",
    metric: "Revenue Generated",
    context: "Through strategic RFP solutioning, high-impact POCs, and C-level technical presentations in partnership with Sales at Dubai Technologies.",
  },
  {
    number: "40%",
    metric: "Total Addressable Market Expansion",
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
    number: "80%",
    metric: "L2 Support Escalations Reduced",
    context: "Designed and deployed secure self-service override tools empowering L1 teams and reducing operational load.",
  },
  {
    number: "+24%",
    metric: "Sprint Velocity Improvement",
    context: "Implemented Scrum methodologies and cross-functional practices at Yomly, directly improving delivery cadence and team predictability.",
  },
  {
    number: "75%",
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
    roles: [{ title: "Product Manager", duration: "Dec 2022 - Feb 2026" }],
    highlights: [
      "Expanded TAM by 40% by launching Shift & Scheduling module for Logistics and Retail",
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
      { title: "Product Manager", duration: "Nov 2020 - Nov 2022" },
      { title: "Product Owner", duration: "Apr 2016 - Oct 2020" },
      { title: "Software Developer", duration: "Aug 2014 - Apr 2016" },
    ],
    highlights: [
      "Shipped AI co-pilot for Dubai RTA road test examiners, automating 33% of judgement logic",
      "Generated $5M in deal value through RFP solutioning and POCs",
      "Reduced monthly incident reporting by 75%",
      "Delivered 10+ enterprise implementations for Dubai RTA, Etisalat, Dubai Municipality",
      "Cut L2 escalations by 80% via self-service override tools",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    location: "Kochi, India",
    roles: [
      { title: "Programmer Analyst", duration: "Nov 2011 - Mar 2014" },
    ],
    highlights: [
      "Full-stack development ensuring 100% adherence to release timelines",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    title: "Product Strategy Development",
    description:
      "Define your product vision, roadmap, and go-to-market strategy. From market analysis to competitive positioning, I help you build products that win.",
    icon: "Target",
  },
  {
    title: "Roadmap Planning",
    description:
      "Create actionable, outcome-driven product roadmaps aligned with business goals. Prioritize features using data-driven frameworks.",
    icon: "Map",
  },
  {
    title: "Agile Transformation",
    description:
      "Implement Scrum/Kanban methodologies, optimize sprint velocity, and build high-performing cross-functional product teams.",
    icon: "Zap",
  },
  {
    title: "MVP Scoping & Development",
    description:
      "Identify the right MVP scope, validate assumptions, and execute rapid prototyping to get your product to market fast.",
    icon: "Rocket",
  },
  {
    title: "IT Process Mapping",
    description:
      "Map and optimize your operational processes. Identify bottlenecks, streamline workflows, and drive operational efficiency.",
    icon: "GitBranch",
  },
  {
    title: "SOP & Digital Transformation",
    description:
      "Develop standard operating procedures and lead digital transformation initiatives to modernize your business operations.",
    icon: "FileText",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance" },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
  },
  {
    name: "SAFe Product Owner / Product Manager",
    issuer: "Scaled Agile",
  },
  { name: "PMP (Course Completed)", issuer: "PMI" },
];

export const AWARDS: Award[] = [
  { name: "Trend Setter Award", year: "2021" },
  {
    name: "Digitization & Semi-automation of Driver Licensing",
    year: "2020",
  },
  { name: "Employee of the Year", year: "2019" },
  { name: "Employee of the Month", year: "2017" },
];

export const TOOLS_LIST = [
  "Jira", "Confluence", "Azure DevOps", "Figma", "Hotjar", "UIzard",
  "GitHub", "New Relic", "Zendesk", "SQL Server", "PostgreSQL",
  "Postman", "Swagger", "Claude Code", "ChatGPT", "Gemini AI Studio",
  "Notion", "Miro", "Google Analytics", "Mixpanel", "Amplitude",
  "Vercel", "VS Code", "Slack", "Microsoft Teams",
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nicky-pillai-b6968138/",
  github: "https://github.com/NickyPillai",
  email: "nickypillai2005@gmail.com",
};

export const SERVICE_OPTIONS = [
  "Product Strategy Development",
  "Roadmap Planning",
  "Agile Transformation",
  "MVP Scoping & Development",
  "IT Process Mapping",
  "SOP & Digital Transformation",
  "Other",
];
