// NPC.js
import React from "react";

const NPC = ({ dialogue }) => {
  const handleClick = () => {
    alert(dialogue); // Display dialogue
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "200px", // Adjust position as needed
        top: "200px", // Adjust position as needed
        width: "50px",
        height: "50px",
        backgroundColor: "green", // Example styling for NPC
        cursor: "pointer",
      }}
      onClick={handleClick}
    />
  );
};

export default NPC;
