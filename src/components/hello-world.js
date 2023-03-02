import React from 'react'

export const HelloWorld = (props) => {
    return (
        <div>
        <h1>Hello World!</h1>
        <p>
            May I speak to you about our personal lord and savoir, {props.ultimateTruth}?
        </p>
        </div>
    )
}