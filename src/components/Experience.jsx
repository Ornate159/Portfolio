import { motion } from "framer-motion";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <Section id="experience" eyebrow="Where I work" title="Experience">
      <div className="relative border-l border-white/10 pl-6 lg:pl-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full border-2 border-[#07070a] bg-violet-400 lg:-left-[2.9rem]" />
            <SpotlightCard className="p-6 lg:p-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-white">
                  {experience.role}
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                  {experience.year}
                </span>
              </div>
              <p className="mb-4 text-sm text-violet-200">{experience.company}</p>
              <p className="mb-6 leading-relaxed text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
