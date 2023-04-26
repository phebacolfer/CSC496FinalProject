import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../pages/layout'
import Seo from '../pages/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    intro, header, img, imgContain
} from './ideas/index.module.css'

// Usage example in a GatsbyJS component
const Random = () => {

    const randomNumberInt = Math.floor(Math.random() * 2) + 1;
    const randomNumber = randomNumberInt.toString();

    const data = useStaticQuery(graphql`
    query ($randomNumber: String) {
        allMdx(filter: {frontmatter: {num: {eq: $randomNumber}}}) {
            nodes {
              frontmatter {
                desc
                title
                slug
                num
                cost
                supplies
                hero_image {
                  childImageSharp {
                    gatsbyImageData
                  }
                  id
                }
              }
            }
          } 
        }
  `)

    const filteredNodes = data.allMdx.nodes.filter(node => node.frontmatter.num === randomNumber);
    const title = filteredNodes.length > 0 ? filteredNodes[0].frontmatter.title : '';
    const actImg = filteredNodes.length > 0 ? filteredNodes[0].frontmatter.hero_image : '';
    const cost = filteredNodes.length > 0 ? filteredNodes[0].frontmatter.cost : '';
    const supplies = filteredNodes.length > 0 ? filteredNodes[0].frontmatter.supplies : '';
    const desc = filteredNodes.length > 0 ? filteredNodes[0].frontmatter.desc : '';

    return (
        <div>
            <Layout pageTitle={title}>
                <div className={imgContain}>
                    <GatsbyImage className={img}
                        image={getImage(actImg)}
                    />
                </div>
                <p className={header}>Cost Range: </p>
                <p className={intro}>{cost}</p>
                <p className={header}>Supplies: </p>
                <p className={intro}>{supplies}</p>
                <p className={header}>Description: </p>
                <p className={intro}>{desc}</p>
            </Layout>
        </div>
    );
};


export const Head = () => <Seo title="Your Random Activity!" />


export default Random;