// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from 'vue-router';
import shouye from './components/shouye';
import shangcheng from './components/shangcheng'
import company from './components/company'
import companyIntroduce from './components/companyIntroduce'
import leader from './components/leader'
import announcement from './components/announcement'
import Login from './components/Login'
import owner from './components/owner'
//import second_HW from './components/second_HW';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

const routes = [
	{path:'/',component:App},
	{path:'/shouye',component:shouye},
	{path:'/shangcheng',component:shangcheng},
	{path:'/company',component:company},
	{path:'/companyIntroduce',component:companyIntroduce},
	{path:'/leader',component:leader},
	{path:'/announcement',component:announcement},
	{path:'/Login',component:Login},
	{path:'/owner',component:owner},
];
const routers = new VueRouter({
	routes
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  routers,
  components: { App,shouye,shangcheng ,company,announcement,leader,companyIntroduce,Login,owner},
  template: '<App/>',
});
