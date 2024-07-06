import React from "react";

const Grass = ({ onInteract }) => {
  const handleClick = () => {
    onInteract(); // Initiate battle
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "300px",
        top: "300px",
        width: "50px",
        height: "50px",
        backgroundColor: "green",
        cursor: "pointer",
      }}
      onClick={handleClick}
    />
  );
};

export default Grass;
