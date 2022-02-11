import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutPage from "../views/AboutPage";
import AllServices from "../views/AllServices";
import DetailInfoAboutServices from "../components/DetailInfoAboutServices";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/services',
    name: 'Services',
    component: AllServices
  },
  {
    path: '/services/:id',
    name: 'Service',
    component: DetailInfoAboutServices
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
