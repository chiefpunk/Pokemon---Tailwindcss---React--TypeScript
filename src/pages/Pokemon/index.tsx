import React from "react";
import { gql, useQuery } from "@apollo/client";

import PokemonsList from "../../components/PokemonsList";
import PokemonProfile from "../../components/PokemonProfile";
import Pagination from "../../components/Pagination";
import {
  usePokemonDispatch,
} from "../../context/PokemonsContext";

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;

const PokemonPage = () => {
  const dispatch = usePokemonDispatch();
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      first: 100,
    },
  });

  React.useEffect(() => {
    dispatch({ type: "SET_POKEMONS", payload: data?.pokemons });
  }, [loading]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen max-w-full max-h-full p-20 bg-gray-400">
      <div className="grid w-full max-h-full grid-cols-2 text-white bg-gray-400 shadow-xl rounded-2xl">
        <div className="relative flex flex-col min-h-full col-span-1 bg-gray-200 md:col-span-1">
          <PokemonsList />
          <Pagination />
        </div>
        <div className="flex flex-col min-h-full col-span-1 bg-gray-500 md:col-span-1">
          <PokemonProfile />
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
