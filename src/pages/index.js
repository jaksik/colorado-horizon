import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {data.allMarkdownRemark.edges.map((post, index) => (
      <>
      <Link to={post.node.fields.slug} style={{fontSize:`40px`, marginBottom:30}}>{post.node.frontmatter.title}</Link><br/>
      </>
    ))}

  </Layout>
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