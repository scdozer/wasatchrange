module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Tutorial`,
    description: `An example to learn how to source data from WordPress.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     tailwind: true,
    //     purgeOnly: [`src/css/style.css`],
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://scottcardoza.com/droneops/graphql`,
        schema: {
          typePrefix: `Wp`,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
