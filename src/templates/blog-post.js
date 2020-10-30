import React from "react"
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import InfoLayout from "../components/InfoLayout"
import SEO from "../components/seo"
import HorzShareBar from "../components/Social/HorzShareBar"

import "./blog.css"

export default ({ data }) => {
  const info = data.markdownRemark

  return (
    <Layout>
      <SEO title={info.frontmatter.title} keywords={info.frontmatter.tags} />

      <InfoLayout>


        <div className="blog-content-container">
          <h1 className="blog-post-title text-center mt-4">{info.frontmatter.title}</h1>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="post-meta-item">
              <em>written By:</em><br />
              <a href="https://facebook.com/connorjaksik" target="_blank" rel="noopener noreferrer">Connor Jaksik</a>
            </div>
            <div className="post-meta-item">
              <em>published on:</em><br />
              <b>{info.frontmatter.date}</b>
            </div>
            <div className="post-meta-item d-none d-md-block">/</div>
            <div className="post-meta-item d-none d-md-block">
              <HorzShareBar />
            </div>
          </div>
          <div className="d-md-none mb-4">
            <HorzShareBar />
          </div>
          <Img fluid={info.frontmatter.image.childImageSharp.fluid} style={{ marginBottom: 30 }} />
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </div>
      </InfoLayout>


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
        date(formatString: "MM/DD/YYYY")
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