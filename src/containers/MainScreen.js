import React, {Component} from 'react'
import OptionsList from './OptionsList'
import PatientList from './PatientList'
import PatientScreen from './PatientScreen'
import './MainScreen.css'

const optionsHome = [
    {text: 'Home', newRoute: 'home'},
    {text: 'My Patients', newRoute: 'mypat'},
    {text: 'Aquire Patients', newRoute: 'aqpat'},
    {text: "ADT", newRoute: 'adt'},
]

const testPatients = [
    {
        first_name: 'Loda',
        last_name: 'Yoten',
        age: '22',
        room: '3'
    },
    {
        first_name: 'Hellen',
        last_name: 'Olden',
        age: '34',
        room: '7'
    },
]

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'home',
            selectedPatient: {}
        }
    }

    onRouteChange = (newRoute) => {
        this.setState({
            route: newRoute
        });
    }

    onSelectPatient = (patient) => {
        this.setState({selectedPatient: patient})
        this.onRouteChange('selpat')
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
                <OptionsList 
                    routeFunction={this.onRouteChange} 
                    optionsList={this.currentOptions}
                    listClass='oListMain'
                    />
                    {
                    (this.state.route === 'selpat')
                    ? <PatientScreen patient={this.state.selectedPatient} />
                    : <PatientList 
                        patientList={testPatients} 
                        onClickFunction={this.onSelectPatient}
                    />
                    }
            </div>
        )
    }   
}

export default MainScreen;
