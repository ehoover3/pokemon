import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetail.css"; // Import CSS file

function PokemonDetail() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [id]);

  if (!pokemonData) {
    return <div className='pokemon-detail'>Loading...</div>;
  }

  return (
    <div className='pokemon-detail'>
      <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Type: {pokemonData.types.map((type) => type.type.name).join(", ")}</p>
      <p>Abilities: {pokemonData.abilities.map((ability) => ability.ability.name).join(", ")}</p>
    </div>
  );
}

export default PokemonDetail;
