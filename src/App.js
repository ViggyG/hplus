import React, {Component} from 'react';
import Nav from './containers/Nav'
import MainScreen from './containers/MainScreen'
import Auth from './containers/Auth'
import './App.css';

const testuser = {
  userid: 1,
  name: 'Gaelin Vigelius'
}

const initialState = {
  route: 'sign',
  isSignedIn: false,
  user: testuser
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  onRouteChange = (newRoute) => {
    this.setState({route: newRoute})
  }

  onSignOut = () => {
        this.onRouteChange('sign')
  }

  render() {
    const {user} = this.state;
    switch(this.state.route){
      case 'sign':
        return(
          <div className='app-signin'>
            <Auth onRouteChange={this.onRouteChange}/>
          </div>
        )
      case 'main':
        return (
          <div className='app'>
            <Nav user={user} onSignOut={this.onSignOut}/>
            <MainScreen user={user}/>
          </div>
        )
      default:
        return <h1>Whoopsies</h1>
    }
  }
}

export default App;
