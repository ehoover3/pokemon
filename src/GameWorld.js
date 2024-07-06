// GameWorld.js
import React, { useState } from "react";
import Player from "./Player";
import NPC from "./NPC";
import Grass from "./Grass";
import BattleScreen from "./BattleScreen";

const GameWorld = () => {
  const [battleMode, setBattleMode] = useState(false);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [enemyPokemon, setEnemyPokemon] = useState({
    name: "Pikachu", // Example enemy Pokemon
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", // Example image
    // Add more properties as needed
  });

  const handleGrassInteraction = () => {
    setBattleMode(true); // Initiate battle
  };

  const handleEndBattle = () => {
    setBattleMode(false); // End battle
  };

  return (
    <div style={{ position: "relative", width: "500px", height: "600px", border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Game World Content */}
      <div style={{ position: "relative", width: "500px", height: "500px", border: "1px solid black", marginBottom: "20px" }}>
        {!battleMode ? (
          <>
            <Player position={playerPosition} setPosition={setPlayerPosition} />
            <NPC dialogue='Hello, traveler!' />
            <Grass onInteract={handleGrassInteraction} />
          </>
        ) : (
          <BattleScreen
            playerPokemon={{ name: "Charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" }} // Example player Pokemon
            enemyPokemon={enemyPokemon}
            onEndBattle={handleEndBattle}
          />
        )}
      </div>

      {/* HUD */}
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "10px", color: "white", borderRadius: "5px" }}>
        <p>
          Player Position: ({playerPosition.x}, {playerPosition.y})
        </p>
        {/* Example: Display player health */}
        <p>Player Health: 100/100</p>
        {/* Example: Display other game state information */}
      </div>
    </div>
  );
};

export default GameWorld;
