import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // To highlight active link
  const [hovered, setHovered] = useState(null);

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "15px 30px",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    fontWeight: "600",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const activeStyle = {
    color: "#4CAF50",
  };

  const underlineStyle = (isHovered, isActive) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    backgroundColor: "#4CAF50",
    width: isHovered || isActive ? "100%" : "0%",
    transition: "width 0.3s ease",
    borderRadius: "2px",
  });

  return (
    <nav style={navStyle}>
      {["Home", "Projects", "Achievement", "Contact"].map((item) => {
        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={item}
            to={path}
            style={{
              ...linkStyle,
              ...(isActive ? activeStyle : {}),
              transform: hovered === item ? "scale(1.1)" : "scale(1)",
              boxShadow:
                hovered === item
                  ? "0 4px 12px rgba(76, 175, 80, 0.4)"
                  : "none",
            }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
          >
            {item}
            <span style={underlineStyle(hovered === item, isActive)} />
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
