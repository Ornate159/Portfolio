import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/raoProfile.png";
import cvFile from "../assets/raoCv.pdf"; // Importing the CV file
import { FaDownload } from "react-icons/fa"; // Importing the download icon from Font Awesome
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              whileHover={{
                color: "#9b59b6",
                textShadow: "0px 0px 8px rgba(155, 89, 182, 0.8)",
              }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Reeyad Ahmed Ornate
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-4"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mb-8" // Increase gap above the button
            >
              {HERO_CONTENT}
            </motion.p>
            {/* Download button for CV */}
            <a href={cvFile} download>
            <a href={cvFile} download>
  <motion.button
    variants={container(1.5)} // Use the same motion variants for consistency
    initial="hidden" // Start hidden
    animate="visible" // Animate to visible state
    whileHover={{
      backgroundColor: "#6a0dad", // Shown when hovered over
      color: "#ffffff", // Text color shown when hovered over
      boxShadow: "0px 0px 8px rgba(106, 13, 173, 0.8)", // Box shadow shown when hovered over
      transition: { duration: 0.1 }, // Transition duration when hovered over
    }}
    className="text-white font-bold py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-all duration-300 mb-4" // Moderate rounded edges with bottom margin
    style={{ backgroundColor: "#9b59b6" }} // Lighter initial background color
  >
    <FaDownload className="mr-2" /> {/* Download icon with right margin */}
    Download CV
  </motion.button>
</a>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Reeyad Ahmed Ornate"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
