// scripts/generate-robots.js
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

/**
 * Generate robots.txt untuk proyek Vue 3 + Vite
 * 
 * @param {Object} options
 * @param {string} options.siteUrl - Domain website (misal: https://advocare.himacosinbara.com)
 * @param {boolean} [options.allowAll=true] - Apakah semua halaman boleh diindeks
 * @param {string[]} [options.disallowPaths=[]] - Daftar path yang dilarang diindeks
 * @param {boolean} [options.includeSitemap=true] - Sertakan URL sitemap
 * @param {string} [options.outputDir='public'] - Folder output robots.txt
 */
export function generateRobotsTxt({
  siteUrl,
  allowAll = true,
  disallowPaths = [],
  includeSitemap = true,
  outputDir = 'public'
}) {
  if (!siteUrl) {
    throw new Error('❌ siteUrl wajib diisi, misalnya: https://advocare.himacosinbara.com')
  }

  const lines = []
  lines.push(`# robots.txt - Generated automatically`)
  lines.push(`User-agent: *`)

  if (allowAll && disallowPaths.length === 0) {
    lines.push(`Allow: /`)
  } else {
    disallowPaths.forEach(p => {
      lines.push(`Disallow: ${p}`)
    })
  }

  if (includeSitemap) {
    lines.push(``)
    lines.push(`# Sitemap untuk mesin pencari`)
    lines.push(`Sitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml`)
  }

  lines.push(``)
  lines.push(`# Generated on ${new Date().toISOString()}`)

  // Pastikan folder public ada
  const outputPath = resolve(process.cwd(), outputDir)
  if (!existsSync(outputPath)) mkdirSync(outputPath, { recursive: true })

  // Tulis file robots.txt
  const filePath = resolve(outputPath, 'robots.txt')
  writeFileSync(filePath, lines.join('\n'), 'utf8')

  console.log(`✅ robots.txt berhasil dibuat di: ${filePath}`)
}