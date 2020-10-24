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

      <div className="site-inner" style={{ maxWidth: 1200 }}>
        <article>
          <div className="blog-cover-wrapper d-flex align-items-center">
            <div className="cover-content-wrapper">
              <h1 className="mb-1" style={{ fontSize: `4rem` }}>Breckenridge</h1>
              <div style={{ width: `100%`, display: `flex` }}>
                <div style={{ float: `left`, borderRight: `1px solid gray` }}>
                  <span style={{ color: `gray` }}>Elevation: <br />10,482 ft</span>
                </div>
                <div style={{ float: `left`, borderRight: `1px solid gray` }}>
                  <span style={{ color: `gray` }}>Population: <br />6,452</span>
                </div>
                <div style={{ float: `left`, borderRight: `1px solid gray` }}>
                  <span style={{ color: `gray` }}>Founded: <br />1845</span>
                </div>
              </div>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lacus pellentesque arcu mollis auctor at eu tortor. Vivamus id leo in dolor facilisis aliquam. Nam condimentum porttitor ligula vitae feugiat.
            </p>
            </div>

          </div>
          {/* <h1 style={{ textAlign: `center` }}>{content.frontmatter.title}</h1>
        <ShareBar />
    */}

        </article>
      </div>

      <div style={{ background: `white` }}>

        <div className="site-inner pt-3" style={{ maxWidth: 1200, margin: `0 auto` }}>
          <Row className="no-gutters">
            <Col xs="12" md="6">
              <h2>Things to do in Breckenridge</h2>
              <ol>
                {filler.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ol>
              <Link to="/">See the full list:<br />37 things to do in Breckenridge</Link>
            </Col>
            <Col xs="12" md="6">
              <Img fluid={coverImage} />

            </Col>
            <Col xs="12" md="6">
              <Img fluid={coverImage} />

            </Col>
            <Col xs="12" md="6">
              <h2>Best Places to Stay</h2>
              <ol>
                {filler.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ol>
              <Link to="/">See the full list:<br />37 things to do in Breckenridge</Link>
            </Col>
            <Col xs="12" md="6">
              <h2>Towns near Breckenridge</h2>
              <ol>
                {filler.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ol>
              <Link to="/">See the full list:<br />37 things to do in Breckenridge</Link>
            </Col>
            <Col xs="12" md="6">
              <Img fluid={coverImage} />

            </Col>
            <Col xs="12" md="6">
              <h2>Check Lodging Rates</h2>
              
            </Col>
            <Col xs="12" md="6">
            <h2>Find Cheap Flights</h2>


            </Col>
          </Row>
          
          {/* <div dangerouslySetInnerHTML={{ __html: content.html }} /> */}
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