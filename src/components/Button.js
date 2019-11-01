import React from 'react'
import './Button.css'

const Button = ({text, onClickFunction}) => {
    return(
        <div>
            <p
                onClick={onClickFunction}
                className='button'
            >{text}</p>
        </div>
    )
}

export default Button;