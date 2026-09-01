import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import Counter from "./Counter";
import { HERO_CONTENT, HERO_ROLE, HERO_ROTATING, STATS } from "../constants";
import profilePic from "../assets/raoPic.jpg";
import cvFile from "../assets/raoCv.pdf";

const fadeUp = (delay) => ({
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setRotatingIndex((index) => (index + 1) % HERO_ROTATING.length),
      2600
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="pt-32 lg:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-neutral-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to AI quality, ops &amp; analytics roles
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Reeyad Ahmed
            <br />
            <span className="gradient-text">Ornate</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="mt-5 font-display text-xl text-neutral-300 lg:text-2xl"
          >
            {HERO_ROLE} <span className="text-neutral-600">/</span>{" "}
            <span className="text-neutral-400">Dhaka, Bangladesh</span>
          </motion.p>

          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate="visible"
            className="mt-3 flex h-7 items-center gap-2 text-sm text-neutral-500"
          >
            <span>Focused on</span>
            <span className="relative inline-flex h-7 items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={HERO_ROTATING[rotatingIndex]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-medium text-violet-200"
                >
                  {HERO_ROTATING[rotatingIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl leading-relaxed text-neutral-400"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={cvFile}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_rgba(167,139,250,0.8)]"
            >
              <FaDownload className="text-xs" />
              Download CV
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
            >
              View projects
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#08080c] px-4 py-5 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <dt className="font-display text-2xl font-semibold text-white">
                  <Counter value={stat.value} />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-neutral-500">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-sky-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2">
            <img
              src={profilePic}
              alt="Reeyad Ahmed Ornate"
              className="aspect-square w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
