import { React, useState } from "react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import './ft.css';

function Footer() {



    const [formData, setFormData] = useState({
        email: '',
        contactNo: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_xh51116', 'template_qsrd0l4', formData, 'M1SHPwM55nQeVHd5K')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });

        // Optionally, clear the form fields after submission
        setFormData({ email: '', contactNo: '', message: '' });
    };

    return (

        <>

            <div class="screen-body">
                <div class="screen-body-item left">
                    <div class="app-title">
                        <span> Contact Me</span>

                    </div>
                    {/* <div class="app-contact">CONTACT INFO : +91 8059717919</div> */}


                    <div className="c-social">

                        <div className="c-handles">
                            <div className="c-handle linkdin">
                                <a href="https://www.linkedin.com/in/raman-jangu" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                                </a>
                            </div>
                            <div className="c-handle Github">
                                <a href="https://github.com/rmnjaat" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="1.5x" />
                                </a>
                            </div>
                            <div className="c-handle Gmail">
                                <a href="mailto:ramanjangu01@outlook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                                </a>
                            </div>
                            <div className="c-handle instagram">
                                <a href="https://www.instagram.com/rmn_jangu_jaat" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </a>
                            </div>
                            <div className="c-handle phone ">
                                <a href="tel:+918059717919" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPhone} size="0.1x" />
                                </a>
                            </div>

                        </div>
                    </div>




                </div>
                <div class="screen-body-item">
                    <form className="app-form" onSubmit={handleSubmit}>
                        <div className="app-form-group">
                            <input
                                className="app-form-control"
                                placeholder="EMAIL"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="app-form-group">
                            <input
                                className="app-form-control"
                                placeholder="CONTACT NO"
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="app-form-group message">
                            <input
                                className="app-form-control"
                                placeholder="MESSAGE"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="app-form-group buttons">
                            <button className="app-form-button">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        







            <div className="footer">
                {/* <div className="navi">


                    <ul class="nav-links">

                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                </div> */}

                {/* To add nav here pleasse uncomment .cp nargin property */}

                <div className="cp">
                    <p>© 2024 Raman Jangu. All rights reserved.</p>
                </div>
            </div>


        </>

    )

}

export default Footer;