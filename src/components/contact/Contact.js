import React, { useState } from "react";
import { ContainerScroll } from "./effects/containerScrollAnimation";
import "./contactStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5026/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" }); // Reseta o formulário
      } else {
        alert("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Ocorreu um problema ao enviar a mensagem.");
    }
  };
  
  return (
    <div id="Contact" style={{ paddingTop: '5rem', marginTop: '-5rem' }}>
      <ContainerScroll
      name="contact"
      id="contactform"
      className="sc-ksBlkl egqjPV"
      onSubmit={handleSubmit}
      >
      <h1 className="title">Contact</h1>
      <div className="input-container">
        <input
          placeholder="Your Name"
          type="text"
          name="name"
          className="sc-hLBbgP cHTMbt"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Your Email"
          type="email"
          name="email"
          className="sc-hLBbgP cHTMbt"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <textarea 
        placeholder="Contact me!"
        name="message"
        className="sc-eDvSVe WwDB"
        value={formData.message}
        onChange={handleChange}
        style={{ height: '200px'}} 
      />
      <button type="submit">Send</button>
    </ContainerScroll>
    </div>
  );
};
export default Contact;
