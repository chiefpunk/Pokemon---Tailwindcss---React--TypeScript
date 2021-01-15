import React from "react";
import PokemonItem from "./PokemonItem";
import { usePokemonState } from "../context/PokemonsContext";

const PokemonsList = () => {
  const { pokemons } = usePokemonState();
  return (
    <div className="block h-full mx-10 mt-10 mb-16 overflow-auto custom-bar">
      {pokemons&&pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsList;
