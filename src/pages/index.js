import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogList from "../components/BlogList"

const IndexPage = ({ data }) => (
 <>
  {/* <div style={{height:`100vh`, boverflow:`hidden`, position:`absolute`, zIndex:-1}}>
  </div> */}
    <Image />

  <Layout>
    <SEO title="Colorado Horizon" />
    <div style={{minHeight:`100vh`}} className="d-flex justify-content-center align-items-center">
      <h1 style={{color:`white`, fontSize:`4rem`, fontWeight:`lighter`, textAlign:`center`}}>Experience Colorado</h1>
    </div>
    <BlogList/>
  </Layout>
 </>
)

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
`