import React from 'react'

export const PokeApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/pidgeotto')
   .then(response => response.json())
   .then(data => console.log(data))
}