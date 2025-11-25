// scripts/generate-sitemap.mjs
import { generateSitemap } from './generate-sitemap.js'

generateSitemap({
  siteUrl: 'https://himacosinbara.com',
  routes: [
    '/',            // Beranda
    '/profil',      // Profil
    '/agenda',      // Agenda
    '/struktur',    // Struktur organisasi
    '/kegiatan'     // Kegiatan
  ],
  outputDir: 'public'
})