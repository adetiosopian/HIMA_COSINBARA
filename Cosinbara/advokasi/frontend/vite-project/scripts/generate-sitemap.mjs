// scripts/generate-sitemap.mjs
import { generateSitemap } from './generate-sitemap.js'

generateSitemap({
  siteUrl: 'https://advocare.himacosinbara.com',
  routes: [
    '/',            // Beranda

  ],
  outputDir: 'public'
})