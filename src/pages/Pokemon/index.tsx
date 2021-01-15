import React from 'react'
import PokemonsList from './PokemonsList'
import {data} from './data'
const PokemonPage = () => {
    const pokemons:Array<Pokemon> = data;
    return (
        <div className="min-w-screen min-h-screen bg-gray-400 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-400 text-white rounded-2xl shadow-xl w-full overflow-hidden max-w-screen-lg">
                <div className="md:flex w-full mx-auto">
                    <div className="hidden md:block w-1/2 bg-gray-200 py-10 px-10">
                        <PokemonsList pokemons={pokemons} />
                    </div>
                    <div className="w-full md:w-1/2 py-10 bg-gray-500 px-5 md:px-10">
                        <h1>This is PokemonProfile</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonPage;