import React, {Component} from 'react'
import OptionsList from './OptionsList'

const optionsHome = [
    {text: 'Home', newRoute: 'home'},
    {text: 'My Patients', newRoute: 'mypat'},
    {text: 'Aquire Patients', newRoute: 'aqpat'}
]

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'home'
        }
    }

    onRouteChange = (newRoute) => {
        this.setState({
            route: newRoute
        });
    }

    render() {
        switch(this.state.route) {
            case 'home':
                this.currentOptions = optionsHome;
                break;
            default:
                this.currentOptions = optionsHome;
                break;
        }

        return (
            <div>
                <OptionsList routeFunction={this.onRouteChange} optionsList={this.currentOptions}/>
            </div>
        )
    }   
}

export default MainScreen;
