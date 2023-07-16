<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import {projects , categories } from '../../data/projects';

export default {
	components: { ProjectSingle, ProjectsFilter },
	data: () => {
		return {
			projects: JSON.parse(JSON.stringify(projects)).reverse(),
			projectsHeading: 'Projects Portfolio',
			selectedCategory: '',
			searchProject: '',
			categories,
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
			if (this.selectedCategory) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.projects;
		},
	},
	methods: {
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		// Filter projects by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped></style>
