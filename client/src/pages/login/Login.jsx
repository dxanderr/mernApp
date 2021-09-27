import React from 'react'
import { useRef, useContext } from 'react';
import { LoginSection } from './loginStyle'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';


const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);


    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    console.log(user)
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
                        <button className="loginButton" type="submit" disabled={isFetching} >{isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Create a new account"}
                        </button>
                    </form>
                </div>
            </div>
        </LoginSection>
    )
}

export default Login



