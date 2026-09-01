import project1Image1 from "../assets/projects/project-1-image1.png";
import project1Image2 from "../assets/projects/project-1-image2.png";
import project1Image3 from "../assets/projects/project-1-image3.png";
import project1Image4 from "../assets/projects/project-1-image4.png";
import project1Image5 from "../assets/projects/project-1-image5.png";

import project2Image1 from "../assets/projects/project-2-image1.png";
import project2Image2 from "../assets/projects/project-2-image2.png";
import project2Image3 from "../assets/projects/project-2-image3.png";
import project2Image4 from "../assets/projects/project-2-image4.png";
import project2Image5 from "../assets/projects/project-2-image5.png";

export const HERO_ROLE = "Clinical AI Specialist";

export const HERO_CONTENT = `Computer Science graduate with 20 months of professional experience in AI-assisted content review, quality operations, and compliance documentation at a US-based healthcare technology company. I evaluate LLM output for accuracy, surface recurring error patterns, and turn them into documentation and enablement that teams actually use — all within HIPAA-aligned frameworks. Currently expanding into data analytics with SQL, Excel, and Power BI.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Clinical AI Specialist",
    company: "Commure Bangladesh (US-based Healthcare Technology Company)",
    description: `Review and evaluate AI-generated clinical content daily across high-complexity accounts, assessing output against defined quality standards and catching hallucinations, omissions, and factual inconsistencies. Monitor quality trends, identify recurring error patterns, and submit evidence-based findings to QA leads. Author and maintain Clinician Preference Guides used as the primary account reference by teammates, and run ad-hoc knowledge transfer sessions on clinician workflows and EHR navigation. Deliver 15-50 finalized records per shift within turnaround commitments — zero negative incidents and two formally recorded positive performance citations across 20 months.`,
    technologies: ["LLM Output Evaluation", "Quality Assurance", "HIPAA Compliance", "Technical Documentation", "EHR Workflows", "Cross-Timezone Coordination"],
  },
];

export const EDUCATION = [
  {
    year: "2020 - 2024",
    subject: "B.Sc. in Computer Science",
    institution: "BRAC University",
    result: `CGPA: 3.50 / 4.00`,
  },
  {
    year: "Passing Year - 2019",
    subject: "Higher Secondary Certificate (Science)",
    institution: "National Ideal College",
    result: `GPA: 4.33 / 5.00`,
  },
  {
    year: "Passing Year - 2017",
    subject: "Secondary School Certificate (Science)",
    institution: "Ideal School & College",
    result: `GPA: 5.00 / 5.00`,
  },
];

export const SKILLS = [
  {
    category: "AI Operations & Quality",
    items: ["AI content review", "LLM output assessment", "Hallucination & omission detection", "Error pattern escalation", "Quality metric monitoring"],
  },
  {
    category: "Compliance & Documentation",
    items: ["HIPAA (trained & practiced)", "Information security SOPs", "Policy & procedure authoring", "Audit evidence collection", "Knowledge asset maintenance"],
  },
  {
    category: "Data & Analytics",
    items: ["SQL (in progress)", "Microsoft Excel", "Google Sheets", "Power BI (in progress)", "Data validation", "Structured reporting"],
  },
  {
    category: "Enablement & Coordination",
    items: ["Process & workflow guides", "Knowledge transfer delivery", "Training content maintenance", "SOP development", "Cross-functional coordination"],
  },
  {
    category: "Tools & Systems",
    items: ["Confluence", "Notion", "Google Workspace", "Slack", "WorkRamp (LMS)", "eFront (LMS)"],
  },
];

export const PROJECTS = [
  {
    title: "Automated Ovarian Cancer Detection - Deep Learning & Explainable AI",
    subtitle: "Undergraduate Thesis",
    link: "https://arxiv.org/abs/2603.11818",
    linkLabel: "Read the paper",
    images: [],
    description:
      "Designed and trained multiple CNN architectures (InceptionV3, ResNet, VGGNet, LeNet-5) for medical image classification, reaching 94% accuracy through structured preprocessing and hyperparameter tuning. Applied LIME, SHAP, and Integrated Gradients to translate model outputs into interpretable, clinician-readable findings, and authored the full research documentation covering methodology, model reasoning, and results.",
    technologies: ["Python", "Deep Learning", "CNNs", "Explainable AI", "LIME", "SHAP", "Integrated Gradients"],
  },
  {
    title: "Brand-Influencer Collaboration Platform",
    link: "https://github.com/ornate159/Brand-Influencer-Collab",
    linkLabel: "View on GitHub",
    images: [project1Image1, project1Image2, project1Image3, project1Image4, project1Image5],
    description:
      "A full-stack web marketplace connecting brands with influencers. Users register as either a brand or an influencer to browse, post, and apply for job offers; brands publish offers, hire influencers, and manage payments securely. Built with Angular and Spring Boot on REST APIs, with secure authentication, role-based access control, password encryption, and administrative user management.",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "MySQL", "HTML", "CSS"],
  },
  {
    title: "Online Pharmacy Platform",
    images: [project2Image1, project2Image2, project2Image3, project2Image4, project2Image5],
    description:
      "A Django-based e-commerce application that lets local pharmacies register and list products with descriptions, shop locations, and prices. Guests can browse freely, while registered customers get cart, checkout, and online payment workflows. Includes relational schema design, full CRUD operations, and admin tooling to keep listings accurate.",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Dhaka, Bangladesh",
  phoneNo: "+880 1775-571221",
  email: "ornate159@gmail.com",
};
