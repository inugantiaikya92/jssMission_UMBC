import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './css/Dashboard.css'
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



function Dashboard() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homeNumber, setHomeNumber] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [placeOfPooja, setPlaceOfPooja] = useState('');
    const [dateOfService, setDateOfService] = useState('');
    const [time, setTime] = useState('');
    const [typeOfPooja, setTypeOfPooja] = useState('');
    const [otherPoojaName, setOtherPoojaName] = useState('');
    const [comments, setComments] = useState('');
    const [Name, setName] = useState('');
    const [formValid, setFormValid] = useState(true);
    const [formValidPhone, setFormValidPhone] = useState(true);
    const [formValidEmail, setFormValidEmail] = useState(true);
    const [formValidDate, setFormValidDate] = useState(true);
    const [formValidTime, setFormValidTime] = useState(true);
    const [newLocation, setNewLocation] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [sameAsHomeAddress, setsameAsHomeAddress] = useState('');
    const [priestRequest, setPriestRequest] = useState('');
    const [zipformValid, setzipFormValid] = useState(true);

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

    const handleZipcodeChange = (e) =>{
        const enteredValue = e.target.value;

        // Check if the entered value is numeric
        if (/^\d+$/.test(enteredValue) || enteredValue === "") {
            setZipcode(enteredValue);
            setzipFormValid(true); // Reset form validation
        } else {
            setzipFormValid(false); // Set form validation to false if non-numeric value entered
        }
    }

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDateOfService(value);
        const currentDate = new Date();
        const selectedDate = new Date(value);
        setFormValidDate(selectedDate >= currentDate);
    };

    const handleTimeChange = (e) => {
        const value = e.target.value;
        setTime(value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };


    console.log("Form data:", {

    });


    // Function to handle form submission
    const handleSubmit = async () => {

        // Check if all required fields are filled
        if (!typeOfPooja || !dateOfService || !time || !placeOfPooja || !email || !street || !zipcode || !phoneNumber || !homeNumber || !lastName || !firstName || !city || !state) {
            setFormValid(false); // Set form validity state to false
            return; // Exit the function early if form is invalid
        }
        document.getElementById("submitBtn").disabled = true;
        // Initialize an empty object to store the formData
        const formData = {
            firstName,
            lastName,
            phoneNumber,
            homeNumber,
            email,
            street,
            city,
            state,
            zipcode,
            placeOfPooja,
            sameAsHomeAddress,
            newLocation,
            priestRequest,
            dateOfService,
            time,
            typeOfPooja: typeOfPooja === "Other" ? otherPoojaName : typeOfPooja,
            comments,
            Name
        };

        try {
            // Make a POST request to the backend API endpoint
            const response = await fetch('https://jssnode.onrender.com/api/pooja', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if the request is successful
            if (response.ok) {
                // Parse the response data
                const data = await response.json();
                localStorage.setItem("formData", JSON.stringify(formData));
                localStorage.setItem("status", "true");
                setShowModal(true);
                document.getElementById("submitBtn").disabled = false;
                // Log a success message with the saved data
                console.log('Pooja data saved successfully:', data);
                // Set form validity state to true
                setFormValid(true);
            } else {
                // If the request fails, parse and log the error message
                document.getElementById("submitBtn").disabled = false;
                const errorData = await response.json();
                console.error('Error saving Pooja data:', errorData.error);
            }
        } catch (error) {
            // If an error occurs during the fetch operation, log the error
            console.error('An error occurred while saving Pooja data:', error);
        }

        // Print formData to console (for debugging purposes)
        console.log(formData);
    };

    const img1 = require("./Img/slider-1.avif");

    const closeModal = () => {
        setShowModal(false);
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setHomeNumber('');
        setEmail('');
        setStreet('');
        setCity('');
        setState('');
        setZipcode('');
        setComments('');
        setName('');
        setPlaceOfPooja('');
        setDateOfService('');
        setTime('');
        setTypeOfPooja('');
        setOtherPoojaName('');

    }



    return (
        <>
            <div className='container-fluid bg' style={{ color: 'white' }}>
                <div className='container'>
                    <div className='d-flex justify-content-center align-item-center'>
                        <div className='py-5 pb-5 text-center mt-5'>
                            <div className='mt-5'>
                                <h3 className='h styleHeadingabt'>ABOUT US</h3>
                            </div>

                            <div className='mt-5 '>
                                <p className='headingSet h'>MESSAGE OF THE DAY</p>
                            </div>
                            <div className='mt-3'>
                                <p className='paraContent'> “I am in the Light. I am the Light. The Light is in Me.<br></br>
                                    The Light is Myself.”</p>
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
                            <h5 className='sliderHeading mb-5'>Let's Create a Legancy for Future</h5>
                            <a href='' className='linkbtn my-4'>View More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img1} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
                        <Carousel.Caption className='mb-5'>
                            <h5 className='sliderHeading mb-5 '>Let's Create a Legancy for Future</h5>
                            <a href='' className='linkbtn my-4'>View More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img1} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
                        <Carousel.Caption className='mb-5'>
                            <h5 className='sliderHeading mb-5'>Let's Create a Legancy for Future</h5>
                            <a href='' className='linkbtn my-4'>View More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Add more Carousel.Items for additional slides */}
                </Carousel>
            </div>
            <div className='container-fluid px-0 ' style={{ color: 'black' }}>
                <div className='container'>
                    <div className='justify-content-center align-item-center'>
                        <div className='row mx-0'>
                            <div className='col-lg-12'>
                                <div className='text-center'>
                                    <div className='justify-content-center align-item-center'>
                                        <div className='mt-5'>
                                            <div>
                                                <h2 className='styleHeadingForm' style={{ margin: '0' }}>Online Form For Pooja Preparations</h2><hr class="separator separator--line" style={{ margin: '0' }} />
                                            </div>

                                            <div className=" mx-auto" style={{ paddingTop: 40 }}>
                                                <div className=' '>
                                                    <p className='priPass'> With our online form, you can conveniently communicate your specific requirements and preferences for your pooja ceremony.<br /> Whether it's a traditional ritual or a special occasion, simply fill out the form with details such as the type of pooja, preferred date and time, specific rituals or customs to be performed, and any additional instructions.</p><br></br>

                                                </div>
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
                                                <h2 className='styleHeadingForm' style={{ margin: '0' }}>JSS Hindu Temple Pooja Request Form</h2>
                                            </div>
                                            <hr class="separator separator--line" style={{ margin: '0' }} />
                                            <div className='container ' style={{ paddingTop: 40 }}>
                                                <div className="row ">
                                                    <div className="col-lg-4  mx-auto ">
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
                                                                {(!formValidPhone && !formValid) && <div className="text-danger">Phone number must be 10 digits</div>}
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
                                                                    className={`form-control mb-2 ${(email && !formValid) && 'border-bottom border-danger'}`}
                                                                    onChange={handleEmailChange}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                />
                                                                {!formValidEmail && <div className="text-danger">Please enter a valid email address</div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4  mx-auto ">
                                                        <div className="text-left">
                                                            <p className='PersonalPass' style={{ margin: '0' }}>Home Address</p><hr className='Personal Personal--line' style={{ margin: '0' }} />

                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="Street" className="form-label">Street<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='text' id='street' value={street} placeholder='Enter your Street' className={`form-control ${(!street && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setStreet(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="city" className="form-label">City<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='text' id='city' value={city} placeholder='Enter your city' className={`form-control ${(!city && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setCity(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="state" className="form-label">State<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='text' id='state' value={state} placeholder='Enter your state' className={`form-control ${(!state && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setState(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="email" className="form-label">Zipcode<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='email' id='email' value={zipcode} placeholder='Enter your zipcode' className={`form-control ${(!zipcode && !formValid) && 'border-bottom border-danger'}`} onChange={handleZipcodeChange} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-4 mx-auto ">
                                                        <div className="text-left">
                                                            <p className='PersonalPass' style={{ margin: '0' }}>Pooja Details</p><hr className='Personal Personal--line' style={{ margin: '0' }} />


                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="placeOfPooja" className="form-label">Place Of Pooja<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <div className='text-left'>
                                                                    <input type='radio' id="atJSS" name="placeOfPooja" checked={placeOfPooja === 'At JSS'} onChange={() => setPlaceOfPooja('At JSS')} className='form-check-input' />
                                                                    <label htmlFor="atJSS" className="form-check-label ml-1">At JSS</label>
                                                                </div>
                                                                <div className='text-left'>
                                                                    <input type='radio' id="atDevoteeHome" name="placeOfPooja" checked={placeOfPooja === 'At Devotee Home'} onChange={() => setPlaceOfPooja('At Devotee Home')} className='form-check-input' />
                                                                    <label htmlFor="atDevoteeHome" className="form-check-label ml-1">At Devotee Home</label>
                                                                </div>
                                                                {placeOfPooja === '' && (
                                                                    <div className='text-danger'>*Please select a place of pooja</div>
                                                                )}
                                                            </div>

                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="placeOfPooja" className="form-label">Same As Home Address<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <div className='text-left'>
                                                                    <input type='radio' id="sameAsHomeAddressyes" name="sameAsHomeAddress" checked={sameAsHomeAddress === 'Yes'} onChange={() => { setsameAsHomeAddress('Yes'); console.log('Selected: Yes'); }} className='form-check-input' />
                                                                    <label htmlFor="sameAsHomeAddressYes" className="form-check-label ml-1">Yes</label>
                                                                </div>
                                                                <div className='text-left'>
                                                                    <input type='radio' id="sameAsHomeAddressNO" name="sameAsHomeAddress" checked={sameAsHomeAddress === 'No'} onChange={() => { setsameAsHomeAddress('No'); console.log('Selected: No'); }} className='form-check-input' />
                                                                    <label htmlFor="sameAsHomeAddressNO" className="form-check-label ml-1">No</label>
                                                                </div>
                                                                {sameAsHomeAddress === 'No' && (
                                                                    <div className='text-left'>
                                                                        <input type="text" className="form-control mt-2" placeholder="Enter address" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} />
                                                                    </div>
                                                                )}
                                                                {sameAsHomeAddress === '' && (
                                                                    <div className='text-danger'>*Please select a Same As Home Addres</div>
                                                                )}
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="Priest Request" className="form-label">Priest Request<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <select
                                                                    id='priestRequest'
                                                                    value={priestRequest}
                                                                    className={`form-select ${(!priestRequest && !formValid) && 'border-bottom border-danger'}`}
                                                                    onChange={(e) => setPriestRequest(e.target.value)}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                >
                                                                    <option value="">Select Priest</option>
                                                                    <option value="Rudresh Nagaraju">Rudresh Nagaraju</option>
                                                                    <option value="Mahadevaswamy">Mahadevaswamy</option>
                                                                    <option value="Anyone is fine">Anyone is fine</option>
                                                                </select>
                                                                {(!priestRequest && !formValid) && (
                                                                    <div className='text-danger'>*Please select a Priest</div>
                                                                )}
                                                            </div>

                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="dateOfService" className="form-label">Date Of Service<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input
                                                                    type='date'
                                                                    id='dateOfService'
                                                                    value={dateOfService}
                                                                    className={`form-control ${(!dateOfService && !formValid) && 'border-bottom border-danger'}`}
                                                                    onChange={handleDateChange}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                />
                                                                {!formValidDate && <div className="text-danger">Please select a date on or after today</div>}
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="time" className="form-label">Time<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input
                                                                    type='time'
                                                                    id='time'
                                                                    value={time}
                                                                    className={`form-control ${(!time && !formValid) && 'border-bottom border-danger'}`}
                                                                    onChange={handleTimeChange}
                                                                    style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}
                                                                />
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="typeOfPooja" className="form-label">Type Of Pooja<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <select id='typeOfPooja' value={typeOfPooja} className={`form-control ${(!typeOfPooja && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setTypeOfPooja(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}>
                                                                    <option value="">Select Type of Pooja</option>
                                                                    <option value="Rudraabhishekam">Rudraabhishekam</option>
                                                                    <option value="Annapraashana">Annapraashana</option>
                                                                    <option value="Ayushya Homam">Ayushya Homam</option>
                                                                    <option value="Bhoomi Pooja">Bhoomi Pooja</option>
                                                                    <option value="Deeksha">Deeksha</option>
                                                                    <option value="Durga Homam">Durga Homam</option>
                                                                    <option value="Ganapathi Homam">Ganapathi Homam</option>
                                                                    <option value="Gruha Pravesham">Gruha Pravesham</option>
                                                                    <option value="Gruha Pravesham with Sathyanarayana Pooja">Gruha Pravesham with Sathyanarayana Pooja</option>
                                                                    <option value="Gruha Shanthi Pooja">Gruha Shanthi Pooja</option>
                                                                    <option value="Mruthyunjaya Homam">Mruthyunjaya Homam</option>
                                                                    <option value="Navagraha Pooja">Navagraha Pooja</option>
                                                                    <option value="Navagraha Pooja with Navagraha Homam">Navagraha Pooja with Navagraha Homam</option>
                                                                    <option value="Nischithaha ( Engagement Ceremony)">Nischithaha (Engagement Ceremony)</option>
                                                                    <option value="Punyahavaachana">Punyahavaachana</option>
                                                                    <option value="Sathyanarayana Pooja">Sathyanarayana Pooja</option>
                                                                    <option value="Seemantham">Seemantham</option>
                                                                    <option value="Shardham">Shardham</option>
                                                                    <option value="Sudharshana Homam">Sudharshana Homam</option>
                                                                    <option value="Vivaaha (Marriage)">Vivaaha (Marriage)</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                                {typeOfPooja === "Other" && (
                                                                    <input type="text" className="form-control mt-2" placeholder="Enter Other Pooja Name" value={otherPoojaName} onChange={(e) => setOtherPoojaName(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} />
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
                                <div className='col-lg-9 text-center'>
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
                    <div className="modal-dialog modal-dialog-centered " role="document">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <button type="button" className="btn-close bg-white" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label className="form-label  pripass">Thank you for choosing JSS Spiritual Mandir for your event needs. Our team will review your request and reach out to you shortly. Additionally, please note that our catering services are available, and you can place an order by clicking on the <Link to='/CatringReq' className='font-bold'>Catering Request Form</Link> whenever needed.</label>

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

export default Dashboard