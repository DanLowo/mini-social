import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../assets/Auth.css'
import InputField from '../components/InputField'
import SocialAuth from '../components/SocialAuth'
import { login, resetState } from '../store/user'

const Login = () => {
    const dispatch = useDispatch()
    const { login: { success, error, msg } } = useSelector(state => state.user)
    const router = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if(success) {
            dispatch(resetState('login'))
            router.push("/")
        }
    }, [success, router, dispatch])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const details = {email, password}
        await dispatch(login(details))
        if(success) {
            router.push("/")
        }
        
    }

    return (
        <div id="register">
            <div className="auth-card">
                <header>{'</>DanLowo'}</header>
                <h4>Login</h4>
                <br />
                <form onSubmit={handleSubmit}>
                    <InputField type="email" placeholder="Email Address" setText={setEmail} required />
                    <InputField type="password" placeholder="Password" setText={setPassword} required />
                    {error && <p className="error">{msg}</p>}
                    <button type="submit" className="submit">Login</button>
                </form>
                <section className="loginWithSocial">
                    <sub className="continueWithSocial">or continue with these social media</sub>
                    <SocialAuth type="login" />
                    <sub>Dont have an account yet? <span style={{color: 'green'}} onClick={() => router.push("/register")}>Register</span> </sub>
                </section>
            </div>
        </div>
    )
}

export default Login
