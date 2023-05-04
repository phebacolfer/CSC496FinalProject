 /**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
  pathPrefix: "/CSC496FinalProject",
  siteMetadata: {
    title: `Activity Planner`,
    siteUrl: `https://www.github.com/phebacolfer/CSC496FinalProject`
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

