import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
import { clientId } from '../env';
import { login, register } from '../store/user';

const SocialAuth = ({ type }) => {

  const dispatch = useDispatch()

    const responseGoogle = async (response) => {
      try {
        const { profileObj: {email, name, imageUrl: image, googleId} } = response
        if(type==='login') {   
          const details = {email, googleId, type: 'google'}
          await dispatch(login(details))
        } else {
          const details = {email, name, googleId, type: 'google', image}
          await dispatch(register(details))
        }
      } catch (err) {
        
      }
    }

    return (
        <GoogleLogin
        clientId={process.env.clientId || clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={() => console.log('Google Auth Failed')}
        cookiePolicy={'single_host_origin'}
      />
    )
}

export default SocialAuth
