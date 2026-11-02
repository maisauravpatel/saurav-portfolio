import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://saurav-portfolio-sandy.vercel.app'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`

export default function SEO({ title, description, path = '', image = DEFAULT_IMAGE }) {
  const fullTitle = title ? `${title} | Saurav Kumar` : 'Saurav Kumar | AI & ML Developer'
  const fullUrl = `${BASE_URL}${path}`
  const desc = description || 'B.Tech CSE (AI & ML) student at ITS Engineering College. Building AI systems, full-stack apps, and Android applications.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Saurav Kumar Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@maisauravpatel" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      {/* Extra */}
      <meta name="author" content="Saurav Kumar" />
      <meta name="keywords" content="Saurav Kumar, AI ML developer, portfolio, React developer, full-stack, Android, ITS Engineering College" />
    </Helmet>
  )
}
