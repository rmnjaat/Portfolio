import React from "react";
import './ed.css';

import lpu from '/home/kartik/Pictures/Programs/newportfolio/src/components/Images/lpu2.png'
import jnv from '/home/kartik/Pictures/Programs/newportfolio/src/components/Images/JNV (1).jpg'


function ED() {
    return (
        <>

            <div class="timeline-section">
                <div className="e-heading  heading">
                    <h1>Eduation</h1>
                    <div className="e-line pline"></div>
                </div>

                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>

                        <div class="timeline-content">
                            <h3>Lovely Professional University</h3>
                            <h2>Bachelor of Technology in Computer Science and engineering</h2>
                            <small>2022-2026</small>
                            <p>Member of IEEE Society and  MSRC. </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>

                        <div class="timeline-content">
                            <h3>Jawahar Navodaya Vidayala </h3>
                            <h2>Middle School , Secoundry School , Senior Secoundry School ( PCM ) </h2>
                            <small>2015-2022</small>
                            <p> Residential schooling with lots of joy and memories. </p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ED;