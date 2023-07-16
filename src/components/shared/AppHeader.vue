<script>
import ThemeSwitcher from '../ThemeSwitcher.vue';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';

export default {
	components: {
		ThemeSwitcher,
		AppHeaderLinks,
		Button,
	},
	data() {
		return {
			isOpen: false,
			theme: 'light',
			logoDark: new URL('~@/assets/images/logo-dark.png', import.meta.url).href,
			logoLight: new URL('~@/assets/images/logo-light.png', import.meta.url).href,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
		};
	},

	created() {
		// this.theme = localStorage.getItem('theme') || 'light';
		if(typeof window != 'undefined' ) this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		// this.theme = localStorage.getItem('theme') || 'light';
		if(typeof window != 'undefined' ) this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
		
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<nav id="nav" class="fixed top-0 z-10 bg-gray-50 w-full x-0 mx-auto top-0 z-10  bg-primary-light dark:bg-primary-dark">
		<!-- Header start -->
		<div
			class="z-10 max-w-screen-lg mx-auto sm:flex justify-between sm:items-center my-3"
		>
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/"
						><img
							v-if="theme === 'light'"
							:src="logoDark"
							class="w-36"
							alt="Dark Logo"
						/>
						<img
							v-else
							:src="logoLight"
							class="w-36"
							alt="Light Logo"
						/>
					</router-link>
				</div>

				<!-- Theme switcher small screen -->

				<!-- Small screen hamburger menu -->
			</div>

			<!-- Header links -->
			<AppHeaderLinks :isOpen="isOpen" />

			<!-- Header right section buttons -->
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row"
			>
				<!-- Hire me button -->
				<!-- <div class="hidden md:block">
					<Button
						title="Hire Me"
						class="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						@click="showModal()"
						aria-label="Hire Me Button"
					/>
				</div> -->

				<!-- Theme switcher large screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				/>
			</div>
		</div>
	</nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>
