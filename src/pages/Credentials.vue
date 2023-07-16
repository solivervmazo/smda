<script>
import Certificates from '../components/credentials/Certificates.vue';
import feather from 'feather-icons';

export default {
	name: 'Credentials',
	components: {
		Certificates: Certificates,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<div class="container mx-auto">
			<Certificates />
		</div>
	</div>
</template>

<style scoped></style>
