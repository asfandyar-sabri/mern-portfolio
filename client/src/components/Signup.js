import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <section className='signup'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Sign up</h2>
                            <form className='register-form' id='register-form'>
                                
                                <div className='form-group'>
                                    <label htmlFor='name'>
                                        <i className='zmdi zmdi-account material-icons-name'></i>
                                    </label>
                                    <input
                                        type='text' name='name' id='name' automComplete='off' placeholder="Your Name" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i className='zmdi zmdi-email material-icons-name'></i>
                                    </label>
                                    <input
                                        type='email' name='email' id='email' automComplete='off' placeholder="Your Email" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='phone'>
                                        <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
                                    </label>
                                    <input
                                        type='number' name='phone' id='phone' automComplete='off' placeholder="Your Phone Number" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='work'>
                                        <i className='zmdi zmdi-slideshow material-icons-name'></i>
                                    </label>
                                    <input
                                        type='text' name='work' id='work' automComplete='off' placeholder="Your Profession" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input
                                        type='password' name='password' id='password' automComplete='off' placeholder="Your Password" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='cpassword'>
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input
                                        type='cpassword' name='cpassword' id='cpassword' automComplete='off' placeholder="Confirm Password" 
                                    />
                                </div>

                                <div className='form-group form-button'>
                                    <input type='submit' name='signup' id='signup' className='form-submit' value='Register' />
                                </div>

                                
                            
                            </form>
                        </div>
                        <div className='signup-image'>
                            {/* <figure>
                                <img src = {''} alt='registration pic'  />
                            </figure> */}

                            <NavLink to='/login' className='signup-image-link'>I've already registered</NavLink>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;