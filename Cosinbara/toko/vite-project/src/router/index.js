import { createRouter, createWebHistory } from 'vue-router'
import pembelian from '../page/pembelian.vue'
import toko from '../page/toko.vue'



const routes = [
  {  path: '/', component:toko},
  {  path: '/pembelian', component:pembelian},


]
const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
