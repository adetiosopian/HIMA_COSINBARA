// scripts/generate-sitemap.js
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

/**
 * Generate sitemap.xml untuk Vue 3 + Vite
 * 
 * @param {Object} options
 * @param {string} options.siteUrl - Domain website (misal: https://advocare.himacosinbara.com)
 * @param {Array<string>} options.routes - Daftar route yang ingin dimasukkan
 * @param {string} [options.outputDir='public'] - Folder output sitemap.xml
 */
export function generateSitemap({
  siteUrl,
  routes,
  outputDir = 'public'
}) {
  if (!siteUrl) throw new Error('❌ siteUrl wajib diisi')
  if (!routes || !Array.isArray(routes) || routes.length === 0) {
    throw new Error('❌ routes harus array berisi path halaman')
  }

  const urlset = routes.map(path => {
    const loc = `${siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : '/' + path}`
    return `
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  }).join('')

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`

  const outputPath = resolve(process.cwd(), outputDir)
  if (!existsSync(outputPath)) mkdirSync(outputPath, { recursive: true })

  const filePath = resolve(outputPath, 'sitemap.xml')
  writeFileSync(filePath, sitemapContent.trim(), 'utf8')

  console.log(`✅ sitemap.xml berhasil dibuat di: ${filePath}`)
}
