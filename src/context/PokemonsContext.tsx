import * as React from "react";

type Action =
  | { type: "SET_SELECTED_POKEMON"; payload: Pokemon }
  | { type: "SET_POKEMONS"; payload: Array<Pokemon> };

type Dispatch = (action: Action) => void;

type State = {
  pokemons: Array<Pokemon>;
  selectedPokemon: Pokemon;
};

type PokemonsProviderProps = { children: React.ReactNode };

const PokemonsStateContext = React.createContext<State | undefined>(undefined);
const PokemonsDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function PokemonsReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_SELECTED_POKEMON": {
      return { ...state, selectedPokemon: action.payload };
    }
    case "SET_POKEMONS": {
      return { ...state, pokemons: action.payload };
    }
  }
}

function PokemonProvider({ children }: PokemonsProviderProps) {
  const [state, dispatch] = React.useReducer(PokemonsReducer, { pokemons: [], selectedPokemon: null });
  return (
    <PokemonsStateContext.Provider value={state}>
      <PokemonsDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonsDispatchContext.Provider>
    </PokemonsStateContext.Provider>
  );
}

function usePokemonState() {
  const context = React.useContext(PokemonsStateContext);
  if (context === undefined) {
    throw new Error("usePokemonState must be used within a PokemonProvider");
  }
  return context;
}

function usePokemonDispatch() {
  const context = React.useContext(PokemonsDispatchContext);
  if (context === undefined) {
    throw new Error("usePokemonDispatch must be used within a PokemonProvider");
  }
  return context;
}

export { PokemonProvider, usePokemonState, usePokemonDispatch };
