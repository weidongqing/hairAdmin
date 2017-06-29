import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index'
import App from './App'
import router from './router'

Vue.use(Vuex);
const vuex_store = new Vuex.Store({
    state: {
        user_name: "",
        user_password: ""
    },
    mutations: {
        showUserInfo(state){
            //console.log(state.user_password);
        }
    }
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: vuex_store,
    template: '<App/>',
    components: {App}
});
