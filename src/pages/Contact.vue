<script>
import feather from 'feather-icons';
import ContactDetails from '../components/contact/ContactDetails.vue';


export default {
	name: 'Contacts',
	components: {
		ContactDetails,
	},
	data() {
		return {
			contacts: [
				{
					id: 1,
					name: 'Davao City, Davao del Sur Philippines, 8000',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'solivervmazo.jobs@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: 'github.com/solivervmazo',
					icon: 'github',
				},
				{
					id: 3,
					name: 'linkedin.com/in/solivervmazo/',
					icon: 'linkedin',
				},
			],
		}
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
	<div>
		<!-- About me -->
		<div class="container mx-auto">\
			<ContactDetails :contacts="contacts"/>
		</div>
	</div>
</template>

<style scoped></style>
