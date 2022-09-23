import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import './style.css';

const AuthWrapper = () => {
    const [state, setState] = useState();

    return (
        <>
            <button onClick={() => setState(true)}>SignIn</button>
            <button onClick={() => setState(false)}>SignUp</button>
            {state ? <Login /> :
                <Register />}
        </>
    )
}

export default AuthWrapper
