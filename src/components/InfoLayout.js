import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import "./layout.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitlQuery {
        markdownRemark(frontmatter: {category: {eq: "about"}}) {
            id
            fields {
                slug
            }
            frontmatter {
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
  `)

    const cardStyle = { padding: 40, boxShadow: `0 1px 10px rgba(72,139,201,.2)`, borderRadius: 15 }

    const categories = ["Mountain Towns", "Things To Do", "Front Range", "Skiing", "Mountain Biking"]

    return (
        <Row className="no-gutters">
            <Col xs="12" lg="8">
                {children}
            </Col>
            <Col xs="4" lg="4">
                <div style={{ padding: 20 }}>
                    <div style={cardStyle}>
                        <Img fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid} />
                        <h3>About Colorado Horizon</h3>

                        <span className="pt-2 pb-2">
                            Pellentesque mi nulla, mollis quis iaculis non, consequat in urna. Mauris ac lacus neque. Ut ultricies blandit egestas. Nullam consectetur enim dolor, sodales posuere neque dictum a.
                    </span><br />
                        <div className="w-100 d-flex justify-content-center mt-4">
                        <Link to={data.markdownRemark.fields.slug}>
                            <Button color="success">Learn More</Button>
                        </Link>
                        </div>
                    </div>
                    <div style={cardStyle} className="mt-5">
                        <h3>Categories</h3>
                        <ul>
                        {categories.map((category, index) => (
                            <li>
                                {category}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </Col>
        </Row>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
