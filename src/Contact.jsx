import React from "react";

function Contact() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#333",
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
    padding: "15px 20px",
    margin: "10px 0",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "600",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const linkedinStyle = {
    ...cardStyle,
    backgroundColor: "#0077B5",
  };

  const githubStyle = {
    ...cardStyle,
    backgroundColor: "#333",
  };

  const emailStyle = {
    ...cardStyle,
    backgroundColor: "#EA4335",
  };

  const hoverEffect = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Contact Me</h2>

      <a
        href="https://www.linkedin.com/in/hema-rani513/"
        target="_blank"
        rel="noreferrer"
        style={linkedinStyle}
        onMouseEnter={e => (e.currentTarget.style.transform = hoverEffect.transform)}
        onMouseLeave={e => (e.currentTarget.style.transform = "none")}
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/Hema9876230"
        target="_blank"
        rel="noreferrer"
        style={githubStyle}
        onMouseEnter={e => (e.currentTarget.style.transform = hoverEffect.transform)}
        onMouseLeave={e => (e.currentTarget.style.transform = "none")}
      >
        GitHub
      </a>

      <a
        href="mailto:hrani4580@gmail.com"
        style={emailStyle}
        onMouseEnter={e => (e.currentTarget.style.transform = hoverEffect.transform)}
        onMouseLeave={e => (e.currentTarget.style.transform = "none")}
      >
        Email Me
      </a>
    </div>
  );
}

export default Contact;
