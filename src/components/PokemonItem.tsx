import React from "react";
import { usePokemonDispatch } from "../context/PokemonsContext";

interface Props {
  pokemon: Pokemon;
}
const PokemonItem = ({ pokemon }: Props) => {
  const dispatch = usePokemonDispatch();
  const setSelectedPokemon = (pokemon: Pokemon) => {
    console.log(pokemon)
    dispatch({
      type: "SET_SELECTED_POKEMON",
      payload: pokemon,
    });
  };
  return (
    <div
      className="flex items-center justify-between px-6 py-4 my-4 bg-gray-300 border border-gray-300 rounded-lg shadow-md cursor-pointer"
      onClick={() => setSelectedPokemon(pokemon)}
    >
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full"
          src={pokemon.image}
          alt="Logo"
        />
        <div className="ml-7">
          <div className="text-lg font-bold text-yellow-400">
            {pokemon.number}
          </div>
        </div>
        <div className="ml-3">
          <div className="text-lg font-bold text-white">{pokemon.name}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
