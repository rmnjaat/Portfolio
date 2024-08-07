import React from "react";
import photo from './Images/img4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import File from "./Raman_Resume.pdf"


import './About.css'


function ABOUT() {
    return (
        <>
            <div className="main-container">
                <div className="para">
                    <div >
                        <h1>Hi , I'm  <br />  <span>Raman Jangu</span> <br />
                            Web & Java  Developer </h1>
                    </div>
                    <div className="button">
                        <a href={File} download="Raman's_Resume">
                            <button type="button">Download Resume</button>
                        </a>
                    </div>


                    <div className="social">

                        <div className="handles">
                            <div className="handle linkdin">
                                <a href="https://www.linkedin.com/in/raman-jangu" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                                </a>
                            </div>
                            <div className="handle Github">
                                <a href="https://github.com/rmnjaat" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="1.5x" />
                                </a>
                            </div>
                            <div className="handle Gmail">
                                <a href="mailto:ramanjangu01@outlook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                                </a>
                            </div>
                            <div className="handle instagram">
                                <a href="https://www.instagram.com/rmn_jangu_jaat" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </a>
                            </div>

                        </div>
                    </div>



                </div>


                <div className="picture" >
                    <img src={photo} alt=" photo"  style={{"width":"505px"}} />
                </div>

            </div>
        </>
    )

}

export default ABOUT;