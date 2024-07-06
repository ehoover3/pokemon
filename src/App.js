// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameWorld from "./GameWorld";
import BattleScreen from "./BattleScreen";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<GameWorld />} />
          <Route path='/battle' element={<BattleScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
