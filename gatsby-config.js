 /**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
  siteMetadata: {
    title: `Activity Planner`,
    pathPrefix: "/outings",
  },
  plugins: [    
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `ideas`,
      path: `${__dirname}/ideas/`,
    },
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
  'gatsby-plugin-react-helmet',
],
};

