module.exports = {
  siteMetadata: {
    title: "Wastach Range Aviation",
    titleTemplate: "Flight training along the Wasatch Front!",
    description:
      "Private Pilots License, Instrument Rating, Commercial Certificate, Certificated Flight Instructor, Certificated Flight Instructor – Instrument, Complex endorsements, Technically Advanced Aircraft training, Biennial Flight Reviews, Instrument Proficiency Checks, Rusty Pilot training, Discovery Flights",
    url: "https://wasatchrangeaviation.com", // No trailing slash allowed!
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
        url: `https://scottcardoza.com/wasatchrange/graphql`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["258030431"],
      },
    },
  ],
};
