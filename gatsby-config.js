module.exports = {
  siteMetadata: {
    title: 'Viveralia',
    author: 'Iván Viveros',
    siteUrl: 'https://viveralia.mx',
    description:
      "Hi there, I'm Iván. A JS Fullstack Developer, mainly focused on Frontend, who loves crafting the most engaging and delightful digital experiences.",
    image: 'https://i.ibb.co/Q8nT4GL/viveralia.png',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
}
