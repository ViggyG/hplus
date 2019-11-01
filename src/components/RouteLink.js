import React from 'react'
import './RouteLink.css'

const RouteLink = ({text, onClickFunction, newRoute}) => {
    return (
            <p
                className='rl'
                onClick={ () => onClickFunction(newRoute)}
            >{text}</p>
    )
}

export default RouteLink;