import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <Section id="projects" eyebrow="What I built" title="Projects">
      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <SpotlightCard
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="p-6 lg:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                {project.subtitle && (
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-violet-300">
                    {project.subtitle}
                  </p>
                )}
                <h3 className="font-display text-xl font-semibold text-white lg:text-2xl">
                  {project.title}
                </h3>
              </div>
              <span className="font-display text-sm text-neutral-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-4 max-w-3xl leading-relaxed text-neutral-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors duration-300 hover:text-fuchsia-300"
              >
                {project.linkLabel ?? "Visit"}
                <FaArrowUpRightFromSquare className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}

            {project.images.length > 0 && (
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {project.images.map((image, imageIndex) => (
                  <a
                    key={imageIndex}
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    className="overflow-hidden rounded-xl border border-white/10"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${imageIndex + 1}`}
                      className="h-28 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </a>
                ))}
              </div>
            )}
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
