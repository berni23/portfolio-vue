

import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'


import HomeView from "../views/HomeView.vue"
const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'home',
        component: HomeView,
        alias:'/home'
    }
]

const
    router = createRouter({
        scrollBehavior(to,from,savedPosition){

            if(to.hash){
                if(to.hash=='#landing'){
                    return{top:0,

                        behavior:'smooth'
                    }
                }
                return {
                el: to.hash,
                top:100,
                behavior:'smooth'
            }
            }
        },
        history: createWebHistory(process.env.BASE_URL),
        routes
    });


export default router
