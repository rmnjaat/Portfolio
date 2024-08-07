import FrontEnd_List from '../Skills/frontEnd_List';
import Language_list from '../Skills/language_list';
import Other_List from '../Skills/other_list';

import project2 from '../Images/fs.png';
// import project2 from '../Images/portfolio.png';

const Project_list = [
	{
		id: 1,

		name: 'Ai Fire Detection',


		techUsed: [ ...Language_list.filter((item) => ['Python'].includes(item.name))],

		details:"The Continuous Fire Detection Project uses the YOLOv8 model to detect fire in real-time through images and video streams. This system is designed for environments where early fire detection is crucial, offering a reliable solution for monitoring and alerting in settings such as industrial sites, residential buildings, and public spaces.",
		photo: project2,
		photo_large: project2,
		ddesc_long:"The Continuous Fire Detection Project uses the YOLOv8 model for real-time fire detection in images and video streams. This system, built with Python and utilizing Google Colab for model training, is ideal for environments requiring early fire detection, such as industrial sites, residential buildings, and public spaces. By integrating technologies like PyTorch, Torchvision, and Ultralytics, the project ensures accurate monitoring and quick alerting. Key use cases include fire safety monitoring, emergency response systems, and environmental monitoring for wildfires.",
				codeLink: 'https://github.com/rmnjaat/FireWatchAi',
		LiveApp: 'https://github.com/rmnjaat/FireWatchAi',
	},

	{
		id: 2,

		name: 'Flight Managment System',

		techUsed: [...Language_list.filter((item) => ['Java'].includes(item.name)) , ...Other_List.filter((item )=>['Springboot'].includes(item.name))],

		details:
			'The Flight Management System is a backend solution developed using Java, Spring Boot, and Hibernate JPA. It is designed to manage various aspects of flight operations, including scheduling, booking, and managing flight data. The application offers RESTful APIs that allow seamless interaction with the backend, making it an ideal solution for integrating with various front-end platforms or mobile applications.',

		photo: project2,
		photo_large: project2,
		ddesc_long:'In this project, I developed a comprehensive Flight Management System that serves as the backend for managing flight operations. The backend is built with Spring Boot, providing a robust and scalable framework for enterprise-level applications. I utilized Hibernate JPA for efficient data persistence and management, ensuring smooth interactions with the underlying database. The system offers a range of RESTful APIs that enable the management of flights, including functionalities such as adding, updating, and deleting flight records, as well as handling schedules and bookings. The API endpoints are designed with security, performance, and ease of use in mind, ensuring that they can be easily consumed by other applications.',
		codeLink: 'https://github.com/rmnjaat/InfosysFlightManagemetProject',
		LiveApp: 'https://github.com/rmnjaat/InfosysFlightManagemetProject',
	},
];

export default Project_list;
