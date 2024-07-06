import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonList.css"; // Import CSS file

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className='pokemon-list'>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
