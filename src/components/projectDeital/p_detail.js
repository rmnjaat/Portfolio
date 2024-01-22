import React from "react";

import './p_detail.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCode } from '@fortawesome/free-brands-svg-icons';

import p2photo from '/home/kartik/Pictures/Programs/newportfolio/src/components/Images/Screenshot from 2024-01-21 21-03-55.png'

import pngg2 from '/home/kartik/Pictures/Programs/newportfolio/src/components/Images/instagram-live.png'

import pngg from '/home/kartik/Pictures/Programs/newportfolio/src/components/Images/code.png'

function pdetails() {
    return (
        <>

            <div className="pdetails-main-container">
            <div className="cross">
                <button>×</button>
            </div>
                <div className="pdetails">

                    <div className="pdetails_img">
                        <img src={p2photo} alt="" />
                    </div>


                    <div className="pdetails_info">

                        <div className="project-info-heading">
                            <h1>    Portfolio</h1>
                        </div>


                        <div className="p-list">
                            <div className="list-cont">
                                <div className="p-list-img">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

                                </div>

                                <div className="p-list-name">
                                    Html
                                </div>

                            </div>

                            <div className="list-cont">
                                <div className="p-list-img">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

                                </div>

                                <div className="p-list-name">
                                    Css
                                </div>

                            </div>

                            <div className="list-cont">
                                <div className="p-list-img">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                                </div>

                                <div className="p-list-name">
                                    Javascript
                                </div>

                            </div>


                            <div className="list-cont">
                                <div className="p-list-img">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

                                </div>

                                <div className="p-list-name">
                                    React
                                </div>

                            </div>

                        </div>

                        <div className="D-project-details">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic mollitia facilis optio iste laudantium fugiat? Nulla, commodi! Nisi quibusdam sed natus inventore ipsa voluptatum incidunt rem blanditiis quisquam eligendi.
                                Id adipisci quia aperiam fugiat voluptatibus ex quidem vero dolor accusamus. Mollitia, recusandae aliquid veniam doloribus optio quam id ex sapiente in sequi perspiciatis vel asperiores vero autem magni nulla.</p>
                        </div>

                    </div>


                    <div className="pdetaislbuttons">

                        <a href="#" className="code p-b"> View Code</a>
                        <a href="#" className="code p-b"> Live App</a>

                      
                    </div>


                </div>
            </div>


        </>
    )
}


export default pdetails;