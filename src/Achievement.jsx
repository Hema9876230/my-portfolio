import React from "react";

// Certificate and hackathon images
import nptelPython from "./nptelPython.jpg";
import nptelDBMS from "./nptelDBMS.jpg";
import summerAnalytics from "./summerAnalytics.jpg";
import cleanMela from "./cleanMela.jpg";
import aosBuildathon from "./aosBuildathon.jpg";
import ideathon from "./ideathon.jpg";
import globalAIBuildathon from "./globalAIBuildathon.jpg";
import flipkartGrid from "./flipkartGrid.jpg";

function Achievement() {
  const sectionStyle = { marginBottom: "40px" };
  const titleStyle = { fontSize: "24px", fontWeight: "bold", marginBottom: "15px" };
  const listStyle = { listStyleType: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "20px" };
  const itemStyle = { border: "1px solid #ccc", borderRadius: "8px", padding: "10px", width: "250px", textAlign: "center" };
  const imgStyle = { width: "100%", borderRadius: "5px", marginBottom: "10px", cursor: "pointer" };

  return (
    <div>
      {/* Certificates Section */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Certificates</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <a href={nptelPython} target="_blank" rel="noopener noreferrer">
              <img src={nptelPython} alt="Nptel Python for Data Science" style={imgStyle} />
            </a>
            <p>Npter Python for Data Science</p>
          </li>
          <li style={itemStyle}>
            <a href={nptelDBMS} target="_blank" rel="noopener noreferrer">
              <img src={nptelDBMS} alt="Nptel DBMS Certificate" style={imgStyle} />
            </a>
            <p>Nptel DBMS Certificate</p>
          </li>
          <li style={itemStyle}>
            <a href={summerAnalytics} target="_blank" rel="noopener noreferrer">
              <img src={summerAnalytics} alt="IIT Guwahati Summer Analytics 2025" style={imgStyle} />
            </a>
            <p>IIT Guwahati Summer Analytics 2025</p>
          </li>
          <li style={itemStyle}>
            <a href={globalAIBuildathon} target="_blank" rel="noopener noreferrer">
              <img src={globalAIBuildathon} alt="Global AI Buildathon - MindVerse" style={imgStyle} />
            </a>
            <p>Global AI Buildathon - MindVerse</p>
          </li>
        </ul>
      </div>

      {/* Hackathons Section */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Hackathons</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <a href={cleanMela} target="_blank" rel="noopener noreferrer">
              <img src={cleanMela} alt="Ujjain Mahakumbh Hackathon" style={imgStyle} />
            </a>
            <p>Ujjain Mahakumbh Hackathon - Clean Mela (Idea Selected)</p>
          </li>
          <li style={itemStyle}>
            <a href={aosBuildathon} target="_blank" rel="noopener noreferrer">
              <img src={aosBuildathon} alt="AOS Global Buildathon" style={imgStyle} />
            </a>
            <p>AOS Global Buildathon - Top 25 Ideas</p>
          </li>
          <li style={itemStyle}>
            <a href={ideathon} target="_blank" rel="noopener noreferrer">
              <img src={ideathon} alt="Ideathon at Chandigarh University" style={imgStyle} />
            </a>
            <p>Ideathon at Chandigarh University - Semifinalist</p>
          </li>
          <li style={itemStyle}>
            <a href={flipkartGrid} target="_blank" rel="noopener noreferrer">
              <img src={flipkartGrid} alt="Flipkart Grid 6.0" style={imgStyle} />
            </a>
            <p>Flipkart Grid 6.0 - Resume Shortlisted</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achievement;
