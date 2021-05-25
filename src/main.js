import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import { firebaseConfig } from "./config/firebaseConfig";
import firebase from 'firebase';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faPlus, faTimes, faChevronLeft, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add( faSearch, faPlus, faTimes, faChevronLeft, faUser, faTrash );

firebase.initializeApp(firebaseConfig);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
