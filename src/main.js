import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import LoadScript from 'vue-plugin-load-script';

// Vue.use(LoadScript);

// Vue.loadScript('././js/jquery.min.js')

// window.$ = window.jQuery = require('../public/js/jquery.min.js');


createApp(App)
.use(store)
.use(router)
.mount('#app')



