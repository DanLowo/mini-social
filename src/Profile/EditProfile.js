import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/Profile.css'
import { useHistory } from 'react-router-dom'
import InputField from '../components/InputField'
import { editProfile, resetState } from '../store/user'

const EditProfile = () => {
    const router = useHistory()
    const dispatch = useDispatch()
    const { user, editProfile: { loading, success } } = useSelector(state => state.user)

    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = { name, bio, phone, email, password, image }
        dispatch(editProfile(details))
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onload = content => {
            setImage(content.target.result)
        }
        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if(success) {
            dispatch(resetState('editProfile'))
            router.push('/')
        }
    }, [dispatch, success, router])

    return (
        <div id="edit-profile">
                <div className="edit-section">
                    <section>
                        <h4>Change Info</h4>
                        <sub>Changes will be reflected to every services</sub>
                    </section>
                    <div className="edit-profile-img">
                        <label htmlFor="file" className="file">
                            <span className="material-icons">camera</span>
                        </label>
                        <input id="file" onChange={handleFile} type="file" style={{display: 'none'}} />
                        <span className="text">Change Photo</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputField type="text" placeholder={user.name || "Name"} label="Name" setText={setName} />
                        <InputField type="text" placeholder={user.bio || "About yourself.."} label="Bio" setText={setBio} />
                        <InputField type="number" placeholder={user.phone || "Phone Number"} label="Phone" setText={setPhone} />
                        <InputField type="email" placeholder={user.email || "Email Address"} label="Email" setText={setEmail} />
                        <InputField type="password" placeholder="Password" label="Password" setText={setPassword} />
                        <button disabled={loading} type="submit" className="submit">Login</button>
                    </form>
                </div>
        </div>
    )
}

export default EditProfile
