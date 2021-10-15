import React from 'react'
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import '../assets/Profile.css'

const Profile = () => {
    const { user } = useSelector(state => state.user)
    const router = useHistory()

    return (
        <div id="profile">
            <h1 className="header">Personal Info</h1>
            <sub>Basic info, like your name and photo</sub>

            <section>
            <div className="profile-section">
                <div className="edit-profile">
                    <section>
                        <h4>Profile</h4>
                        <sub>Some info may be visibile to other people</sub>
                    </section>
                    <button onClick={() => router.push('/edit-profile')}>Edit</button>
                </div>
                <hr/>
                <section className="profile-detail">
                    <h4>Photo:</h4>
                    <img src={user.image} alt={user.name + ' profile picture'} />
                </section>
                <section className="profile-detail">
                    <h4>Name:</h4>
                    <p>{user.name || ''}</p>
                </section>
                <section className="profile-detail">
                    <h4>Bio:</h4>
                    <p>{user.bio || ''}</p>
                </section>
                <section className="profile-detail">
                    <h4>Phone:</h4>
                    <p>{user.phone || ''}</p>
                </section>
                <section className="profile-detail">
                    <h4>Email:</h4>
                    <p>{user.email || ''}</p>
                </section>
                <section className="profile-detail" id="last">
                    <h4>Password:</h4>
                    <p>*************</p>
                </section>
            </div>
            </section>
        </div>
    )
}

export default Profile
