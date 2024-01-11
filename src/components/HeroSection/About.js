import React from "react";
import photo from './Images/img4.jpeg';

import './About.css'


function ABOUT() {
    return (
        <>
            <div className="main-container">
                <div className="para">
                    <div>
                        <h1>Hi , I'm  <br />  <span>Raman Jangu</span> <br />
                            Web & Java  Developer </h1>
                    </div>
                    <div className="button">
                        <button type="button">Dowanload CV</button>
                    </div>

                </div>
                <div className="picture">
                    <img src={photo} alt=" photo" />
                </div>

            </div>
        </>
    )

}

export default ABOUT;