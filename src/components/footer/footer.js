import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={contentStyles}>
        <p style={textStyles}>© 2025 Igor Flores. All Rights Reserved.</p>
        <div style={socialIconsStyles}>
          <a
            href="https://github.com/igor-benites"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/igor-floress"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  color: "#9cafa3",
  padding: "20px 0",
  textAlign: "center",
  position: "relative",
  bottom: 0,
  width: "100%",
  marginTop: "60px",
  borderTop: "2px solid #9cafa3",
};

const contentStyles = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const textStyles = {
  margin: "10px 0",
  fontSize: "14px",
};

const socialIconsStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const iconStyle = {
  color: "#9cafa3",
  textDecoration: "none",
  fontSize: "16px",
  transition: "color 0.3s ease",
};

iconStyle[":hover"] = {
  color: "#9cafa3",
};

export default Footer;
