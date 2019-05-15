import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/vueProducts'
import Product from '@/components/vueProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/search/:name',
      name: 'Search',
      component: resolve => require(['@/components/vueSearch'], resolve)
    }
  ]
})
