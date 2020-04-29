/*
 * @Author: PanFeng
 * @Date: 2020-04-28 13:13:37
 */
import Vue from 'vue'
import Router from 'vue-router';

import app from './App.vue';
import tinymce from './components/tinymce.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/', name: 'app', component: app},
        {path:'/tinymce', name: 'tinymce', component: tinymce},
        {path:'/HelloWorld', name: 'HelloWorld', component: HelloWorld}
    ]
})