import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props){

    const pokemonList = props.caughtPokemon.map(e => {
        return <Pokemon saveName={props.saveName} releasePokemon={props.releasePokemon} pokemon={e} key={e.id} />
    })

    return(
        <div>
            <h1>POKEDEX</h1>
            {pokemonList}
        </div>
    )
}

export default Pokedex