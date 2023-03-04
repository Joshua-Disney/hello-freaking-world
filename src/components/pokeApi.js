import React, { useState, useEffect } from 'react'

export const PokeApi = () => {

    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pidgeotto')
       .then(response => response.json())
       .then(data => setPokeInfo(data))
    }, [])

   console.log(pokeInfo)

   return(
    <div>
        <p>This should display information about {pokeInfo.name}</p>
    </div>
   )
}