<script>
import AppBanner from '../components/shared/AppBanner.vue';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';
// import { useMeta } from 'vue-meta';

export default {
	// setup () {
	// 	useMeta({
	// 		meta: [
	// 			{ name : 'title', content : 'Soliver Mazo' },
	// 			{ name : 'description', content : 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills' },
				
	// 			{ property : 'og:type', content : 'website' },
	// 			{ property : 'og:url', content : 'https://solivervmazo.github.io/soliver/' },
	// 			{ property : 'og:description', content : 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills' },
	// 			{ property : 'og:image', content : 'https://solivervmazo.github.io/soliver/solivervmazo.png' },

	// 			{ property : 'twitter:card', content : 'summary_large_image' },
	// 			{ property : 'twitter:url', content : 'https://solivervmazo.github.io/soliver/' },
	// 			{ property : 'twitter:title', content : 'Soliver Mazo' },
	// 			{ property : 'twitter:description', content : 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills' },
	// 			{ property : 'twitter:image', content : 'https://solivervmazo.github.io/soliver/solivervmazo.png' },
	// 		]
	// 	})
	// },
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Button,
	},
};
</script>

<template>
	<div class="mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<div class="container mx-auto">
			<!-- Projects -->
					<ProjectsGrid />

			<!-- Load more projects button -->
			<div class="mt-10 sm:mt-20 flex justify-center">
				<router-link
					to="/projects"
					class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
