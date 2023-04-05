import React, { useState } from 'react'
import '../App.css'

export const PokeApi = () => {

    const [pokeName, setPokeName] = useState('')
    const [pokeInfo, setPokeInfo] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [pokeList, setPokeList] = useState([])
    const [pokeNames, setPokeNames] = useState([])

    const getPokemon = async (name) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const myJson = await result.json()   
        setPokeInfo(myJson)
        setPokeImg(myJson.sprites.front_default)
    }

    const getPokemonNames = async () => {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        const pokeJson = await result.json()
        setPokeInfo(pokeJson)
        console.log('pokeInfo: ', pokeInfo)
        setPokeList(pokeInfo.results)
        console.log('pokeList: ', pokeList)
        setPokeNames(pokeList.map((poke) => {
            return poke.name
        }))
        console.log('pokeNames: ', pokeNames)
    }

   return(
    <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            getPokemonNames()}}>
            {/* getPokemon(pokeName)}}> */}
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
    </div>
   )
}
