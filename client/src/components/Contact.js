import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='contact_info'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                            {/* phone number   */}
                            <div className='contact_info_item d-flex justify-contect-start align-items-center'>
                                {/* <img src='' alt='phone number here' /> */}
                                <div className='contact-info-content'>
									<div className='contact-info-title'>
										<b>Phone No:</b>
									</div>
									<div className='contact-info-text'>
										+92 317 7905163
									</div>
								</div>
                            </div>

							{/* email   */}
                            <div className='contact_info_item d-flex justify-contect-start align-items-center'>
                                {/* <img src='' alt='phone number here' /> */}
                                <div className='contact-info-content'>
									<div className='contact-info-title'>
										<b>Email:</b>
									</div>
									<div className='contact-info-text'>
										asfandyarsabri7@gmail.com
									</div>
								</div>
                            </div>

							{/* address   */}
                            <div className='contact_info_item d-flex justify-contect-start align-items-center'>
                                {/* <img src='' alt='phone number here' /> */}
                                <div className='contact-info-content'>
									<div className='contact-info-title'>
										<b>Address:</b>
									</div>
									<div className='contact-info-text'>
										Islamabad, Pakistan
									</div>
								</div>
                            </div>
                        </div>
                    </div>
				</div>

				{/* contact us form */}
				<div className='contact_form'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-10 offset-lg-1'>
								<div className='contact_form_container py-5'>
									<div className='contact-form-title'>
										Get in Touch!
									</div>
									<form id='contact_form'>
										<div className='contact_form_name d-flex justify-content-between align-items-between'>
											
											<input type='text' id='contact_form_name' 
												className='contact_form_name input_field' 
												placeholder='Your Name'
												required="true" />

											<input type='email' id='contact_form_email' 
												className='contact_form_email input_field' 
												placeholder='Your Email'
												required="true" />

											<input type='number' id='contact_form_phone' 
												className='contact_form_phone input_field' 
												placeholder='Your Phone Number'
												required="true" />
										</div>

										<div className='contact_form_text mt-5'>
											<textarea className='text_field contact_form_message'
											placeholder='Message' cols='30' rows='10' ></textarea>
										</div>

										<div className='contact_form_button'>
											<button type='submit' className='button contact_submit_button'>Send Message</button>
										</div>

									</form>
								</div>
							</div>
						</div>
					</div>
				</div>


            </div>

        </>
    )
}

export default Contact;