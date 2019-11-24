import React from 'react'
import './Choices.css'

export default function Choices({displayText, choicesArray}) {
    //Add as a Modal Box
    const clickHandler = (e) => {
        alert('TODO')
    }
    let options = null
    if (choicesArray){
        options = choicesArray
        .map(choice => <p className='option-choice'key={choice.choice} onClick={clickHandler}>{choice.choice}</p>)
    }
    return (
        <div className='main option'>
            <h3>{displayText}</h3>
            <textarea />
            {options}
        </div>
    )
}
