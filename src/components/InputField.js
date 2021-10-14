import React from 'react'

const InputField = ({ type, placeholder, setText }) => {

    const handleChange = (e) => {
        setText(e)
    }

    return (
        <input type={type} placeholder={placeholder} required onChange={(e) => handleChange(e.target.value)}  />
    )
}

export default InputField
