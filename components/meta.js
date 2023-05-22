import Head from 'next/head'
import { CMS } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <meta name="title" content={CMS.name - CMS.title} />
      <meta name="description" content={CMS.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={CMS.favicon} />
      <link rel="shortcut icon" href={CMS.favicon} />

      <link rel="canonical" href={CMS.url} />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CMS.url} />
      <meta property="og:title" content={CMS?.name} />
      <meta property="og:description" content={CMS?.description} />
      <meta property="og:image" content={CMS.openGraph.image} />


      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={CMS.url} />
      <meta property="twitter:title" content={CMS.name} />
      <meta property="twitter:description" content={CMS.description} />
      <meta property="twitter:image" content={CMS.openGraph.image} />

      {/* <meta name="google-site-verification" content="8OLExMes5srC_J0gow9IorjUOUD3smQxKkNNNJhci-A" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
      <link rel="manifest" href="/favicon_io/site.webmanifest" />

      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#000000" />
      <link rel="mask-icon" href={CMS.favicon} color="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}

      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />

    </Head>
  )
}

export default Meta
