import React from "react";
import './NavBar.css';


function NAV() {

    return (
        <>
            {/* <div className="nav-bar">
            <div className="nav-items">
                <div className="nav-item">  <a href="">About</a>   </div>
                <div className="nav-item"><a href="">Profile</a></div>
                <div className="nav-item"><a href="">Contact</a></div>
            </div>
        </div> */}

            
                <div className="n-navi">


                    <ul class="n-nav-links">

                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                </div>

            

        </>
    )

}

export default NAV;