import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    });

    let name, value;
    
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]:value})
    }

    const sendData = async(e) => {
        e.preventDefault();

        const {name, email, phone, work, password, cpassword} = userData;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, phone, work, password, cpassword})
        });

        const data = await res.json();
        console.log("Data received from server is: \n", data);

        if (res.status === 422 || !data){
            window.alert("Registration not successful");
            console.log("Registration not successful");
        } else {
            window.alert("Registration Successful")
            console.log("Registration Successful")

            navigate('/login')
        }
    }

    return (
        <>
            <section className='signup'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Sign up</h2>
                            <form method='POST' className='register-form' id='register-form'>
                                
                                <div className='form-group'>
                                    <label htmlFor='name'>
                                        <i className='zmdi zmdi-account material-icons-name'></i>
                                    </label>
                                    <input
                                        type='text' name='name' id='name' autoComplete='off' 
                                        value={userData.name}
                                        onChange={handleInputs}
                                        placeholder="Your Name" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i className='zmdi zmdi-email material-icons-name'></i>
                                    </label>
                                    <input
                                        type='email' name='email' id='email' autoComplete='off' 
                                        value={userData.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='phone'>
                                        <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
                                    </label>
                                    <input
                                        type='number' name='phone' id='phone' autoComplete='off' 
                                        value={userData.phone}
                                        onChange={handleInputs}
                                        placeholder="Your Phone Number" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='work'>
                                        <i className='zmdi zmdi-slideshow material-icons-name'></i>
                                    </label>
                                    <input
                                        type='text' name='work' id='work' autoComplete='off' 
                                        value={userData.work}
                                        onChange={handleInputs}
                                        placeholder="Your Profession" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input
                                        type='password' name='password' id='password' autoComplete='off' 
                                        value={userData.password}
                                        onChange={handleInputs}
                                        placeholder="Your Password" 
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='cpassword'>
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input
                                        type='password' name='cpassword' id='cpassword' autoComplete='off' 
                                        value={userData.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Confirm Password" 
                                    />
                                </div>

                                <div className='form-group form-button'>
                                    <input type='submit' name='signup' id='signup' className='form-submit' value='Register' onClick={sendData} />
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