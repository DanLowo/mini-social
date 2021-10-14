import React, { useState } from 'react'
import '../assets/Auth.css'
import InputField from '../components/InputField'
import SocialAuth from '../components/SocialAuth'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id="register">
            <div className="auth-card">
                <header>{'</>DanLowo'}</header>
                <h4>Join thousands of leaners from <br/> around the world</h4>
                <p className="sub">Master web development by making real-life projects. There are many paths for you to choose</p>

                <form onSubmit={handleSubmit}>
                    <InputField type="email" placeholder="Email Address" setText={setEmail} /> {email}
                    <InputField type="password" placeholder="Password" setText={setPassword} /> {password}
                    <button type="submit" className="submit">Start coding now</button>
                </form>
                <section className="loginWithSocial">
                    <sub className="continueWithSocial">or continue with these social media</sub>
                    <SocialAuth /><SocialAuth /><SocialAuth />
                    <sub>Already a member? <span style={{color: 'green'}}>Login</span> </sub>
                </section>
            </div>
        </div>
    )
}

export default Register
