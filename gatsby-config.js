module.exports = {
  siteMetadata: {
    title: 'Viveralia',
    author: 'Iván Viveros',
    siteUrl: 'https://viveralia.mx',
    description:
      "Hi there, I'm Iván. A JS Fullstack Developer, mainly focused on Frontend, who loves crafting the most usable and enjoyable digital experiences.",
    image: '/cover.jpg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cousine`,
            subsets: [`latin`],
            variants: [`400`],
          },
          {
            family: `Heebo`,
            subsets: [`latin`],
            variants: [`400`, `500`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Viveralia`,
        short_name: `Viveralia`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
