import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogList from "../components/BlogList"
import landing from "../images/landing.jpg"

const IndexPage = ({ data }) => (
  <>
    {/* <div style={{height:`100vh`, boverflow:`hidden`, position:`absolute`, zIndex:-1}}>
  </div> */}
    <Image />

    <Layout>
      <SEO title="Colorado Horizon" />
      <div style={{ minHeight: `100vh` }} className="d-flex justify-content-center align-items-center">
        <h1 style={{ color: `white`, fontSize: `4rem`, fontWeight: `lighter`, textAlign: `center` }}>Experience Colorado</h1>
      </div>
      <BlogList/>
      {/* <div style={{ minHeight: `100vh` }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837024.4313730025!2d-107.79414676222271!3d38.97644701434441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado!5e1!3m2!1sen!2sus!4v1603595549686!5m2!1sen!2sus" height="450" frameborder="0" style={{ width: `100%` }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <Row className="no-gutters">
          <Col xs={12} sm="6">
            <img src={landing} style={{ width: `100%` }} />
          </Col>
          <Col xs={12} sm="6" className="p-2 d-flex text-center align-items-center">
            <h3>Experience Colorado Like You Never Have Before</h3>
          </Col>
          <Col xs={12} sm="6" className="p-2 d-flex text-center align-items-center">
            <h3>Experience Colorado Like You Never Have Before</h3>
          </Col>


          <Col xs={12} sm="6">
            <img src={landing} style={{ width: `100%` }} />
          </Col>


          <Col xs={12} sm="6">
            <img src={landing} style={{ width: `100%` }} />
          </Col>
          <Col xs={12} sm="6" className="p-2 d-flex text-center align-items-center">
            <h3>Experience Colorado Like You Never Have Before</h3>
          </Col>
        </Row>
        <BlogList />
      </div> */}
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