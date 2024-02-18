import React from "react";
import './project.css';
import Project_list from "./project_api";



function Project() {
    return (
        <>
            <div className="projects-main-continer">
                <div className="heading" >
                    <div className="hl">
                        <h1>Projects</h1>
                        <div className="line"></div>
                    </div>
                </div>




                <div className="projects-section">

                    {/* <div className="projecct"> */}


                    {
                        Project_list.map(project => (




                            <div className="project_div" key={project.id}>

                                <div className="project-info">
                                    <div className="project-info-heading">
                                        <h1>{project.name}</h1>
                                    </div>




                                    <div className="project-info-technologyuSED">
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
                                    </div>
                                    {/* debug image */}
                                    <div className="project-details">
                                        <p>{project.details}</p>
                                    </div>

                                </div>

                                <div className="project-image">

                                    <img src={project.photo} alt="" />
                                </div>


                            </div>
                        ))


                    }




                </div>

            </div>
        </>
    )
}

export default Project;