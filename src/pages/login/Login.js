// import axios from 'axios';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useJwtToken from '../../customHooks/useJwtToken';
import auth from '../../firebaseConfig';


const Login = () => {
    // loged-In User
    const [user] = useAuthState(auth)

    // Custom Hook - get token
    const [token] = useJwtToken(user)

    // userInfo and user created error // form inputs
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const [userError, setUserError] = useState({ emailError: '', passwordError: '' })
    
    // user location
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    // react firebase hooks // Sign-In and Sign-UP 
    const [signInWithGoogle, , , googleSigninError] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, , ,emailSigninError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    
    // redirect page
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [user, token])

    // get email
    const getUserEmail= (e) => {
        const value = e.target.value
        setUserInfo({ ...userInfo, email: value })
    }
    // get password
    const getUserPassword = (e) => {
        const value = e.target.value
        setUserInfo({ ...userInfo, password: value })
    }

    // login with email and pass
    const emailAndPasswordLogin = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(userInfo?.email, userInfo?.password)
    }

    // Handling user login error
    useEffect(() => {
        const hooksError = googleSigninError || emailSigninError
        if (hooksError) {
            switch (hooksError?.code) {
                case "auth/invalid-email":
                    setUserError({ ...userError, emailError: 'Please Enter A Valid Email' })
                    console.log(hooksError?.code);
                    break;
                case "auth/user-not-found":
                    setUserError({ ...userError, emailError: 'This User is not existing' })
                    console.log(hooksError?.code);
                    break;
                case 'auth/wrong-password':
                    setUserError({ ...userError, passwordError: 'Enter A wrong Password!' })
                    break;
                default:
                    alert('Something Worng Please Chack!')
            }
        }
        else {
            setUserError({ ...userError, emailError: '', passwordError: ''  })
        }
    }, [googleSigninError, emailSigninError])

    return (
        <div className="login-page">
            <div id='login' className='user-form'>
                <Form onSubmit={emailAndPasswordLogin}>
                    {/* email input*/}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-dark mb-0'>Email</Form.Label>
                        <Form.Control onChange={getUserEmail} className='' name='email' placeholder='Email' type="email"  />
                        <Form.Text className="text-muted">
                            {userError.emailError && <p className='error'>{userError.emailError}</p>}
                        </Form.Text>
                    </Form.Group>
                    {/* Password input*/}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-dark mb-0'>Password</Form.Label>
                        <Form.Control onChange={getUserPassword}  type="password" name='password' placeholder='Password'  autoComplete='false' />
                        <Form.Text className="text-muted">
                            {userError.passwordError && <p className='error'>{userError.passwordError}</p>}
                        </Form.Text>
                    </Form.Group>
                        
                    <div className='text-center mb-3'>
                        <Button  className='submit-btn' type="submit"> Login </Button>
                    </div>
                    <p onClick={()=>sendPasswordResetEmail(userInfo.email)} className='pass-reset'>Forget Password?</p>
                </Form>
                
                <div className='d-flex justify-content-evenly align-items-center text-dark'>
                    <hr className='line' />
                    <p>Or</p>
                    <hr className=' line' />
                </div>
                <div className="text-center">
                    <Button onClick={()=>signInWithGoogle()} className='w-100' variant="primary" type="submit">
                        Google SignIn
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;