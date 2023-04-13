import React, { useState } from 'react'
import '../App.css'

import { PokeNames } from './PokeNames'

export const PokeApi = () => {

    const [pokeName, setPokeName] = useState('')
    const [pokeInfo, setPokeInfo] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [pokeFlavorText, setPokeFlavorText] = useState('')

    const getPokemon = async (name) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const myJson = await result.json()   
        setPokeInfo(myJson)
        setPokeImg(myJson.sprites.front_default)
        console.log(PokeNames)
    }

    const getFlavorText = async (id) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeInfo.id}/`)
        const myJson = await result.json()
        setPokeFlavorText(myJson.flavor_text_entries[1].flavor_text)
        console.log('pokeFlavorText: ', pokeFlavorText)
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
            {pokeName ? <p>Some of {pokeName}'s moves are</p> : <></>}
            {pokeInfo.moves ? pokeInfo.moves.slice(0, 4).map((move) => <p key={move.move.name}>{move.move.name}</p>) : <p>....Loading</p>}
            {pokeImg ? <img id='pokeId' src={pokeImg} /> : <></>}
        </section>
        <section>
            {pokeInfo ? <button onClick={getFlavorText}>For more information about {pokeName} click here!</button> : <></>}
            {pokeFlavorText ? <p>{pokeFlavorText}</p> : <></>}
        </section>
    </div>
   )
}

// Spent half an hour searching through the pokeAPI docs to find consistent flavor_text link