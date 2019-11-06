import React from 'react'

const TextInput = ({onInputChange, contClass, label}) => {
    return (
        <div className={contClass}>
            <p>{label}</p>
            <input
                type='text'
                onChange={onInputChange}
             />
        </div>
    )
}

export default TextInput;