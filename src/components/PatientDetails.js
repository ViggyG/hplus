import React from 'react'

const PatientDetails = ({patient}) => {
    const {first_name, last_name} = patient;
    return (
        <div>
            <p className='fullname'>{first_name}, {last_name}</p>
        </div>
    )
}

export default PatientDetails;