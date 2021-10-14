import React, { useState } from 'react'
import '../assets/Auth.css'
import InputField from '../components/InputField'
import SocialAuth from '../components/SocialAuth'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id="register">
            <div className="auth-card">
                <header>{'</>DanLowo'}</header>
                <h4>Login</h4>
                <br />
                <form onSubmit={handleSubmit}>
                    <InputField type="email" placeholder="Email Address" setText={setEmail} /> {email}
                    <InputField type="password" placeholder="Password" setText={setPassword} /> {password}
                    <button type="submit" className="submit">Login</button>
                </form>
                <section className="loginWithSocial">
                    <sub className="continueWithSocial">or continue with these social media</sub>
                    <SocialAuth /><SocialAuth /><SocialAuth />
                    <sub>Dont have an account yet? <span style={{color: 'green'}}>Register</span> </sub>
                </section>
            </div>
        </div>
    )
}

export default Login
