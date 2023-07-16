<script>
import feather from 'feather-icons';
import { defineAsyncComponent } from 'vue';
import NotFound from '../error/Markdown404.vue';

export default {
	props: ['dir','file'],
	components:{
        Md: undefined
	},
    beforeMount(){
        this.$options.components['Md'] = defineAsyncComponent({
					loader: () => import(/* @vite-ignore */`../../data/projects/${this.$props.dir}/${this.$props.file}.md`),
					timeout: 200,
					errorComponent: NotFound
				})
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
		<div class="prose">
			<Md/>
		</div>
</template>
<style lang="scss">
	@import "highlight.js/scss/a11y-light.scss";
</style>
