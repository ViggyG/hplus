import React from 'react'
import './PatientSelector.css'

const PatientSelector = ({patient, onClickFunction}) => {
    return(
        <div 
            className='card'
            onClick={() => onClickFunction(patient)}
        >
            <p className='name'>{patient.first_name}, {patient.last_name}</p>
            <p>Age: {patient.age} Room: {patient.room}</p>
        </div>
    )
}

export default PatientSelector