import React from 'react'



export default function Buttons({array, clickHandler}) {
    const styles= {
        textTransform: "capitalize"
    }
    const buttons = array.map(item=> <button key={item} onClick={clickHandler} style={styles}>{item} </button> )

    return (
        <div>
            {buttons}
        </div>
    )
}
