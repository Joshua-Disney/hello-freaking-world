import React, { useState } from 'react'
import '../App.css'

import { PokeNames } from './PokeNames'

export const PokeApi = () => {

    const [pokeName, setPokeName] = useState('')
    const [pokeInfo, setPokeInfo] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [pokeFlavorText, setPokeFlavorText] = useState('')

    const getPokemon = async (name) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
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
        {pokeInfo.name ? <></> : <h1>Welcome to Poké Info</h1>}
        <form onSubmit={(e) => {
            e.preventDefault()
            setPokeFlavorText('')
            getPokemon(pokeName)}}>
            <input 
                type='text' 
                name='pokeName' 
                id='pokeName'
                placeholder='...type a Pokémon name' 
                value={pokeName} 
                onChange={(e) => setPokeName(e.target.value)} 
            />
        </form>
        <section>
            <h2>{pokeInfo.name ? pokeInfo.name : ''}</h2>
            {pokeInfo.name ? <p>Some moves {pokeInfo.name}s can learn are</p> : <></>}
            {pokeInfo.moves ? pokeInfo.moves.slice(0, 4).map((move) => <p key={move.move.name}>{move.move.name}</p>) : <></>}
            {pokeInfo.name ? <img id='pokeId' src={pokeImg} /> : <></>}
        </section>
        <section>
            {pokeInfo.name ? <button onClick={getFlavorText}>For more information about {pokeInfo.name} click here!</button> : <></>}
            {pokeInfo.name && pokeFlavorText ? <p>{pokeFlavorText}</p> : <></>}
        </section>
    </div>
   )
}
