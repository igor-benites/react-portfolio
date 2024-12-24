import React from "react";
import { motion } from "framer-motion";
import { experienceList }  from "./experienceData"; 
import "./experienceStyle.css";

const Experience = () => {
  return (
    <div id="Experience" className="title" style={{ paddingTop: '5rem', marginTop: '-5rem' }}>
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
