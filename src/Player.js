// Player.js
import React, { useState, useEffect } from "react";

const Player = ({ position, setPosition }) => {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "W":
        case "w":
          setDirection("up");
          break;
        case "ArrowDown":
        case "S":
        case "s":
          setDirection("down");
          break;
        case "ArrowLeft":
        case "A":
        case "a":
          setDirection("left");
          break;
        case "ArrowRight":
        case "D":
        case "d":
          setDirection("right");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (direction) {
      const newPosition = { ...position };
      switch (direction) {
        case "up":
          newPosition.y = Math.max(0, position.y - 1);
          break;
        case "down":
          newPosition.y = Math.min(9, position.y + 1); // Example limit (adjust as needed)
          break;
        case "left":
          newPosition.x = Math.max(0, position.x - 1);
          break;
        case "right":
          newPosition.x = Math.min(9, position.x + 1); // Example limit (adjust as needed)
          break;
        default:
          break;
      }
      setPosition(newPosition);
      setDirection(null);
    }
  }, [direction, position, setPosition]);

  return (
    <div
      style={{
        position: "absolute",
        left: position.x * 50, // Adjust based on grid/tile size
        top: position.y * 50, // Adjust based on grid/tile size
        width: "50px",
        height: "50px",
        backgroundColor: "blue", // Example styling for player character
      }}
    />
  );
};

export default Player;
