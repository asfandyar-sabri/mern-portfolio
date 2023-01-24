import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, 
                password
            })
        });

        const data = res.json();
        console.log("Response is: ", data)

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials")
        } else {
            window.alert("Login Successful!");
            navigate('/');
        }
    }

    return (
        <>
            <section className='sign-in'>
                <div className='container mt-5'>
                    <div className='signin-content'>
                        <div className='signin-image'>
                            {/* <figure>
                                <img src = {''} alt='signin pic'  />
                            </figure> */}

                            <NavLink to='/signup' className='signup-image-link'>Create an account</NavLink>

                        </div>
                        <div className='signin-form'>
                            <h2 className='form-title'>Sign in</h2>
                            <form method='POST' className='register-form' id='register-form'>
    
                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i className='zmdi zmdi-email material-icons-name'></i>
                                    </label>
                                    <input
                                        type='email' name='email' id='email' autoComplete='off' placeholder="Your Email"
                                        value={email} onChange={e => setEmail(e.target.value)} 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input
                                        type='password' name='password' id='password' autoComplete='off' placeholder="Your Password" 
                                        value={password} onChange={e => setPassword(e.target.value)} 


                                    />
                                </div>

                                <div className='form-group form-button'>
                                    <input type='submit' name='sigin' id='signin' className='form-submit' value='Log In'
                                    onClick={loginUser}
                                     />
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;