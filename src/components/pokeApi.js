import React, { useState, useEffect } from 'react'

export const PokeApi = () => {

    const [pokeName, setPokeName] = useState('')
    const [pokeInfo, setPokeInfo] = useState({})

    const getPokemon = async (name) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const myJson = await result.json()   
        setPokeInfo(myJson)
    }

   return(
    <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            getPokemon(pokeName)}}>
            <input 
                type='text' 
                name='pokeName' 
                id='pokeName'
                placeholder='...type a Pokemon name' 
                value={pokeName} 
                onChange={(e) => setPokeName(e.target.value)} 
            />
        </form>
        <section>
            <h2>This should display information about {pokeName ? pokeName : 'a pokemon'}</h2>
            {pokeInfo.moves ? pokeInfo.moves.slice(0, 4).map((move) => <p key={move.move.name}>{move.move.name}</p>) : <p>....Loading</p>}
        </section>
    </div>
   )
}
