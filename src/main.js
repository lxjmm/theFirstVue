// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/*
  Q1.config属性设置，可以设置哪些；
  Q2.1px border;
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})


/*
	Q1.main.js  引入router,router是一个文件夹，里面还有一个index.js,为啥不用获取；

	main.js中,把helloworld抛出为一个全局路由，所以在footer中，router-view，会自动变成初始化的样子；
*/