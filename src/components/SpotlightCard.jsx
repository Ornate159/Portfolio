import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const SpotlightCard = ({ className = "", children, ...rest }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(167,139,250,0.14), transparent 70%)`;

  const handleMouseMove = (event) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card group relative overflow-hidden hover:border-white/20 ${className}`}
      {...rest}
    >
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
};

SpotlightCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SpotlightCard;
