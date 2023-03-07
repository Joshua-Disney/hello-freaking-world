import React, { useState, useEffect } from 'react'

export const PokeApi = () => {

    const [pokeInfo, setPokeInfo] = useState({})
    const [movesList, setMovesList] = useState([])

    const getPokemon = () => async () => {
        try {
            const result = await fetch(
                'https://pokeapi.co/api/v2/pokemon/pidgeotto'
            )
            console.log('result: ', result)
            const myJson = await result.json
            console.log('myJson: ', myJson)
        } catch(error) {
            console.log('Error: ', error)
        }
    }

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //     .then(response => response.json())
    //     .then(data => setPokeInfo(data))
    //     .then(setMovesList(() => {
    //         if(pokeInfo.name) {
    //             for (let i = 0; i < 4; i++) {
    //                 console.log('logging move: ', pokeInfo.moves[i].move.name) /*This is working!*/
    //                 setMovesList([...movesList, pokeInfo.moves[i].move.name]) /*Why ISN'T this working?!?!?!?!?!?!?!?*/
    //             }
    //         }
    //     }))
    //    .then(console.log('pokeInfo: ', pokeInfo))
    // }, [])

    // useEffect(() => {
    //     if(pokeInfo.name && movesList.length !== 4) {
    //         for (let i = 0; i < 4; i++) {
    //             console.log('logging move: ', pokeInfo.moves[i].move.name) /*This is working!*/
    //             setMovesList([...movesList, pokeInfo.moves[i].move.name]) /*Why ISN'T this working?!?!?!?!?!?!?!?*/
    //         }
    //     }
    // }, [pokeInfo])

    console.log('logging pokeInfo: ', pokeInfo)
    console.log('logging movesList: ', movesList)

   return(
    <div>
        <p>This should display information about {pokeInfo.name ? pokeInfo.name : 'a pokemon'}</p>
        {movesList[0] && <p>{movesList[0]}</p>}
        {movesList[1] && <p>{movesList[1]}</p>}
        {movesList[2] && <p>{movesList[2]}</p>}
        {movesList[3] && <p>{movesList[3]}</p>}
        <button onClick={getPokemon} >Get pidgeotto</button>
    </div>
   )
}
