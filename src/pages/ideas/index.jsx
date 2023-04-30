import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout'
import Seo from '../seo'
import { getImage } from 'gatsby-plugin-image'
import {
  grid_container, grid_item
} from './index.module.css'


const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="All Outing Ideas">
      <div className={grid_container}>
        {
          data.allMdx.nodes.map(node => (
            <div key={node.id} className={grid_item} style={{ backgroundImage:`url(${getImage(node.frontmatter.hero_image).images.fallback.src})`}}>
              <Link to={`../ideas/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { slug: DESC }}) {
      nodes {
        frontmatter {
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Outing Ideas" />

export default BlogPage