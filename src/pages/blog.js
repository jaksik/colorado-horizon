import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import InfoLayout from "../components/InfoLayout"
import SEO from "../components/seo"
import BlogList from "../components/BlogList"
const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1 style={{fontSize:`3rem`, textAlign:`center`}}>The Colorado Horizon Blog</h1>
    <InfoLayout>
      <BlogList />
    </InfoLayout>

  </Layout>
)

export default BlogPage

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