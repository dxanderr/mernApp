import React from 'react'
import { RegisterSection } from './registerStyle'


const Register = () => {
    return (
        <RegisterSection>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect and make friends through sports</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="name" placeholder="Username" className="loginInput" />
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login into account</button>
                    </div>
                </div>
            </div>
        </RegisterSection>
    )
}

export default Register





