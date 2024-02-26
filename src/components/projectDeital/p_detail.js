import React from 'react';

import './p_detail.css';

function Pdetails({ project, setshow }) {
	const close = () => {
		setshow(false);
	};

	return (
		<div className="modal_container">
			<div className="pdetails-main-container">
				<div className="cross">
					<button onClick={close}>x</button>
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
							{project.techUsed.map((techu) => (
								<div className="list-cont" key={techu.id}>
									<div className="p-list-img">
										<img src={techu.image} />
									</div>

									<div className="p-list-name">{techu.name}</div>
								</div>
							))}
						</div>

						<div className="D-project-details">
							<p>{project.ddesc_long}</p>
						</div>
					</div>

					<div className="pdetaislbuttons">
						<a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="code p-b p-d">
							View Code
						</a>
						<a href={project.LiveApp} target="_blank" rel="noopener noreferrer" className="code p-b p-c">
							Live App
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pdetails;
