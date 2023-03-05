import React, { useState, useEffect } from 'react'

export const PokeApi = () => {

    const [pokeInfo, setPokeInfo] = useState({})
    const [movesList, setMovesList] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pidgeotto')
       .then(response => setPokeInfo(response.data))
    }, [])

    // useEffect(() => {
    //     for (let i = 0; i < 4; i++) {
    //         setMovesList([...movesList, pokeInfo.moves[i].move.name])
    //     }
    // }, pokeInfo)

   console.log(pokeInfo)

   return(
    <div>
        <p>This should display information about {pokeInfo ? pokeInfo.name : 'a pokemon'}</p>
        {/* <p>{movesList[0]}</p>
        <p>{movesList[1]}</p>
        <p>{movesList[2]}</p>
        <p>{movesList[3]}</p> */}
    </div>
   )
}