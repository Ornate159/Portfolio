import { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % PROJECTS.reduce((acc, project) => acc + project.images.length, 0));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, []); // No dependencies, runs only once

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/2" // Increased width by 2 times
              style={{
                overflow: "hidden",
                position: "relative",
                height: "450px", // Increased height by 2 times
                margin: "20px 40px", // Set margin: 20px top/bottom and 40px left/right
              }}
            >
              {project.images.map((image, idx) => (
                <motion.img
                  key={idx}
                  src={image}
                  alt={project.title}
                  className="mb-6 rounded"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: `${(idx - currentImageIndex + project.images.length) % project.images.length * 100}%`, // Calculate the left position based on the current image index
                    width: "100%", // Ensure image fits container width
                    height: "100%", // Ensure image fits container height
                    objectFit: "cover", // Maintain aspect ratio and cover the container
                    transition: "left 1.5s ease", // Slide transition
                  }}
                />
              ))}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap overflow-x-auto">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      backgroundColor: "#6a0dad",
                      color: "#ffffff",
                    }}
                    transition={{ duration: 0.2 }}
                    className="mr-2 mb-2 rounded bg-purple-950 px-2 py-1 text-sm font-medium text-white transition-colors duration-300 cursor-pointer"
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
