import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../assets/Auth.css'
import InputField from '../components/InputField'
import SocialAuth from '../components/SocialAuth'
import { register, resetState } from '../store/user'

const Register = () => {
    const dispatch = useDispatch()
    const { register: { success, error, msg } } = useSelector(state => state.user)

    const router = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if(success) {
            dispatch(resetState('register'))
            router.push("/")
        }
    }, [success, router, dispatch])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const details = {email, password}
        await dispatch(register(details))
        if(success) {
            router.push("/")
        }
        
    }

    return (
        <div id="register">
            <div className="auth-card">
                <header>{'</>DanLowo'}</header>
                <h4>Join thousands of leaners from <br/> around the world</h4>
                <p className="sub">Master web development by making real-life projects. There are many paths for you to choose</p>

                <form onSubmit={handleSubmit}>
                    <InputField type="email" placeholder="Email Address" setText={setEmail} required />
                    <InputField type="password" placeholder="Password" setText={setPassword} required />
                    {error && <p className="error">{msg}</p>}
                    <button type="submit" className="submit">Start coding now</button>
                </form>
                <section className="loginWithSocial">
                    <sub className="continueWithSocial">or continue with these social media</sub>
                    <SocialAuth type="register" />
                    <sub>Already a member? <span style={{color: 'green'}} onClick={() => router.push("/login")}>Login</span> </sub>
                </section>
            </div>
        </div>
    )
}

export default Register
