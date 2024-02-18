import React, { useState } from "react";

import './p_detail.css';



import p2photo from '/home/kartik/Pictures/Programs/newportfolio/src/components/Images/p1img.png'


function Pdetails({project}) {

    const [crxx, setCrxx] = useState(true);

    const close = () => {
        console.log("Close called");
        setCrxx(false);
    }

    return (
        <>
            {

                crxx && 

                <div className="pdetails-main-container">
                    <div className="cross">
                        <button onClick={close}>×</button>
                    </div>
                    <div className="pdetails">

                        <div className="pdetails_img">
                            <img src={project.photo_large} alt="" />
                        </div>


                        <div className="pdetails_info">

                            <div className="project-info-heading">
                                <h1>{project.name}</h1>
                            </div>


                            <div className="p-list">
                            {
                                                project.techUsed.map(techu => (


                                                    <div className="list-cont" key={techu.id}>
                                                        <div className="p-list-img">

                                                            <img src={techu.image} />

                                                        </div>

                                                        <div className="p-list-name">
                                                            {techu.name}
                                                        </div>

                                                    </div>

                                                ))

                                            }

                            </div>

                            <div className="D-project-details">
                                            <p>{project.ddesc_long}</p>
                            </div>

                        </div>


                        <div className="pdetaislbuttons">

                            <a href={project.codeLink} className="code p-b p-d"> View Code</a>
                            <a href={project.LiveApp} className="code p-b p-c"> Live App</a>


                        </div>


                    </div>
                </div>

            }
        </>
    )
}


export default Pdetails;