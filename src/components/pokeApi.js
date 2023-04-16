import React, { useState } from 'react'
import '../App.css'

import { PokeNames } from './PokeNames'

export const PokeApi = () => {

    const [pokeName, setPokeName] = useState('')
    const [pokeInfo, setPokeInfo] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [pokeMoves, setPokeMoves] = useState([])
    const [pokeFlavorText, setPokeFlavorText] = useState('')

    const getFour = (arr) => {
        console.log('arr: ', arr)
        const four = []
        while (four.length < 4) {
            const ind = Math.floor(Math.random() * arr.length)
            if (four.includes(ind) === false) {
                four.push(ind)
            }
        }
        return four
    }

    const getPokemon = async (name) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        const myJson = await result.json()   
        setPokeInfo(myJson)
        setPokeImg(myJson.sprites.front_default)
        const four = getFour(myJson.moves)
        console.log('four: ', four)
        setPokeMoves(four.map(num => myJson.moves[num].move.name))
        console.log('pokeMoves: ', pokeMoves)
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
            {pokeInfo.moves ? pokeMoves.map((move) => <p key={move}>{move}</p>) : <></>}
            {pokeInfo.name ? <img id='pokeId' src={pokeImg} /> : <></>}
        </section>
        <section>
            {pokeInfo.name ? <button onClick={getFlavorText}>For more information about {pokeInfo.name} click here!</button> : <></>}
            {pokeInfo.name && pokeFlavorText ? <p>{pokeFlavorText}</p> : <></>}
        </section>
    </div>
   )
}
