import React, {Component} from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import './Auth.css'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    onSubmit = (event) => {
        console.log(this.state.password, this.state.username)
        this.props.onRouteChange('main')
    }

    render() {
        return(
            <div id='auth-outer'>
                <div id='auth-inner'>
                    <Logo />
                    <p className='bold pd0 left'>Enter Username:</p>
                    <input
                        className='textInput' 
                        type='text' 
                        onChange={this.onUsernameChange}
                    />
                    <p className='bold pd0 left'>Enter Password:</p>
                    <input 
                        className='textInput'
                        type='password'
                        onChange={this.onPasswordChange}
                    />
                    <Button className='fleft' text='Log In' onClickFunction={this.onSubmit} />
                </div>
            </div>
        )
    }
}

export default Auth;
