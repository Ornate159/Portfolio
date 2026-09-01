import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Section = ({ id, eyebrow, title, children }) => {
  return (
    <section id={id} className="scroll-mt-28 py-20 lg:py-28">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-violet-300/80">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white lg:text-4xl">
          {title}
        </h2>
        <div className="mt-5 h-px w-24 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-transparent" />
      </motion.div>
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
