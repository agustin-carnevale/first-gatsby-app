/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/first-gatsby-app",
  siteMetadata:{
    title: "Agustin's Gatsby First Site",
    author:"Agustin"
  },
  plugins: [
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
]
}
