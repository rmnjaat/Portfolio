import FrontEnd_List from '../Skills/frontEnd_List';
import Language_list from '../Skills/language_list';
import Other_List from '../Skills/other_list';

import project1 from '../Images/fd.jpg';
import project2 from '../Images/fs.png';
import project3 from '../Images/Lai.png';
import project3_1 from '../Images/Lais.png';
// import project2 from '../Images/portfolio.png';

const Project_list = [
	{
		id: 1,

		name: 'Ai Fire Detection',


		techUsed: [ ...Language_list.filter((item) => ['Python'].includes(item.name))],

		details:"The Continuous Fire Detection Project uses the YOLOv8 model to detect fire in real-time through images and video streams. This system is designed for environments where early fire detection is crucial, offering a reliable solution for monitoring and alerting in settings such as industrial sites, residential buildings, and public spaces.",
		photo: project1,
		photo_large: project1,
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
	{
		id: 3,

		name: 'Linux BrainWave',

		techUsed: [...FrontEnd_List.filter((item) => ['Html' , 'Css' , 'Javascript'].includes(item.name)) , {id:99 , image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" , name:"Electrone"}],

		details:'Linux BrainWave is a cutting-edge desktop application for Linux, built using the Electron framework, that integrates seamlessly with AI Gemini to provide users with advanced AI capabilities directly within their Linux environment.',
		photo: project3_1,
		photo_large: project3,
		ddesc_long:'Linux BrainWave is a cutting-edge desktop application for Linux, built using the Electron framework, that integrates seamlessly with AI Gemini to provide users with advanced AI capabilities directly within their Linux environment. The app features a user-friendly interface that allows easy access to AI tools for tasks like content generation, workflow automation, and productivity enhancement. Designed to be lightweight and efficient, Linux BrainWave ensures smooth performance without overloading system resources. Regular updates keep the application aligned with the latest AI advancements, making it an essential tool for developers, creators, and anyone interested in exploring AI\'s potential on Linux.',
				codeLink: 'https://github.com/rmnjaat/BranWave',
		LiveApp: 'https://drive.google.com/file/d/1DjrdnE-213dRanGz8LyW2jLg1WCJmeLg/view',
	}
];

export default Project_list;
