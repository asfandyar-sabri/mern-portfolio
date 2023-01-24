import React, { useEffect } from 'react';
import myPic from "../images/picture.jpg"
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    const callAboutPage = async () => {
        try {
            
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            console.log("Res is: ", res);

            const data = await res.json();
            console.log("Data received is: ", data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch(err){
            // console.log('Error in about ', err);
            // throw err;
            navigate('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className='container emp-profile'>
                <form method='GET'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile=img'>
                                <img src={myPic} alt='my pic here' width={300} height={300}/>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>Asfandyar Sabri</h5>
                                <h6>Full Stack Developer</h6>
                                <p className='profile-rating mt-3 mb-5'>
                                    RANKING: <span>1/10</span>
                                </p>

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href='#home' role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='com-md-2'>
                            <input type='submit' className='profile-edit-btn' name='btnAddmore' value="Edit Profile"></input>
                        </div>
                    </div>

                    <div className='row'>
                        {/* left side url */}
                        <div className='cold-md-4'>
                            <div className='profile-work'>
                                <p>WORK LINKS</p>
                                <a href='https://github.com/asfandyar-sabri' target='_blank' rel="noreferrer">GitHub</a> <br />
                                <a href='https://www.linkedin.com/in/asfandyar-sabri-5892721b6/' target='_blank' rel="noreferrer">LinkedIn</a> <br />

                            </div>
                        </div>
                        {/* right side data toggle */}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile=tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>User ID</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>090078601</p>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Name</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>Asfandyar Sabri</p>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Email</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>asfandyarsabri7@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Phone</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>+923177905163</p>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Profession</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>

                            
                                {/* <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> */}
                        

                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>Experience</label>
                                        </div>
                                        
                                        <div className='col-md-6'>
                                            <label>Inermediate</label>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Hourly Rate</label>
                                        </div>
                                        
                                        <div className='col-md-6'>
                                            <label>10$/hr</label>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Total Projects</label>
                                        </div>
                                        
                                        <div className='col-md-6'>
                                            <label>5</label>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>English Level</label>
                                        </div>
                                        
                                        <div className='col-md-6'>
                                            <label>Advance</label>
                                        </div>
                                    </div>

                                    
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Availability</label>
                                        </div>
                                        
                                        <div className='col-md-6'>
                                            <label>9 months</label>
                                        </div>
                                    </div>

                                </div>    
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default About;