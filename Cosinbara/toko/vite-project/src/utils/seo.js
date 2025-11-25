
export function setSEO({
  title,
  description,
  url,
  image = '/logo-hima.ico',
  type = 'website',
  schema = null
}) {
  const head = document.querySelector('head')

  // Hapus meta lama jika ada
  const oldTags = head.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]')
  oldTags.forEach(tag => tag.remove())

  // Title
  document.title = title

  // Meta dasar
  const metas = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]

  metas.forEach(m => {
    const meta = document.createElement('meta')
    Object.entries(m).forEach(([k, v]) => meta.setAttribute(k, v))
    head.appendChild(meta)
  })
  // Tambahkan JSON-LD Schema (rekomendasi SEO modern)
  if (schema) {
    // Hapus schema lama
    const oldSchema = head.querySelector('script[type="application/ld+json"]')
    if (oldSchema) oldSchema.remove()

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    head.appendChild(script)
  }
}