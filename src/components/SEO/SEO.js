import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEO = ({ localTitle, localDesc }) => {
  // useStaticQuery Hook to get data, destructured
  const {
    site: {
      siteMetadata: { siteTitle, siteDesc, siteUrl, image },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle: title
          siteDesc: description
          siteUrl
          image
        }
      }
    }
  `)

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{`${localTitle} | ${siteTitle}` || siteTitle}</title>
      <meta name="description" content={localDesc || siteDesc} />
      <meta name="image" content={image} />
      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${localTitle} | ${siteTitle}`} />
      <meta name="twitter:description" content={localDesc || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      {/* Facebook Cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${localTitle} | ${siteTitle}`} />
      <meta property="og:description" content={localDesc || siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="250" />
    </Helmet>
  )
}

export default SEO
