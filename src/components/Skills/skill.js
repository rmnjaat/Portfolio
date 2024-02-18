import React from "react";
import './skill.css';
import lang from './language_list';
import front from './frontEnd_List';
import other from "./other_list";


function skill() {
    return (
        <>
            <div className="skill-main-container">
                <div className="heading">
                    <h1>Skills</h1>
                    <div className="line"></div>
                </div>

                <div className="Boxes">



                    <div className="Box">
                        <div className="technical">

                            <h1>Languages</h1>
                        </div>
                        <div className="list">

                            {
                                lang.map(langs => (


                                    <div className="list-cont" key={langs.id}>
                                        <div className="list-img">
                                            <img src={langs.image} />
                                        </div>

                                        <div className="list-name">
                                            {langs.name}
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>





                    <div className="Box">

                        <div className="technical">
                            <h1> FrontEnd</h1>
                        </div>


                        <div className="list">


                            {
                                front.map( fs =>(


                                <div className="list-cont" key={fs.id}>
                                    <div className="list-img">

                                        <img src= {fs.image} />

                                    </div>

                                    <div className="list-name">
                                        {fs.name}
                                    </div>

                                </div>
                                ) )
                            }


                        </div>

                    </div>

                    <div className="Box">
                        <div className="technical">

                            <h1> Other</h1>
                        </div>
                        <div className="list">



                            {


                            other.map(ot =>(


                            <div className="list-cont" key={ot.id}>
                                <div className="list-img">


                                    <img src= {ot.image} />

                                </div>

                                <div className="list-name">
                                    {ot.name}
                                </div>

                            </div>
                            ))

                            


                            }

                        </div>

                    </div>

                </div>

                

            </div>



        </>
    )
}


export default skill;