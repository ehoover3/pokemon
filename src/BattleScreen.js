// BattleScreen.js
import React, { useState } from "react";
import "./BattleScreen.css"; // Import CSS file

const BattleScreen = ({ playerPokemon, enemyPokemon, onEndBattle }) => {
  const [playerHP, setPlayerHP] = useState(100); // Example initial HP
  const [enemyHP, setEnemyHP] = useState(100); // Example initial HP

  const handleAttack = (damage) => {
    // Placeholder for attack logic
    setEnemyHP((prevHP) => prevHP - damage); // Reduce enemy HP by damage
    // Example: Implement logic for attacks
  };

  const handleEndTurn = () => {
    // Placeholder for enemy attack logic or turn handling
    // Example: Implement logic for enemy attacks
  };

  const handlePlayerAttack = (damage) => {
    handleAttack(damage); // Placeholder for attack logic
    handleEndTurn(); // Placeholder for handling enemy turn
  };

  const handleEndBattleClick = () => {
    onEndBattle(); // End battle callback
  };

  return (
    <div className='battle-screen'>
      <h2>Battle Screen</h2>
      <div className='battle-info'>
        <div className='pokemon'>
          <h3>Player's Pokemon: {playerPokemon.name}</h3>
          <img src={playerPokemon.image} alt={playerPokemon.name} />
          <p>HP: {playerHP}</p>
          <div className='attack-buttons'>
            <button onClick={() => handlePlayerAttack(10)}>Attack 1</button>
            <button onClick={() => handlePlayerAttack(15)}>Attack 2</button>
            <button onClick={() => handlePlayerAttack(20)}>Attack 3</button>
            <button onClick={() => handlePlayerAttack(25)}>Attack 4</button>
          </div>
        </div>
        <div className='pokemon'>
          <h3>Enemy's Pokemon: {enemyPokemon.name}</h3>
          <img src={enemyPokemon.image} alt={enemyPokemon.name} />
          <p>HP: {enemyHP}</p>
        </div>
      </div>
      <button onClick={handleEndBattleClick}>End Battle</button>
    </div>
  );
};

export default BattleScreen;
