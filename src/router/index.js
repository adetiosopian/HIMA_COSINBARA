import { createRouter, createWebHistory } from 'vue-router'

import home from '../page/home.vue'
import kegiatan from '../page/kegiatan.vue'
import profil from '../page/profil.vue'
import struktur from '../page/struktur.vue'
import toko from '../page/toko.vue'
import pembelian from '../page/pembelian.vue'
import daftar from '../page/daftar.vue'
import advo from '../page/advo.vue'
import admin from '../page/admin.vue'


const routes = [
  {  path: '/', component:home},
  {  path: '/kegiatan', component:kegiatan},
  {  path: '/profil', component:profil},
  {  path: '/struktur', component:struktur},
  {  path: '/toko', component:toko},
  {  path: '/pembelian', component:pembelian},
  {  path: '/daftar', component:daftar},
  {  path: '/advo', component:advo},
  {  path: '/admin', component:admin},

]
const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
