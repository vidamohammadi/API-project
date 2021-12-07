import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <input className="input" value={props.value} type={props.type}/>
    )
}

export default Input