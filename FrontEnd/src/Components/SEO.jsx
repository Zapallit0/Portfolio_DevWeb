import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.jhersvin.com'
const SITE_NAME = 'Jhersvin — Desarrollo Web Fullstack'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Jhersvin',
      url: BASE_URL,
      jobTitle: 'Desarrollador Web Fullstack',
      knowsAbout: ['React', 'Node.js', 'JavaScript', 'Desarrollo Web'],
    },
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: BASE_URL,
    },
  ],
}

function SEO({ title, description, path = '/', includeStructuredData = false }) {
  const url = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* JSON-LD */}
      {includeStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
