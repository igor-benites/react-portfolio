import React from "react";
import { motion } from "framer-motion";
import { projects }  from "./projectsData"; 
import "./projectsStyle.css";

const Projects = () => {
  return (
    <div id="Projects" className="title" style={{ paddingTop: '5rem', marginTop: '-5rem' }}>
      <h2>Projects</h2>
      <p>a list of my recent projects</p>
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
            <h3>{experience.description}</h3>
            <p>{experience.link}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
