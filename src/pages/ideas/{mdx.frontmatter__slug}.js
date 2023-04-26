import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../layout'
import Seo from '../seo'
import {
  intro, header, img, imgContain
} from './index.module.css'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={imgContain}>
        <GatsbyImage className = {img}
          image={getImage(data.mdx.frontmatter.hero_image)}
        />
      </div>
      <p className={header}>Cost Range: </p>
      <p className={intro}>{data.mdx.frontmatter.cost}</p>
      <p className={header}>Supplies: </p>
      <p className={intro}>{data.mdx.frontmatter.supplies}</p>
      <p className={header}>Description: </p>
      <p className={intro}>{data.mdx.frontmatter.desc}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        cost
        desc
        supplies
        slug
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost