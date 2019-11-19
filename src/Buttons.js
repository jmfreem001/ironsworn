import React from 'react'

const captitalizeFirstLetter = (string) => {
    let stringArray = string.split('')
    stringArray[0].toUpperCase()
    return stringArray.join('').trim()
}

export default function Buttons({array, clickHandler}) {
    const buttons = array.map(item=> <button key={item} onClick={clickHandler}>{captitalizeFirstLetter(item)} </button> )

    return (
        <div>
            {buttons}
        </div>
    )
}
