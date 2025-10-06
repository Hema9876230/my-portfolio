import React from "react";

function Projects() {
  const projects = [
    
    {
      title: "CleanMela",
      description: "Smart sanitation and emergency support app for the Mahakumbh Mela.",
      github: "https://github.com/Hema9876230/CleanMela",
    },
    {
      title: "MindVerse",
      description: "AI-powered immersive experience visualizing thoughts and emotions as dreamscapes.",
      github: "https://github.com/Hema9876230/Mindverse",
    },
    {
      title: "Resume Screening & Feedback App",
      description: "Web app to screen resumes and provide AI-generated feedback using Streamlit and Flask.",
      github: "https://github.com/Hema9876230/resumescreeningapp",
    },
    {
      title: "Spotify Clone",
      description: "A full-stack music streaming app clone with React frontend and Node.js backend.",
      github: "https://github.com/Hema9876230/Spotify-Clone",
    },
  ];

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const projectCardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.2s",
  };

  const projectCardHover = {
    transform: "scale(1.02)",
  };

  const linkStyle = {
    color: "#1DB954", // Spotify green for a modern feel
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>My Projects</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((proj, index) => (
          <li
            key={index}
            style={projectCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
