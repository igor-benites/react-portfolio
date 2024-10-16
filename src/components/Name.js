import React, { useState, useEffect } from 'react';
import '../index.css';

const Name = () => {
    const [text, setText] = useState("Full Stack Developer");
    const [isTechEnthusiast, setIsTechEnthusiast] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsTechEnthusiast(!isTechEnthusiast);
        setText(isTechEnthusiast ? "Full Stack Developer" : "Tech Enthusiast");
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [isTechEnthusiast]);
  
    return (
      <div className="section">
        <h1>Igor Flores</h1>
        <div className={`text ${isTechEnthusiast ? 'rotate-out' : 'rotate-in'}`}>
          {text}
        </div>
      </div>
    );
};
  
export default Name;