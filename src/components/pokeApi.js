import React, { useState, useEffect } from 'react'

export const PokeApi = () => {

    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(() => {
        const getPokemon = async () => {
            const result = await fetch('https://pokeapi.co/api/v2/pokemon/pidgeotto')
            const myJson = await result.json()   
            setPokeInfo(myJson)
        }
        
        getPokemon()
    }, [])

   return(
    <div>
        <p>This should display information about {pokeInfo.name ? pokeInfo.name : 'a pokemon'}</p>
        {pokeInfo.moves ? pokeInfo.moves.slice(0, 4).map((move) => <p key={move.move.name}>{move.move.name}</p>) : <p>....Loading</p>}
    </div>
   )
}
