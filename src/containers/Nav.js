import React from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import './Nav.css'

const Nav = ({onSignOut, user}) => {
    return (
        <ul className='nav'>
            <li><Logo /></li>
            <li id='uname'><p>{user.name}</p></li>
            <li className='fright'><Button text='Sign Out' onClickFunction={onSignOut}/></li>
        </ul>
    )
}

export default Nav;
