// scripts/generate-robots.mjs
import { generateRobotsTxt } from './generate-robots.js'

generateRobotsTxt({
  siteUrl: 'https://sinstore.himacosinbara.com',
  allowAll: true,
  disallowPaths: [
    '/admin/'
  ],
  includeSitemap: true,
  outputDir: 'public'
})
