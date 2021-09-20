import React from 'react'
import {useRef} from 'react';
import { LoginSection } from './loginStyle'


const Login = () => {
    const email = useRef();
    const password = useRef();

    const handleClick = (e) =>{
        e.preventDefault();
        console.log(email.current.value);
    }
    return (
        <LoginSection>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect and make friends through sports</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input 
                            requried 
                            type="email" 
                            placeholder="Email" 
                            className="loginInput" 
                            ref={email} 
                        />
                        <input 
                            required 
                            type="password" 
                            placeholder="Password" 
                            className="loginInput" 
                            ref={password}
                            minLength="6"
                        />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </form>
                </div>
            </div>
        </LoginSection>
    )
}

export default Login





