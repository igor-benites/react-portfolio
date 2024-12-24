import React, { useState, useEffect, useMemo } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { About, Contact, Experience, Footer, Name, Navbar, Projects } from './components/Index.js';
import { Meteors } from './components/ui/meteors';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About');

  const sections = useMemo(() => ['About', 'Experience', 'Projects', 'Contact'], []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.8 });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const handleNavClick = (section) => {
    const element = document.querySelector(`#${section} h1`) || document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-container">
    {/* Meteors Background */}
    <div className="meteors-background">
      <Meteors number={1000} />
    </div>
    {/* Content */}
    <Navbar sections={sections} 
    activeSection={activeSection} 
    setActiveSection={setActiveSection}
    onNavClick={handleNavClick} 
    />
    <div style={{ margin: '25rem 0' }}>
      <Name />
    </div>
    <div style={{ margin: '20rem 0' }}>
      <About />
    </div>
    <div style={{ margin: '10rem 0' }}>
      <Experience />
    </div>
    <div style={{ margin: '10rem 0' }}>
      <Projects />
    </div>
    <div style={{ margin: '10rem 0' }}>
      <Contact />
    </div>
    <Footer />
  </div>
  );
}

export default App;
