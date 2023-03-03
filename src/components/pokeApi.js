import React from 'react'

export const PokeApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/pidgeotto.json')
   .then(response => console.log(response.json()))
}