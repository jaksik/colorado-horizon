import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"

const BlogList = () => {
  const data = useStaticQuery(graphql`
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
  `)

  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //     return <div>Picture not found</div>
  // }

  const cardImageContainer = {
    height:250,
    overflow:`hidden`
  }

  const cardTextContainer = {
    padding:`10px 30px`
  }

  return (
    <Row className="no-gutters">
      {data.allMarkdownRemark.edges.map((post, index) => (
        <Col xs="12" md="6" className="p-3">
          <div style={{ borderRadius: 15, boxShadow: `0 1px 10px rgba(72,139,201,.2)`, maxWidth: 450, margin:`0 auto`, overflow:`hidden` }}>
            <Link to={post.node.fields.slug} style={{ fontSize: `40px`, marginBottom: 30 }}>
              <div style={cardImageContainer}>
                <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} style={{minHeight:`100%`}}/>
              </div>
              <div style={cardTextContainer}>
                <p style={{ fontSize:26, marginBottom:0 }}>{post.node.frontmatter.title}</p>
              </div>
            </Link>
          </div>
          <br />
        </Col>
      ))}
    </Row>
  )
}

export default BlogList
