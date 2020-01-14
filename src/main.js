import Vue from 'vue';
import Antd, { Button, DatePicker } from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Button);
Vue.use(DatePicker);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
