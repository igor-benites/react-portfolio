import React from "react";
import { motion } from "framer-motion";
import { projects } from "./projectsData";
import "./projectsStyle.css";

const Projects = () => {
  function renderTechnologies(technologies) {
    return (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {technologies.map((tech, index) => (
          <li
            key={index}
            style={{
              display: "inline",
              marginRight: "10px",
              position: "relative",
              whiteSpace: "nowrap",
            }}
          >
            {tech}
            {index < technologies.length - 1 && (
              <span
                style={{
                  position: "absolute",
                  right: "-15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  marginLeft: "5px",
                  marginRight: "6px",
                }}
              >
                •
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      id="Projects"
      className="title"
      style={{ paddingTop: "5rem", marginTop: "-5rem" }}
    >
      <h2>Projects</h2>
      <p>A list of my recent projects</p>
      <div className="experience-list">
        {projects.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
          >
            <h2>{experience.name}</h2>
            <h3>{renderTechnologies(experience.technologies)}</h3>
            <h3>{experience.description}</h3>
            <a href={experience.link} target="_blank" rel="noopener noreferrer">
              {experience.reposity}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
