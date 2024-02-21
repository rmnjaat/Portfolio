import FrontEnd_List from '../Skills/frontEnd_List';
import Language_list from '../Skills/language_list';
import Other_List from '../Skills/other_list';

import project1 from '../Images/portfolio.png';
// import project2 from '../Images/portfolio.png';

const Project_list = [
	{
		id: 1,

		name: 'Portfolio',

		// techUsed: [
		//     ...Language_list,
		//     ...FrontEnd_List.filter(item => ["Html", "Css", "Javascript", "React"].includes(item.name)),
		//     ...Other_List.filter(item => ["Figma"].includes(item.name))
		//   ]

		techUsed: [...FrontEnd_List.filter((item) => ['Html', 'Css', 'Javascript', 'React'].includes(item.name))],

		details:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic mollitia facilis optio iste laudantium fugiat? Nulla, commodi! Nisi quibusdam sed natus inventore ipsa voluptatum incidunt rem blanditiis quisquam eligendi.   ',

		photo: project1,
		photo_large: project1,
		ddesc_long:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic mollitia facilis optio iste laudantium fugiat? Nulla, commodi! Nisi quibusdam sed natus inventore ipsa voluptatum incidunt rem blanditiis quisquam eligendi.     Atque dicta quia vitae deleniti quis animi ea ratione harum, facilis praesentium deserunt officiis ipsa, necessitatibus architecto, accusantium sint sunt distinctio. Atque, illo reiciendis quo consectetur accusamus officia perferendis ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, assumenda soluta! Neque officia molestiae nam obcaecati, quae saepe iste consequatur tempore debitis, assumenda quam? Aut laudantium nihil possimus fuga praesentium.  Necessitatibus reiciendis voluptatem vel minus veniam temporibus blanditiis quasi ullam perferendis quaerat, recusandae nihil magnam qui incidunt iste deleniti laboriosam amet quisquam ab dolorum enim ipsam soluta nam. Fugiat, animi.Amet culpa quos quidem aliquid aliquam? Sequi quibusdam atque necessitatibus qui quia natus ipsum magni inventore, recusandae, minima at facere nemo! Incidunt inventore, ex repellendus id distinctio in commodi sapiente.Id adipisci quia aperiam fugiat',

		codeLink: 'https://www.google.com',
		LiveApp: 'https://www.google.com',
	},

	{
		id: 2,

		name: 'Music Player',

		// techUsed: [
		//     ...Language_list,
		//     ...FrontEnd_List.filter(item => ["Html", "Css", "Javascript", "React"].includes(item.name)),
		//     ...Other_List.filter(item => ["Figma"].includes(item.name))
		//   ]

		techUsed: [...FrontEnd_List.filter((item) => ['Html', 'Css', 'Javascript', 'React'].includes(item.name))],

		details:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic mollitia facilis optio iste laudantium fugiat? Nulla, commodi! Nisi quibusdam sed natus inventore ipsa voluptatum incidunt rem blanditiis quisquam eligendi.  ',

		photo: project1,
		photo_large: project1,
		ddesc_long:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic mollitia facilis optio iste laudantium fugiat? Nulla, commodi! Nisi quibusdam sed natus inventore ipsa voluptatum incidunt rem blanditiis quisquam eligendi.     Atque dicta quia vitae deleniti quis animi ea ratione harum, facilis praesentium deserunt officiis ipsa, necessitatibus architecto, accusantium sint sunt distinctio. Atque, illo reiciendis quo consectetur accusamus officia perferendis ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, assumenda soluta! Neque officia molestiae nam obcaecati, quae saepe iste consequatur tempore debitis, assumenda quam? Aut laudantium nihil possimus fuga praesentium.  Necessitatibus reiciendis voluptatem vel minus veniam temporibus blanditiis quasi ullam perferendis quaerat, recusandae nihil magnam qui incidunt iste deleniti laboriosam amet quisquam ab dolorum enim ipsam soluta nam. Fugiat, animi.Amet culpa quos quidem aliquid aliquam? Sequi quibusdam atque necessitatibus qui quia natus ipsum magni inventore, recusandae, minima at facere nemo! Incidunt inventore, ex repellendus id distinctio in commodi sapiente.Id adipisci quia aperiam fugiat',
		codeLink: 'https://www.google.com',
		LiveApp: 'https://www.google.com',
	},
];

export default Project_list;
