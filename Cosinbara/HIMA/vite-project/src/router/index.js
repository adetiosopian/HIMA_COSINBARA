import { createRouter, createWebHistory } from 'vue-router'

import home from '../page/home.vue'
import kegiatan from '../page/kegiatan.vue'
import profil from '../page/profil.vue'
import struktur from '../page/struktur.vue'
import daftar from '../page/daftar.vue'



const routes = [
  {  path: '/', component:home},
  {  path: '/kegiatan', component:kegiatan},
  {  path: '/profil', component:profil},
  {  path: '/struktur', component:struktur},
  {  path: '/daftar', component:daftar},


]
const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
