import React from "react"
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blog.css"

export default ({ data }) => {
  const info = data.markdownRemark

  return (
    <Layout>
      <SEO title={info.frontmatter.title} keywords={info.frontmatter.tags} />

      <div className="blog-content-container">
        <h1 className="blog-post-title">{info.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: info.html }} />
      </div>


    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title  
        description
        tags
        date
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`