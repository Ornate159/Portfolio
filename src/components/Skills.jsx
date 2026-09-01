import { motion } from "framer-motion";
import Section from "./Section";
import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <Section id="skills" eyebrow="What I bring" title="Skills">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((group, index) => (
          <motion.div
            key={group.category}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            className="glass-card group p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-400" />
              <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
