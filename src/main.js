import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import router from './router';

// import Vuetify from 'vuetify'
import App from './App.vue';

import vuetify from './plugins/vuetify';

// 使用封装网络请求库axios
Vue.use(VueAxios, axios);
// 使用Vue Router
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app');
