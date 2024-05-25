import project1Image1 from "../assets/projects/project-1-image1.png";
import project1Image2 from "../assets/projects/project-1-image2.png";
import project1Image3 from "../assets/projects/project-1-image3.png";
import project1Image4 from "../assets/projects/project-1-image4.png";
import project1Image5 from "../assets/projects/project-1-image5.png";
import project1Image6 from "../assets/projects/project-1-image6.png";

import project2Image1 from "../assets/projects/project-2-image1.png";
import project2Image2 from "../assets/projects/project-2-image2.png";
import project2Image3 from "../assets/projects/project-2-image3.png";
import project2Image4 from "../assets/projects/project-2-image4.png";
import project2Image5 from "../assets/projects/project-2-image5.png";

export const HERO_CONTENT = `As a recent Computer Science graduate from BRAC University, I am an enthusiastic Web Developer dedicated to continuous learning and professional growth. With a foundational understanding of computer science principles and a passion for web development, I am eager to contribute to innovative teams and expand my skills in the dynamic tech landscape. I am committed to leveraging my knowledge and collaborating effectively to support the success of forward-thinking projects and initiatives.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const EDUCATION = [
  {
    year: "2020 - 2024",
    subject: "B.Sc in Computer Science",
    institution: "BRAC University",
    result: `CGPA: 3.5`,
  },
  {
    year: "Passing Year - 2019",
    subject: "HSC Science".split(" ").join("\n"),
    institution: "National Ideal College",
    result: `GPA: 4.33`,

  },
  {
    year: "Passing Year - 2017",
    subject: "Science",
    institution: "Ideal School & College",
    result: `GPA: 5.0`,
  },
];

export const PROJECTS = [
  {
    title: "Brand Influencer Collab",
    images: [project1Image1, project1Image2, project1Image3, project1Image4, project1Image5], // Array of images
    description:
      "A web platform designed to connect brands with influencers. It allows users to create profiles either as brands or influencers, enabling them to browse, post, and apply for job offers. Brands can publish job offers, hire influencers, and manage payments securely. Influencers can apply on the posted jobs and can reach out to the brands. The platform includes administrative features to ensure user management and system security, incorporating password encryption and data security protocols.",
    technologies: ["HTML", "CSS", "Angular", "TS", "Node.js", "Java", "Spring Boot", "MySql"],
  },
  {
    title: "Online Pharmacy",
    images: [project2Image1, project2Image2, project2Image3, project2Image4, project2Image5], // Array of images
    description:
      "A web platform that enables local pharmacies to register and list their products, including detailed descriptions, shop locations, and prices. Customers can browse products without needing to register and can purchase them directly by visiting the shop. Registered customers have the added functionality of adding items to their cart, checking out, and paying using various online payment methods. Administrators have the capability to manage and maintain the product listings, ensuring the platform remains up-to-date and accurate.",
    technologies: ["HTML", "CSS", "Python", "Django", "SQLite"],
  },
];

export const CONTACT = {
  address: "Khan Mahal, 58/31 ka, Madinabag, North Mugdapara, Dhaka-1214",
  phoneNo: "+8801775571221",
  email: "ornate159@gmail.com",
};
