import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './Login.scss';
import { login } from '../../../actions/login';
import Notification from '../../Notification/Notification';
import { validateEmail, validatePassword } from '../../../utils';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const passError = handlePasswordValidation();
        const emailError = handleEmailValidation();

        if (passError && emailError) {
            return
        } else {
            dispatch(login({ email, password })); 
        } 
    };

    const handleEmailValidation = () => {
        const emailError = validateEmail(email);
        setError(error => ({ password: error.password, email: emailError}));

        return emailError;
    }

    const handlePasswordValidation = () => {
        const passwordError = validatePassword(password);
        setError(error => ({error: error.email, password: passwordError}));
  
        return passwordError;
    }


    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const errorsArr = Object.values(error);
   
    return(
        <div className="login-form">
          {
            (error.email || error.password) && (
                <Notification messages={errorsArr} type="error" />
            )
          }
            <form className="inner-form" onSubmit={onSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={onEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={onPasswordChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;