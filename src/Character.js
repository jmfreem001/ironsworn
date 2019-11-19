import React from 'react'

export default function Character({character}) {
    const stats = Object.keys(character.stats)
    const statDisplay = stats.map(stat => <p key={stat}><em>{stat}</em>: {character.stats[stat]}</p>)

    const equipment = character.equipment.map(item => <li>{item}</li>)
    return (
        <div className="character">
            <h3>{character.name} <em>{character.role}</em></h3>

            {statDisplay}
            <h5>Equipment</h5>
            <ul>
                {equipment}
            </ul>
            <p>NEW CHAR DIV</p>
        </div>
    )
}
