import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {SKILLS.map((group, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-xl border border-neutral-800 p-6"
          >
            <h3 className="mb-4 font-semibold text-purple-100">{group.category}</h3>
            <div className="flex flex-wrap">
              {group.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
