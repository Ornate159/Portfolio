import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  SiConfluence,
  SiNotion,
  SiSlack,
  SiMicrosoftexcel,
  SiGooglesheets,
  SiPowerbi,
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
  SiReact,
  SiTypescript,
  SiAngular,
  SiSpringboot,
  SiDjango,
} from "react-icons/si";
import Section from "./Section";

const DAILY_TOOLS = [
  { icon: SiSlack, label: "Slack", color: "text-[#E01E5A]" },
  { icon: SiConfluence, label: "Confluence", color: "text-[#2684FF]" },
  { icon: SiNotion, label: "Notion", color: "text-neutral-200" },
  { icon: SiMicrosoftexcel, label: "Excel", color: "text-[#217346]" },
  { icon: SiGooglesheets, label: "Google Sheets", color: "text-[#34A853]" },
  { icon: SiPowerbi, label: "Power BI", color: "text-[#F2C811]" },
];

const TECHNICAL_TOOLS = [
  { icon: SiPython, label: "Python", color: "text-[#3776AB]" },
  { icon: SiTensorflow, label: "TensorFlow", color: "text-[#FF6F00]" },
  { icon: SiScikitlearn, label: "scikit-learn", color: "text-[#F7931E]" },
  { icon: SiMysql, label: "SQL", color: "text-[#4479A1]" },
  { icon: SiReact, label: "React", color: "text-[#61DAFB]" },
  { icon: SiTypescript, label: "TypeScript", color: "text-[#3178C6]" },
  { icon: SiAngular, label: "Angular", color: "text-[#DD0031]" },
  { icon: SiSpringboot, label: "Spring Boot", color: "text-[#6DB33F]" },
  { icon: SiDjango, label: "Django", color: "text-[#44B78B]" },
];

const ToolGrid = ({ tools }) =>
  tools.map((tool, index) => (
    <motion.div
      key={tool.label}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="glass-card flex flex-col items-center gap-3 px-4 py-5"
    >
      <tool.icon className={`text-3xl ${tool.color}`} />
      <span className="text-center text-xs text-neutral-400">{tool.label}</span>
    </motion.div>
  ));

ToolGrid.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Technologies = () => {
  return (
    <Section id="toolbox" eyebrow="What I use" title="Toolbox">
      <p className="mb-5 text-sm uppercase tracking-[0.2em] text-neutral-500">Daily drivers</p>
      <div className="mb-12 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        <ToolGrid tools={DAILY_TOOLS} />
      </div>
      <p className="mb-5 text-sm uppercase tracking-[0.2em] text-neutral-500">
        Technical background
      </p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
        <ToolGrid tools={TECHNICAL_TOOLS} />
      </div>
    </Section>
  );
};

export default Technologies;
