import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import vuetify from './plugins/vuetify';
import currencyFilter from './plugins/currencyfilter';

Vue.config.productionTip = false;

new Vue({
  // router,
  vuetify,
  currencyFilter,
  render: (h) => h(App),
}).$mount('#app');
