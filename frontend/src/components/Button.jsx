import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className='h-12 w-36  text-white bg-amber-700 rounded-4xl'>{props.text}</button>
        </div>
    )
}

export default Button
