import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 90, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 90, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    const onMove = (event) => {
      x.set(event.clientX - 300);
      y.set(event.clientY - 300);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_60%)] blur-2xl lg:block"
    />
  );
};

export default CursorGlow;
