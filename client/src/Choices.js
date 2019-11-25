import React from 'react'
import './Choices.css'

export default function Choices({displayText, choicesArray, clickHandler}) {
    //Add as a Modal Box

    let options = null
    if (choicesArray){
        options = choicesArray
        .map(choice => <p className='option-choice' data-id={choice.id} key={choice.id} onClick={clickHandler}>{choice.description || 'Confirm description and roll.'}</p>)
    }
    return (
        <div className='main option'>
            <h3>{displayText}</h3>
            <textarea />
            {options}
        </div>
    )
}
