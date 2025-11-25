import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login.vue'
import Dashboard from '../components/panel.vue'
import kegiatan from '../components/kegiatan.vue'
import curhat from '../components/curhat.vue'
import anggota_baru from '../components/anggota_baru.vue'

const routes = [
  { path: '/', component: Login },
  { 
    path: '/login',
    component: Dashboard,
    meta: { requiresAuth: true }  // tanda bahwa butuh login
  },
  { path:'/kegiatan', component:kegiatan, meta: { requiresAuth: true }},
  { path:'/curhat', component:curhat, meta: { requiresAuth: true }},
  { path:'/anggota_baru', component:anggota_baru, meta: { requiresAuth: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔒 Guard untuk halaman yang butuh login
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (!token && to.path !== '/') {
    // kalau belum login dan bukan halaman login → redirect ke login
    next('/');
  } else if (token && to.path === '/') {
    // kalau sudah login tapi user buka login → redirect ke dashboard
    next('/login');
  } else {
    next(); // lanjut ke halaman yang diminta
  }
});





export default router
