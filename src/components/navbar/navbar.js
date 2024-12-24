import React, { useState } from 'react';
import './navbar.css';

const Navbar = ({ sections, activeSection, setActiveSection }) => {
  const [isDotVisible, setDotVisible] = useState(true); 

  const handleItemClick = (section) => {
    setDotVisible(false);
    setTimeout(() => {
      setDotVisible(true);
    }, 700);

    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {sections.map((section) => (
          <li
            key={section}
            className={`nav-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => handleItemClick(section)}
          >
            {section}
            {activeSection === section && isDotVisible && (
              <span></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;