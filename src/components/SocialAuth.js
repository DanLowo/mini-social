import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
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
        clientId="542238092713-e1sgj23i345t255a71j0ps5je4rn58fl.apps.googleusercontent.com"
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        // )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={() => console.log('Google Auth Failed')}
        cookiePolicy={'single_host_origin'}
      />
    )
}

export default SocialAuth
