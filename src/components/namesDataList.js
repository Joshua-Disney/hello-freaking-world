import React from 'react'
import { PokeNames } from './PokeNames'

export const NamesDataList = () => {

    return (
        <datalist id='pokeNames'>
            {PokeNames.map((name) => <option key={name} value={name} />)}
        </datalist>
    )
}