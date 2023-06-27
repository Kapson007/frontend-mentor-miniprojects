import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import NewsletterFormView from '../view/NewsletterFormView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/newsletter-form',
            component: NewsletterFormView,
        },
    ],
    linkActiveClass: 'active-link',
})
