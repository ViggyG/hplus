import React, {Component} from 'react'
import PatientSelector from '../components/PatientSelector'

class PatientList extends Component {
    constructor(props) {
        super(props)
        const {onClickFunction, patientList} = this.props;
        this.cardArray = patientList.map((patient, i) => {
            return (
                <PatientSelector 
                    key={i} 
                    patient={patient} 
                    onClickFunction={onClickFunction} 
                />
            )
        });
    }
    

    render() {
        return (
            <div id='patList'>
                {this.cardArray}
            </div>
        )
    }
}

export default PatientList;