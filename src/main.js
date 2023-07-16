import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { router } from './router/index.js'
import "./assets/css/app.css";
// import BackToTop from 'vue-backtotop';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faKaggle, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { createHead  } from '@vueuse/head';
import { useStorage } from '@vueuse/core';
import projects from './data/projects.js';

library.add(faKaggle,faXmark,faGoogle)

export const createApp = ViteSSG(
    App,
    {
        routes: router,
        base: import.meta.env.BASE_URL,
        mode: "history",
    },
    ({ app, router, routes, isClient, initialState }) => {

        app.use(router)
            // .use(BackToTop)
            .component('font-awesome-icon', FontAwesomeIcon)
            .provide('imgProjectErrorUrl', new URL(`../src/assets/images/placeholder-project.jpg`, import.meta.url).href)
            .provide('linkClass' , 'text-indigo-600 dark:text-indigo-300')
        // const appTheme = useStorage("theme");

        // // Check what is the active theme and change theme when user clicks on the theme button in header.
        // if (
        //     appTheme === 'dark' &&
        //     document.querySelector('body').classList.contains('app-theme')
        // ) {
        //     document.querySelector('body').classList.add('bg-primary-dark');
        // } else {
        //     document.querySelector('body').classList.add('bg-secondary-light');
        // }

        router.beforeEach((to, from, next) => {
            var title = 'Soliver Mazo';
            var desc = 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills';
            var pType = to.name == 'Home' ? 'website' : 'article'
            var href = 'https://solivervmazo.github.io' + to.href;
            var imgUrl = new URL(`../src/assets/images/solivervmazo.png`, import.meta.url).href;
            if(to.name == 'SingleProject') {
            	const project = projects.find(x => x.project == to.params.project);
            	if(project && project.title ) desc = project.title;
            	if(project && project.details.tags && project.details.tags.tags) desc = desc + ` - ${ project.details.tags.tags.join(',')}`;
            }
            // update title
            // Array.from(
            // 	document.querySelectorAll('[data-vue-router-controlled-title]')
            // ).map((el) => el.setAttribute('content' , to.meta && to.meta.title ? to.meta.title : title  ));
            
            // // update desc
            // Array.from(
            // 	document.querySelectorAll('[data-vue-router-controlled-desc]')
            // ).map((el) => el.setAttribute('content' , to.meta && to.meta.description ? to.meta.description : desc  ));    
            
            // // update type
            // Array.from(
            // 	document.querySelectorAll('[data-vue-router-controlled-type]')
            // ).map((el) => el.setAttribute('content' , to.meta && to.meta.type ? to.meta.type : pType  ));    
            
            // // update url
            // Array.from(
            // 	document.querySelectorAll('[data-vue-router-controlled-url]')
            // ).map((el) => el.setAttribute('content' , to.meta && to.meta.url ? to.meta.url : href  ));

            
            // // update image
            // Array.from(
            // 	document.querySelectorAll('[data-vue-router-controlled-img]')
            // ).map((el) => el.setAttribute('content' , to.meta && to.meta.image ? to.meta.image : imgUrl  ));

            next()
        })
    }
)
