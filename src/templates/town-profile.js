import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareBar from "../components/Social/Share"
import "./blog-post.css"
import svg from '../images/border.svg'
import { Row, Col } from 'reactstrap'
export default ({ data }) => {

  const content = data.markdownRemark
  const siteMetadata = data.site.siteMetadata
  const coverImage = content.frontmatter.image.childImageSharp.fluid
  const thumbnail = siteMetadata.url + coverImage.src

  const filler = [
    "Skiing",
    "Eating",
    "Shopping",
    "Biking",
    "Fishing"
  ]
  return (
    <Layout>
      <SEO
        title={content.frontmatter.title}
        description={content.frontmatter.description}
        keywords={content.frontmatter.tags}
        thumbnail={thumbnail}
        url={siteMetadata.url}
      />
      <Img fluid={coverImage} style={{ position: `fixed`, width: `100%`, zIndex: -1 }} />

      <div className="site-wrapper">

        <div style={{ maxWidth: 1200, margin: `0 auto` }}>
          <div style={{ height: `100vh`, display: `flex`, alignItems: `center` }}>

            <div style={{ background: ` rgba(255,255,255,0.85)`, padding: 50, maxWidth: 700, borderRadius: 15 }}>
              <span style={{ fontSize: `4rem` }}>Breckenridge</span>
              <div style={{ display: `flex`, justifyContent: `start`, marginBottom: 20 }}>

                <span style={{ color: `gray`, marginRight:25 }}>Elevation: <br />10,482 ft</span>
                <span style={{ color: `gray`, marginRight:25 }}>Population: <br />6,452</span>
                <span style={{ color: `gray` }}>Founded: <br />1845</span>

              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lacus pellentesque arcu mollis auctor at eu tortor. Vivamus id leo in dolor facilisis aliquam. Nam condimentum porttitor ligula vitae feugiat.
            </p>
            </div>
          </div>

        </div>

        <div style={{ background: `white` }}>
          <img src={svg} style={{ width: `100%`, marginTop: -50 }} className="section-border" />
          <div style={{ maxWidth: 1200, margin: `0 auto` }}>
            <Row className="no-gutters">
              <Col xs="12" md="4" className="p-3">
              <Img fluid={coverImage} />
              <span className="text-center">Things to do</span>
              </Col>
              <Col xs="12" md="4" className="p-3">
              <Img fluid={coverImage} />
              <span className="text-center">Things to do</span>
              </Col>
              <Col xs="12" md="4" className="p-3">
              <Img fluid={coverImage} />
              <span className="text-center">Things to do</span>
              </Col>
            </Row>
          </div>

        </div>
      </div>



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