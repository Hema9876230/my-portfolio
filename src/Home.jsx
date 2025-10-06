import React, { useState } from "react";
import profile from "./Profile.jpg";

function Home() {
  const [formData, setFormData] = useState({ name: "", mobile: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918862958704";
    const message = `Hello, my name is ${formData.name}. Mobile: ${formData.mobile}. Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setFormData({ name: "", mobile: "", message: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 100%)",
        color: "#fff",
      }}
    >
      {/* Profile Image */}
      <img
        src={profile}
        alt="Hema Rani"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "25px",
          border: "4px solid #4CAF50",
          boxShadow: "0 8px 25px rgba(76, 175, 80, 0.3)",
          transition: "all 0.4s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 12px 35px rgba(76, 175, 80, 0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(76, 175, 80, 0.3)";
        }}
      />

      {/* Name */}
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "15px",
          textAlign: "center",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        Hello, I’m Hema Rani 👋
      </h1>

      {/* Introduction */}
      <p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          fontSize: "18px",
          lineHeight: "1.9",
          marginBottom: "40px",
          color: "#ccc",
        }}
      >
        I am a <b>Software Developer</b> specializing in <b>Web Development</b>. Currently pursuing my <b>B.Tech in AIML</b>, I have gained hands-on knowledge in <b>Machine Learning, Neural Networks,</b> and <b>Deep Learning</b>. I have completed <b>DSA in C++</b> and possess strong foundations in <b>OOP, DBMS, and Operating Systems</b>.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "#111",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 12px 30px rgba(76, 175, 80, 0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#4CAF50" }}>
          Contact Me
        </h2>

        {["name", "mobile"].map((field) => (
          <input
            key={field}
            type={field === "mobile" ? "tel" : "text"}
            name={field}
            placeholder={field === "name" ? "Your Name" : "Mobile Number"}
            value={formData[field]}
            onChange={handleChange}
            required
            style={{
              padding: "14px 16px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #333",
              fontSize: "16px",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              transition: "all 0.3s",
            }}
            onFocus={(e) => (e.currentTarget.style.border = "1px solid #4CAF50")}
            onBlur={(e) => (e.currentTarget.style.border = "1px solid #333")}
          />
        ))}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{
            padding: "14px 16px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #333",
            fontSize: "16px",
            resize: "none",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            transition: "all 0.3s",
          }}
          onFocus={(e) => (e.currentTarget.style.border = "1px solid #4CAF50")}
          onBlur={(e) => (e.currentTarget.style.border = "1px solid #333")}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            background: "linear-gradient(90deg, #4CAF50, #45a049)",
            color: "#fff",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Home;
