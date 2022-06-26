import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/main-page'
// import ProductCard from '../views/product-card'
import Catalog from '../components/catalog'
import ProductPage from '../components/product-page'
import OrderPage from '../components/order-page'
import MainWrapper from '../components/main-wrapper'
import ComentPage from '../components/comment-page'

const routes = [
  {
    path: '/',
    name: 'main-wrapper',
    component: MainWrapper,
    children: [
      {
        path: '/',
        name: 'main-page',
        component: MainPage
      },
      {
        path: '/catalog',
        name: 'catalog',
        component: Catalog
      },
      {
        path: '/product',
        name: 'product',
        component: ProductPage
      },
      {
        path: '/commentaries',
        name: 'comment-page',
        component: ComentPage
      }
    ]
  },
  {
    path: '/order',
    name: 'order-page',
    component: OrderPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
