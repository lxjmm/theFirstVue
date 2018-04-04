import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'
*/
import guangjie from '@/components/guangjie'
import s from '@/components/s'
import inde from '@/components/index'
import buys from '@/components/buys'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/guangjie',
      name: 'gaungjie',
      component: guangjie
    },
    {
	  path:'/',
	  name:'index',
	  component:inde
    },
    {
      path:'/s',
      name:'s',
      component:s
    },
    {
      path:'/buys',
      name:'buys',
      component:buys
    },
    {
      path:'/my',
      name:'my',
      component:my
    },
  ]
})
