import React from 'react'

const InputField = ({ type, placeholder, setText, label, required }) => {

    const handleChange = (e) => {
        setText(e)
    }

    return (
        <div>
            {label && <label>{label}:</label>}
            <input type={type} placeholder={placeholder} required={required} onChange={(e) => handleChange(e.target.value)}  />
        </div>
    )
}

export default InputField
