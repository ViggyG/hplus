import React, {Component} from 'react'
import RouteLink from '../components/RouteLink'
import PatientDetails from '../components/PatientDetails'
import './PatientScreen.css'

const patientOptions = [
    {text: 'Edit', route: 'edit'},
    {text: 'Appointments', route: 'setapp'},
    {text: 'Test Data', route: 'testdata'},
    {text: 'Perscriptions', route: 'persc'}
]


class PatientScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patient: this.props.patient,
            currentScreen: "details",
        }

        this.displayScreen = <PatientDetails patient={this.state.patient}/>

        this.currentOptions = patientOptions.map((option, i) => {
            return (
                <RouteLink 
                    key={i}
                    text={option.text} 
                    onClickFunction={this.onOptionClick} 
                    newRoute={option.route}
                />
            )
        })
    }

    onOptionClick = (option) => {
        switch(option){
            case 'details':
                this.setState({currentScreen: 'details'});
                break;
            case 'setapp':
                this.setState({currentScreen: 'setapp'});
                break;
            case 'testdata':
                this.setState({currentScreen: 'testdata'});
                break;
            case 'persc':
                this.setState({currentScreen: 'persc'});
                break;
            default: 
                this.setState({currentScreen: 'details'});
                break;
        }
    }

    render()
    {
        return (
            <div className='patient-cont'>
                <div className='patient-options'>
                    {this.currentOptions}
                </div>
                <div className='patient-details'>
                    {this.displayScreen}
                </div>
            </div>

            
        )
    }
}

export default PatientScreen;