// scripts/generate-sitemap.mjs
import { generateSitemap } from './generate-sitemap.js'

generateSitemap({
  siteUrl: 'https://sinstore.himacosinbara.com',
  routes: [
    '/',            // Beranda
    '/pembelian',      // Profil
  ],
  outputDir: 'public'
})