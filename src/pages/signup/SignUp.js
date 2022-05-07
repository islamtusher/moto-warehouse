import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Button, Form } from 'react-bootstrap';
import {useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({name:"", email: "", password: ""})
    const [userError, setUserError] = useState({emailError: '', passwordError: '', generalError: '' })
   
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    // react firebase hooks
    const [signInWithGoogle, , , googleSigninError] = useSignInWithGoogle(auth)
    const [createUserWithEmailAndPassword, , , userCreateError] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});

    // redirect page
    useEffect(() => {
        if (user) {
            navigate('/')
            // navigate(from, { replace: true })
        }
    }, [user])

    // onChange input-valu ecess
    // name
    const getUserName = (e) => {
        const value = e.target.value
        setUserInfo({...userInfo, name:value})
    }
    // email and validation
    const getUserEmail = (e) => {
        const value = e.target.value
        if (/\S+@\S+\.\S+/.test(value)) {
            setUserInfo({ ...userInfo, email: value })
            setUserError({ ...userError, emailError: "" })
        }
        else {
            setUserError({...userError, emailError: "Invalid Email!"})
        }
    }
    // password and validation
    const getUserPassword = (e) => {
        const value = e.target.value
        if (!/(?=.*[!@#$%^&*])/.test(value)) {
            setUserError({ ...userError, passwordError: "Must contain al-least 1 Special character" })
            return
        }
        if (value.length < 6) {
            setUserError({ ...userError, passwordError: "Password should 6 Digit" })
            return
        }
        else {
            setUserInfo({...userInfo, password:value})
            setUserError({...userError, passwordError: ""})
        }
    }

    // signUp Form Handler
    const signInFormHandle = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    // login hooks error handling
    useEffect(() => {
        const hooksError = googleSigninError || userCreateError
        if (hooksError) {
            switch (hooksError?.code) {
                case "auth/invalid-email":
                    alert('Please enter a valid email')
                    break;
                case "auth/email-already-in-use":
                    alert('This Email Already in used')
                    break;
                default:
                    alert('Something Worng Please Chack!')
            }
        }
    }, [googleSigninError, userCreateError])

    return (
        <div id='signup' className=' user-form'>
            <Form onSubmit={signInFormHandle}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='text-light mb-0'>Name</Form.Label>
                    <Form.Control onChange={getUserName} className='input-fild' placeholder='Name' type="text" required  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light mb-0'>Email</Form.Label>
                    <Form.Control onChange={getUserEmail}  className='' placeholder='Email' type="email" required  />
                    <Form.Text className="text-muted">
                        {userError.emailError && <p className='error'>{userError.emailError}</p>}    
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light mb-0'>Password</Form.Label>
                    <Form.Control onChange={getUserPassword} type="password" placeholder='Password' required  autoComplete='false' />
                    <Form.Text className="text-muted">
                        {userError.passwordError && <p className='error'>{userError.passwordError}</p>}    
                    </Form.Text>
                </Form.Group>
                <div className='text-center mb-3'>
                    <Button className='submit-btn' type="submit"> Sign Up </Button>
                </div>
                
            </Form>
            <div className='d-flex justify-content-evenly align-items-center text-light'>
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
    );
};

export default SignUp;