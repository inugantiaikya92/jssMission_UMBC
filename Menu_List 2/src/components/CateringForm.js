import React from 'react'
import '../css/Dashboard.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';


function CateringForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homeNumber, setHomeNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfCatering, setDateOfCatering] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [CuisinePreference, setCuisinePreference] = useState('');
    const [otherCuisine, setOtherCuisine] = useState('');
    const [comments, setComments] = useState('');
    const [Name, setName] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [formValid, setFormValid] = useState(true);
    const [formValidPhone, setFormValidPhone] = useState(true);
    const [formValidEmail, setFormValidEmail] = useState(true);
    const [showModal,setShowModal] = useState(false);


    const handleHomeNumberChange = (e) => {
        const value = e.target.value;
        // Check if the entered value is a positive integer
        if (/^\d+$/.test(value) || value === '') {
            setHomeNumber(value);
            setFormValid(true); // Reset validation state if the input is valid
        } else {
            setFormValid(false); // Set validation state to false if the input is invalid
        }
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d+$/.test(value) || value === '') {
        setPhoneNumber(value);
        setFormValidPhone(value.length === 10);
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setFormValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    };

    const handleCuisineChange = (e) => {
        const value = e.target.value;
        setCuisinePreference(value);
        if (value !== "Other") {
            setOtherCuisine('');
        }
    };

    const handleOtherCuisineChange = (e) => {
        setOtherCuisine(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };


    const handleSubmit = async () => {

        if (!firstName || !lastName|| !phoneNumber || !email || !dateOfCatering || !agreement || !homeNumber || !fromTime || !endTime|| !CuisinePreference || !agreement || !Name) {
                setFormValid(false);
                return;
            }
        
        const formData = {
            firstName,
            lastName,
            phoneNumber,
            homeNumber,
            email,
            dateOfCatering,
            fromTime,
            endTime,
            CuisinePreference: CuisinePreference === "Other" ? otherCuisine : CuisinePreference,
            comments,
            Name
        };


        
         document.getElementById("submitBtn").disabled = true;
        // Handle form submission here

        try {
            // Make a POST request to your backend API endpoint
            const response = await fetch('https://jssnode.onrender.com/api/catering', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // If the request is successful, log the response
            if (response.ok) {
                const data = await response.json();
                setShowModal(true)
                //console.log('catering data saved successfully:', data);
                setFormValid(true);
                document.getElementById("submitBtn").disabled = false;
            } else {
                // If the request fails, log the error message
                const errorData = await response.json();
                //console.error('Error saving catering data:', errorData.error);
                document.getElementById("submitBtn").disabled = false;

            }
        } catch (error) {
            // If an error occurs during the fetch operation, log the error
            console.error('An error occurred while saving catering data:', error);
        }

        // console.log("catering form data is : ", formData);
    };
    const img1 = require("../Img/slider-2.jpg");

    const closeModal = () => {
        setShowModal(false);
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setHomeNumber('');
        setEmail('');
        setDateOfCatering('');
        setFromTime('');
        setEndTime('');
        setComments('');
        setName('');
        setCuisinePreference('');
        setOtherCuisine('');
        setAgreement(false);

    }

    return (
        <>
            <div className='container-fluid bg' style={{ color: 'white' }}>
                <div className='container'>
                    <div className='d-flex justify-content-center align-item-center'>
                        <div className='py-5 pb-5 text-center mt-5'>
                            <div className='mt-5'>
                                <h3 className='h styleHeading'>Catering Form</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid px-0'>
                <Carousel>
                    <Carousel.Item>
                        <img src={img1} className="d-block w-100" alt="First slide" style={{ maxHeight: '500px' }} />
                        <Carousel.Caption className='mb-5'>
                            <h5 className='sliderHeading mb-5'>Let's Create a Legacy for Future</h5>
                            <a href='' className='linkbtn my-4'>View More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img1} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
                        <Carousel.Caption className='mb-5'>
                            <h5 className='sliderHeading mb-5 '>Let's Create a Legacy for Future</h5>
                            <a href='' className='linkbtn my-4'>View More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img1} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
                        <Carousel.Caption className='mb-5'>
                            <h5 className='sliderHeading mb-5'>Let's Create a Legacy for Future</h5>
                            <a href='' className='linkbtn my-4'>View More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Add more Carousel.Items for additional slides */}
                </Carousel>
            </div>

            <div className='container-fluid px-0 ' style={{ color: 'black' }}>
                <div className='container'>
                    <div className='justify-content-center align-item-center'>
                        <div className='row mx-0 '>
                            <div className='col-lg-12'>
                                <div className='text-center'>
                                    <div className='justify-content-center align-item-center'>
                                        <div className='mt-5'>
                                            <div>
                                                <h2 className='styleHeadingForm' style={{ margin: '0' }}>Catering ordering request:</h2><hr class="separator separator--line" style={{ margin: '0' }} />
                                            </div>
                                            <div className='mx-auto' style={{ paddingTop: 40 }}>
                                                <p className='priPass'> Thank you for considering volunteering for catering services with JSS Spiritual Mission. Our mission is rooted in the visionary guidance of His Holiness Sri Shivarathri Rajendra Mahaswamiji, aiming to disseminate India's rich socio-cultural and spiritual heritage in the United States. Operating under 501(c)3 status since 1999, our goal is to instil timeless values transcending societal boundaries. By participating in our catering services, you contribute to our dedication to serving society, facilitating spiritual growth, and fostering cultural exchange. Your support enables us to continue providing nourishment, not just through food, but through the nurturing of community spirit. Through collaborative efforts, we strive to promote cultural education and elevate the experience of our events, festivals, and community gatherings.Join us in our culinary endeavors as we blend tradition with service, enriching the lives of those we serve and embodying the values of compassion and community. Your involvement ensures that our mission flourishes and reaches those who seek sustenance, both physical and spiritual.</p><br></br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 mt-5'>
                                <div className='pb-5 text-center'>
                                    <div className='justify-content-center align-item-center'>
                                        <div className=''>
                                            <div>
                                                <h4 className='styleHeadingForm' style={{ margin: '0' }}>JSS Spiritual Mission Catering Volunteer Form</h4>
                                            </div>
                                            <hr class="separator separator--line" style={{ margin: '0' }} />
                                            <div className='container' style={{ paddingTop: 40 }}>
                                                <div className='row'>
                                                    <div className="col-lg-6  mx-auto ">
                                                        <div className="text-left">
                                                            <p className='PersonalPass' style={{ margin: '0' }}>Personal Details</p><hr className='Personal Personal--line' style={{ margin: '0' }} />

                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="First Name" className="form-label">First Name<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='text' id='firstName' value={firstName} placeholder='Enter your First Name' className={`form-control ${(!firstName && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setFirstName(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                            <div className="text-center">
                                                                <div className='text-left mt-3'>
                                                                    <label htmlFor="Last Name" className="form-label">Last Name<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='text' id='lastName' value={lastName} placeholder='Enter your Last Name' className={`form-control ${(!lastName && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setLastName(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                            <div className="text-center">
                                                                <div className='text-left mt-3'>
                                                                    <label htmlFor="phoneNumber" className="form-label">Phone Number<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input
                                                                    type='text'
                                                                    id='phoneNumber'
                                                                    value={phoneNumber}
                                                                    placeholder='Enter your Phone number'
                                                                    className={`form-control ${(!phoneNumber && !formValid) && 'border-bottom border-danger'}`}
                                                                    onChange={handlePhoneNumberChange}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                />
                                                                {!formValidPhone && <div className="text-danger">Phone number must be 10 digits</div>}
                                                            </div>
                                                            <div className="text-center">
                                                                <div className='text-left mt-3'>
                                                                    <label htmlFor="Home number" className="form-label">Home Number<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input
                                                                    type='text'
                                                                    id='homeNumber'
                                                                    value={homeNumber}
                                                                    placeholder='Enter your Home number'
                                                                    className={`form-control ${(!homeNumber && !formValid) && 'border-bottom border-danger'}`}
                                                                    onChange={handleHomeNumberChange}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                />
                                                                {(!homeNumber && !formValid) && (
                                                                    <div className='text-danger'>Home number must be 10 digits</div>
                                                                )}
                                                            </div>
                                                            <div className="text-center">
                                                                <div className='text-left mt-3 '>
                                                                    <label htmlFor="email" className="form-label">Email<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input
                                                                    type='email'
                                                                    id='email'
                                                                    value={email}
                                                                    placeholder='Enter your email'
                                                                    className={`form-control mb-2 ${(!email && !formValid) && 'border-bottom border-danger'}`}
                                                                    onChange={handleEmailChange}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                />
                                                                {!formValidEmail && <div className="text-danger">Please enter a valid email address</div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6  mx-auto ">
                                                        <div className="text-left">
                                                            <p className='PersonalPass' style={{ margin: '0' }}>Catering Details</p><hr className='Personal Personal--line' style={{ margin: '0' }} />
                                                            <div className="text-center mt-3">
                                                                <div className="text-center">
                                                                    <div className='text-left'>
                                                                        <label htmlFor="dateOfCatering" className="form-label">Date of Catering:<span className='text-danger'>*</span></label>
                                                                        <input type='date' id='dateOfCatering' value={dateOfCatering} className={`form-control ${(!dateOfCatering && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setDateOfCatering(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='text-left mt-3'>
                                                                <div className='text-left'>
                                                                    <div>
                                                                        <label htmlFor="AvailableTimeSlots" className="form-label">Available Time Slots<span className='text-danger'>*</span></label>
                                                                    </div>
                                                                    <label htmlFor="FromTime" className="form-label ml-3">From Time</label>
                                                                    <input type='time' id="FromTime" name="FromTime" value={fromTime} onChange={(e) => setFromTime(e.target.value)} className={`form-control ml-3 ${(!fromTime && !formValid) && 'border-bottom border-danger'}`} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} />
                                                                    <label htmlFor="EndTime" className="form-label ml-3 mt-2">End Date</label>
                                                                    <input type='time' id="EndTime" value={endTime} name="EndTime" onChange={(e) => setEndTime(e.target.value)} className={`form-control ml-3 ${(!endTime && !formValid) && 'border-bottom border-danger'}`} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} />
                                                                </div>
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="CuisinePreference" className="form-label">Cuisine Preference<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <select
                                                                    className={`form-control mb-2 ${(!CuisinePreference && !formValid) && 'border-bottom border-danger'}`}
                                                                    aria-label="CuisinePreference"
                                                                    value={CuisinePreference}
                                                                    onChange={handleCuisineChange}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                >
                                                                    <option value="">Select Cuisine Preference</option>
                                                                    <option value="South Indian">South Indian</option>
                                                                    <option value="North Indian">North Indian</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                                {/* Render text input for other cuisine only if "Other" is selected */}
                                                                {CuisinePreference === "Other" && (
                                                                    <input
                                                                        type="text"
                                                                        className="form-control mb-2"
                                                                        value={otherCuisine}
                                                                        placeholder="Enter other cuisine"
                                                                        onChange={handleOtherCuisineChange}
                                                                        style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className='mt-5 comments comments--line' />
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="comments" className="form-label">Comments</label>
                                                                </div>
                                                                <textarea
                                                                    id='comments'
                                                                    value={comments}
                                                                    placeholder='Enter your comments here'
                                                                    className="form-control"
                                                                    onChange={handleCommentsChange}
                                                                    style={{ border: '1px solid gray', borderRadius: '5px', minHeight: '100px', padding: '5px' }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <div className="text-center mt-5">
                                                                <div className='text-left'>
                                                                    <label htmlFor="Name" className="form-label">Enter your Name<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='text' id='firstName' value={Name} placeholder='Enter your Name' className={`form-control ${(!Name && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setName(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className='mt-5 comments comments--line' />
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className="col-lg-12 mt-3 mx-auto">
                                                                <div className="text-center">
                                                                    <div className='text-left'>
                                                                        <label htmlFor="agreement" className="form-label">As a volunteer, I am willing to dedicate my time and skills to assist with catering services for JSS Spiritual Mission. I understand that my availability and preferences will be considered when assigning catering tasks. I understand that I may be required to adhere to food safety guidelines and regulations during catering activities. I agree to the terms and conditions stated above.</label>
                                                                        <div className="form-check">
                                                                            <input type="checkbox" className="form-check-input" id="agreement" checked={agreement} onChange={(e) => setAgreement(e.target.checked)} />
                                                                            <label className="form-check-label" htmlFor="agreement">I agree<span className='text-danger'>*</span></label>
                                                                        </div>
                                                                        {!agreement && !formValid && (
                                                                            <div className='text-danger'>*Please agree to the terms and conditions</div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-12 mt-2'>
                                                            <div className="text-center">
                                                                <div className='text-left'>
                                                                    <label htmlFor="state" className="form-label"></label>
                                                                </div>
                                                                <button id='submitBtn' onClick={handleSubmit} className="bg-blue-950 w-28 p-2 text-white rounded-md">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bgFooter' style={{ color: 'white' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='pb-5 text-center imgbox'>
                            <div className='row my-4'>
                                <div className='col-lg-9'>
                                    <div className='mt-5'>
                                        <h2 className='styleHeadingfooter text-left'>BROWSE</h2>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <div className='text-left'>
                                                <div><h6>Home</h6></div><br />
                                                <div><h6>Services</h6></div>
                                                <div><p>Spiritual</p></div>
                                                <div><h6>Pooja Service at Temple Pooja Service at Your Place</h6></div>
                                                <div><p>Community</p></div>
                                                <div><h6>Food Donation Drive Prasada Services Cleanliness Drive Spring/Fall Gardening Organic Farming</h6></div>
                                                <div><p>Cultural</p></div>
                                                <div><h6>Sunday School Bharatanatyam for Children Classical and Folk Dances Indian Languages Sanskrit & Bhajan Recitals Art Classes Weekend Yoga</h6></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='text-left'>
                                                <div><h6>Temple</h6></div>
                                                <div><h6>Deities</h6></div>
                                                <div><h6>Priests</h6></div>
                                                <div><h6>New Temple</h6></div><br />
                                                <div><h6>Events</h6></div>
                                                <div><h6>Events Calender</h6></div><br />
                                                <div><h6>About</h6></div>
                                                <div><h6>About JSS</h6></div>
                                                <div><h6>HH Sawamji</h6></div>
                                                <div><h6>Sri Suttur Math</h6></div>
                                                <div><h6>JSS Group of Instiutions</h6></div>
                                                <div><h6>JSS Spiritual Mission</h6></div>
                                                <div><h6>JSS Medical Service Trust</h6></div>
                                                <div><h6>Advisory Board</h6></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='text-left'>
                                                <div><h6>Temple</h6></div>
                                                <div><h6>Deities</h6></div>
                                                <div><h6>Priests</h6></div>
                                                <div><h6>New Temple</h6></div><br />
                                                <div><h6>Events</h6></div>
                                                <div><h6>Events Calender</h6></div><br />
                                                <div><h6>About</h6></div>
                                                <div><h6>About JSS</h6></div>
                                                <div><h6>HH Sawamji</h6></div>
                                                <div><h6>Sri Suttur Math</h6></div>
                                                <div><h6>JSS Group of Instiutions</h6></div>
                                                <div><h6>JSS Spiritual Mission</h6></div>
                                                <div><h6>JSS Medical Service Trust</h6></div>
                                                <div><h6>Advisory Board</h6></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='mt-5'>
                                        <h2 className='styleHeadingfooter text-left'>STAY CONNECTED</h2>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className='text-left'>
                                            <div><h5>Connect On</h5></div>
                                        </div>
                                        <div className='text-left'>
                                            <div className='p-2'>
                                                <FontAwesomeIcon icon={faFacebookSquare} className="mr-2" style={{ fontSize: '24px' }} />
                                                <FontAwesomeIcon icon={faYoutube} className="ml-4" style={{ fontSize: '24px' }} />
                                            </div>
                                        </div>
                                        <div className='text-left'>
                                            <div><h6>Subscribe to our Newsletter</h6></div><br />
                                        </div>
                                        <div className='text-left'>
                                            <label>First Name</label>
                                            <input type="text" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <label>Last Name</label>
                                            <input type="text" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <label>Cell Phone</label>
                                            <input type="text" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <label>Email Address</label>
                                            <input type="email" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <button type="button" className="btn border text-white">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal fade show " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close bg-white" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label className="form-label pripass">Thank you for offering your time and skills to assist with catering services for the JSS Spiritual Mission. Our team will review your availability and preferences and reach out to you shortly regarding volunteer opportunities.</label>

                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default CateringForm