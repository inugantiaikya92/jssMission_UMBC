import React from 'react'
import '../css/Dashboard.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

function Yoga() {
    const img1 = require("../Img/yoga.avif");
    const img2 = require("../Img/yoga2.avif");
    const img3 = require("../Img/yoga3.jpg")
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homeNumber, setHomeNumber] = useState('');
    const [email, setEmail] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [previousYogaExperience, setPreviousYogaExperience] = useState('No');
    const [interestedSlots, setInterestedSlots] = useState([]);
    const [comments, setComments] = useState('');
    const [Name, setName] = useState('');
    const [formValid, setFormValid] = useState(true);
    const [formValidPhone, setFormValidPhone] = useState(true);
    const [formValidEmail, setFormValidEmail] = useState(true);
    const [showModal, setShowModal] = useState(false);


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

    const handleSlotChange = (selectedSlot) => {

        

        const slotIndex = interestedSlots.findIndex(slot => slot.day === selectedSlot.day && slot.time === selectedSlot.time);

        if (slotIndex !== -1) {
            setInterestedSlots(prevSlots => prevSlots.filter((slot, index) => index !== slotIndex));
        } else {
            setInterestedSlots(prevSlots => [...prevSlots, selectedSlot]);
        }
    };

    const handleSubmit =  async() => {
        if (!firstName || !lastName|| !phoneNumber || !email || !ageGroup  || !homeNumber || !Name) {
            setFormValid(false);
            return;
        }
       
        document.getElementById("submitBtn").disabled = true;

        const formData = {
            firstName,
            lastName,
            phoneNumber,
            homeNumber,
            email,
            ageGroup,
            previousYogaExperience,
            interestedSlots: JSON.stringify(interestedSlots),
            comments,
            Name
        };
        console.log(formData)

        // Save the form data to the database

        try {
            // Make a POST request to your backend API endpoint
            const response = await fetch('https://jssnode.onrender.com/api/yoga', {
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
                setFormValid(true);
                console.log('yoga data saved successfully:', data);
                document.getElementById("submitBtn").disabled = false;
            } else {
                // If the request fails, log the error message
                const errorData = await response.json();
                console.error('Error saving yoga data:', errorData.error);
            }
        } catch (error) {
            // If an error occurs during the fetch operation, log the error
            console.error('An error occurred while saving yoga data:', error);
            document.getElementById("submitBtn").disabled = false;
        }
    };

    const timeSlots = [
        { day: 'Saturday', time: '8 AM to 9 AM' },
        { day: 'Sunday', time: '8 AM to 9:30 AM' },
        { day: 'Monday', time: '8 AM to 9 AM' }
    ];

    const closeModal = () => {
        setShowModal(false);
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setHomeNumber('');
        setEmail('');
        setAgeGroup('');
        setPreviousYogaExperience('No');
        //setInterestedSlots('');
        setComments('');
        setName('');
    }


    return (
        <>
            <div className='container-fluid bg' style={{ color: 'white' }}>
                <div className='container'>
                    <div className='d-flex justify-content-center align-item-center'>
                        <div className='py-5 pb-5 text-center mt-5'>
                            <div className='mt-5'>
                                <h3 className='h styleHeading'>Yoga </h3>
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
                        <img src={img2} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
                        <Carousel.Caption className='mb-5'>
                            <h5 className='sliderHeading mb-5 '>Let's Create a Legacy for Future</h5>
                            <a href='' className='linkbtn my-4'>View More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
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
                        <div className='row mx-0'>
                            <div className='col-lg-12'>
                                <div className='text-center'>
                                    <div className='justify-content-center align-item-center'>
                                        <div className='mt-5'>
                                            <div>
                                                <h2 className='styleHeadingForm' style={{ margin: '0' }}>Experience Tranquility and Vitality with JSS Yoga</h2><hr class="separator separator--line" style={{ margin: '0' }} />
                                            </div>
                                            <div className="mx-auto" style={{ paddingTop: 40 }}>
                                                <div className=''>
                                                    <p className='priPass'>Embark on a journey of holistic wellness with our weekend yoga classes at JSS Spiritual Mission. Crafted for seekers of physical rejuvenation and spiritual harmony, our classes offer a serene haven to delve into the ancient art of yoga and unlock its life-altering benefits.Under the guidance of seasoned instructors, immerse yourself in transformative practices, including invigorating asanas, revitalizing pranayama, and serene meditation. Our classes foster alignment, mindful breathing, and inner serenity, nurturing a profound connection between mind and body.Join our vibrant community to deepen your yoga journey, cultivate resilience, and uncover the holistic advantages of regular practice. Whether a novice or seasoned yogi, all are welcome to experience the profound benefits of JSS Yoga.</p>
                                                    <p className='priPass' style={{ paddingTop: 40, margin: 0 }}><strong>Our Offerings:</strong></p>
                                                    <hr className='pass pass--line' style={{ margin: '0' }} />
                                                    <ul className='priPass mt-4'>
                                                        <li><strong>Online Classes:</strong> Indulge in the essence of yoga from the sanctuary of your own space with our virtual sessions. Connect seamlessly with our dedicated instructors and relish personalized guidance tailored to your schedule and comfort.</li>
                                                        <li><strong>Specialized Streams:</strong> Delve into bespoke classes curated to address the demands of modern life, including stress management and tailored sessions for seasoned individuals. Elevate your well-being with techniques designed to foster tranquility, enhance mobility, and ignite inner peace.</li>
                                                    </ul>
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
                                                <h2 className='styleHeadingForm' style={{ margin: '0' }}>JSS Yoga Form</h2>
                                            </div>
                                            <hr class="separator separator--line" style={{ margin: '0' }} />
                                            <div className='container ' style={{ paddingTop: 40 }}>
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
                                                            <div className="text-center">
                                                                <div className='text-left mt-3'>
                                                                    <label htmlFor="ageGroup" className="form-label">Age Group<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <select className={`form-control mb-2 ${(!ageGroup && !formValid) && 'border-bottom border-danger'}`} aria-label="Age Group" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}>
                                                                    <option value="">--Select--</option>
                                                                    <option value="Below 30 years">Below 30 years</option>
                                                                    <option value="30-50 years">30-50 years</option>
                                                                    <option value="Above 50 years">Above 50 years</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6  mx-auto ">
                                                        <div className="text-left">
                                                            <p className='PersonalPass' style={{ margin: '0' }}>Yoga Class Details</p><hr className='Personal Personal--line' style={{ margin: '0' }} />

                                                            <div className="mt-3">
                                                                <div className='text-left'>
                                                                    <label className="form-label">Interested Slots<span className='text-danger'>*</span></label>
                                                                </div>
                                                                {timeSlots.map((slot, index) => (
                                                                    <div key={index} className="form-check text-left">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="form-check-input"
                                                                            id={`slot-${index}`}
                                                                            value={slot.time}
                                                                            checked={interestedSlots.some(s => s.day === slot.day && s.time === slot.time)}
                                                                            onChange={() => handleSlotChange(slot)}
                                                                        />
                                                                        <label className="form-check-label" htmlFor={`slot-${index}`}>
                                                                            {`${slot.day}, ${slot.time}`}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                                {interestedSlots.length === 0 && (
                                                                    <div className='text-danger'>*Please select an Interested Slot</div>
                                                                )}
                                                            </div>

                                                            <div className="text-center">
                                                                <div className='text-left mt-3'>
                                                                    <label htmlFor="previousExperience" className="form-label">Previous Yoga Experience</label>
                                                                </div>
                                                                <select className={`form-control mb-2`} aria-label="Previous Yoga Experience" value={previousYogaExperience} onChange={(e) => setPreviousYogaExperience(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}>
                                                                    <option value="No">No</option>
                                                                    <option value="Yes">Yes</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="text-left mt-4">
                                                            <p className='PersonalPass' style={{ margin: '0' }}>Special Note for the instructor:</p><hr className='Personal Personal--line' style={{ margin: '0' }} />

                                                            <div className="text-center mt-5">
                                                                <div className='text-left'>
                                                                    <label htmlFor="Name" className="form-label">Enter your Name<span className='text-danger'>*</span></label>
                                                                </div>
                                                                <input type='text' id='firstName' value={Name} placeholder='Enter your Name' className={`form-control ${(!Name && !formValid) && 'border-bottom border-danger'}`} onChange={(e) => setName(e.target.value)} style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }}></input>
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <div className='text-left'>
                                                                    <label htmlFor="comments" className="form-label">Comments</label>
                                                                </div>
                                                                <textarea
                                                                    id='comments'
                                                                    value={comments}
                                                                    placeholder='Enter your comments here'
                                                                    className="form-control"
                                                                    style={{ border: '1px solid gray', borderRadius: '5px', minHeight: '100px', padding: '5px' }} onChange={(e) => setComments(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-12 mt-5'>
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
                        <div className="modal-content ">
                            <div className="modal-header">
                                <button type="button" className="btn-close bg-white" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label className="form-label passpri"> Thank you for expressing interest in our yoga classes at JSS Spiritual Mandir. Our team will review your preferred time slots and previous yoga experience to best accommodate your needs. Should you have any special notes for the instructor or further questions, please feel free to include them in the comments section. Our dedicated team will be in touch with you shortly regarding class scheduling and any additional information you may require.</label>

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

export default Yoga