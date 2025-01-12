import React from "react";
import { motion } from "framer-motion";
import { experienceList } from "./experienceData";
import "./experienceStyle.css";

const Experience = () => {
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
      id="Experience"
      className="title"
      style={{ paddingTop: "5rem", marginTop: "-5rem" }}
    >
      <h1>Experience</h1>
      <p>Overview of my work Experience</p>

      <div className="experience-list">
        {experienceList.map((experience, index) => (
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
            <h2>{experience.title}</h2>
            <h3>{experience.company_name}</h3>
            <h3>{renderTechnologies(experience.technologies)}</h3>
            <p>{experience.date}</p>
            <ul>
              {experience.details.map((detail, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
