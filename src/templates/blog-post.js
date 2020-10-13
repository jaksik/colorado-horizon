import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareBar from "../components/ShareBar"
import "./blog-post.css"

export default ({ data }) => {
  
  const content = data.markdownRemark
  const siteMetadata = data.site.siteMetadata
  const img = siteMetadata.url + content.frontmatter.image.childImageSharp.fluid.src

  return (
    <Layout>
      <SEO
        title={content.frontmatter.title}
        description={content.frontmatter.description}
        keywords={content.frontmatter.tags}
        thumbnail={img}
        url = {siteMetadata.url}
      />

      <article>
        <h1>{content.frontmatter.title}</h1>
        <ShareBar />
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </article>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title  
        description
        tags
        date
        image {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`