<script>
export default {
	data: () => {
		return {
			copyrightDate: '2023',
			author: 'Soliver Mazo',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }} {{ "-" }} {{ author }}.
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
