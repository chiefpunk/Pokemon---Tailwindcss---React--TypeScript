import React from 'react'
import PokemonItem from './PokemonItem'

interface Props {
    pokemons: Array<Pokemon>
}

const PokemonsList = ({ pokemons }: Props) => {
    return (
        <>
            {pokemons.map(pokemon => <PokemonItem pokemon={pokemon} />
            )}
        </>
    )
}

export default PokemonsList;