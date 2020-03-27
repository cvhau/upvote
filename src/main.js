import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';
import './app.scss';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
