import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Name.css";

const Name = () => {
  const [text, setText] = useState(""); // Stores the current text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Tracks if we are deleting or typing
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Tracks the current word index
  const [speed, setSpeed] = useState(150); // Controls typing/deleting speed

  useEffect(() => {
    const words = ["Full Stack Developer", "Tech Enthusiast"];
    const pauseSpeed = 2000;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        // Deleting characters
        setText((prev) => currentWord.substring(0, prev.length - 1));
        setSpeed(50);
        if (text === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
        }
      } else {
        // Typing characters
        setText((prev) => currentWord.substring(0, prev.length + 1));
        setSpeed(150);
        if (text === currentWord) {
          setIsDeleting(true);
          setSpeed(pauseSpeed); // Pause before deleting
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount or update
  }, [text, isDeleting, currentWordIndex, speed]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 className="title">Igor Flores</h1>
        <div
          className="subtitle"
          style={{
            fontSize: "2rem",
            fontFamily: "monospace",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "0",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>{text}</span>
            <span className="empty" style={{ marginLeft: "5px" }}></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Name;
