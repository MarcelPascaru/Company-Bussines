import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import VueRouter from 'vue-router';
import router from "@/router";
import '@/scss/app.scss';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUi, locale);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
