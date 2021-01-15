import React from "react";
import { usePokemonState } from "../context/PokemonsContext";
const PokemonProfile = () => {
  const { selectedPokemon } = usePokemonState();
  return (
    <>
      <div className="flex justify-between px-5 py-10 border-b-2 border-gray-800 border-solid">
        <h1 className="text-2xl font-bold text-white">
          {selectedPokemon?.name}
        </h1>
        <span className="text-2xl font-bold text-yellow-400">
          {selectedPokemon ? `#${selectedPokemon.number}` : ""}
        </span>
      </div>
      <div className="w-full h-full">
        <div className="mx-4 my-4 overflow-hidden bg-white rounded-lg shadow-lg">
          <img
            className="object-contain object-center w-full h-56"
            src={selectedPokemon?.image}
            alt="avatar"
          />

          <div className="flex items-center px-6 py-3 bg-gray-900">
            <svg
              className="w-6 h-6 text-yellow-400 fill-current"
              viewBox="0 0 512 512"
            >
              <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
            </svg>

            <h1 className="mx-3 text-lg font-semibold text-yellow-400">{selectedPokemon?.classification}</h1>
          </div>

          <div className="px-6 py-4 bg-gray-200">
            <h1 className="text-2xl font-semibold text-white">
              {selectedPokemon?.name}
            </h1>

            <div className="flex items-center mt-4 text-white">
              
              <h1 className="text-sm">{selectedPokemon && `Height : ${selectedPokemon.height.minimum} - ${selectedPokemon.height.maximum}`}</h1>
            </div>

            <div className="flex items-center mt-4 text-white">

            <h1 className="text-sm">{selectedPokemon && `Weight : ${selectedPokemon.weight.minimum} - ${selectedPokemon.weight.maximum}`}</h1>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonProfile;
