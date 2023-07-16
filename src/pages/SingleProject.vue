<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import { projects } from '../data/projects.js';
import { useRoute } from 'vue-router'
export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			project: projects.find(x => x.project == useRoute().params.project),
		};
	},
	beforeRouteEnter(to, _ , next)  {
		const project = projects.find(x => x.project == to.params.project)
		if( project && project.dir && project.dir ) {
			next()
		}
		next({ name: 'NotFound' , params: { pathMatch: to.path.substring(1).split('/') } })
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :project="project" />

		<!-- Project gallery -->
		<ProjectGallery v-if="project.src && project.src.images && project.src.images.length > 0" :project="project" />

		<!-- Project information -->
		<ProjectInfo :project="project"/>
	</div>
</template>

<style scoped></style>
