export default {
    methods: {
        projectUrl(string) {
			return new URL(`../data/projects/${string}`, import.meta.url).href;
		}
    }
}