import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import Section from "./Section";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <Section id="education" eyebrow="Where I studied" title="Education">
      <div className="grid gap-5 lg:grid-cols-3">
        {EDUCATION.map((education, index) => (
          <motion.div
            key={education.institution}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex flex-col p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <FaGraduationCap className="text-2xl text-violet-300" />
              <span className="text-xs text-neutral-500">{education.year}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{education.subject}</h3>
            <p className="mt-2 text-sm text-neutral-400">{education.institution}</p>
            <p className="mt-auto pt-5 text-sm font-medium text-violet-200">{education.result}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
