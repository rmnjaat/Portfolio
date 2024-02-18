import React, {useState,useEffect} from "react";
import './project.css';
import Project_list from "./project_api";
import Pdetails from "../projectDeital/p_detail";



function Project() {

     const [selectedProject, setSelectedProject] = useState(null);
     const [show, setshow] = useState(false);

  

    const handleProjectClick = (projectId) => {
        const clickedProject = Project_list.find(project => project.id === projectId);

        setSelectedProject(clickedProject); // Show details of clicked project
        setshow(true);
    }
    return (
        <>
            <div className="projects-main-continer">
                <div className="heading" >
                    <div className="hl">
                        <h1>Projects</h1>
                        <div className="pline"></div>
                    </div>
                </div>




                <div className="projects-section">

                    {/* <div className="projecct"> */}


                    {
                        Project_list.map(project => (




                            <div className="project_div" key={project.id} id={project.id}  onClick={() => handleProjectClick(project.id)}>

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

            {(selectedProject) && <Pdetails project={selectedProject} />} 
        </>
    )
}

export default Project;