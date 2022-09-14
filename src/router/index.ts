import {createRouter, createWebHistory} from "vue-router";

import Book from '../pages/BookInfo.vue'

const routes = [
    {
        path: '/',
        name: '图书推荐信息',
        component: Book
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;