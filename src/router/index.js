import HomePage from '../pages/Home.vue';
import NotFound from '../components/error/NotFound.vue';

export const router = [
    {
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../pages/About.vue'),
	},
	{
		path: '/credentials',
		name: 'Credentials',
		component: () =>
			import(/* webpackChunkName: "about" */ '../pages/Credentials.vue'),
	},
	{
		path: '/projects',
		name: 'Projects',
		children: [

		],
		component: () =>
			import(/* webpackChunkName: "projects" */ '../pages/Projects.vue'),
	},
	{
		path: '/projects/:project',
		name: 'SingleProject',
		children: [
			{
				path: '/projects/soliver-portfolio-using-vue-vite-tailwind',
				component: () =>
				import(
					/* webpackChunkName: "projects" */ '../pages/SingleProject.vue'
				),
			}
		],
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../pages/SingleProject.vue'
			),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../pages/Contact.vue'),
	},
	{ 
		path: '/:pathMatch(.*)*', 
		name: 'NotFound', 
		component: NotFound 
	},
]
