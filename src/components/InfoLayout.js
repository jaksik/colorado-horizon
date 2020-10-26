import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import "./info-layout.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitlQuery {
        site {
            siteMetadata {
              title
            }
        }
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

    const cardStyle = { 
        padding: 40, 
        boxShadow: `0 1px 10px rgba(72,139,201,.2)`, 
        borderRadius: 15 
    }

    const categories = ["Mountain Towns", "Things To Do", "Front Range", "Skiing", "Mountain Biking"]

    return (
        <Row className="no-gutters">
            <Col xs="12" lg="8" className="pr-lg-3">
                {children}
            </Col>
            <Col xs="12" sm="6" lg="4" className="pl-lg-3">
                <div style={cardStyle}>
                    <Img fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid} />
                    <h3 style={{ textAlign: `center`, margin:`1.4rem 0` }}>The {data.site.siteMetadata.title} Story</h3>

                    <span>
                        <blockquote><b>"I wasn't born here, but I got here as soon as I could"</b></blockquote>

                        ...is something your bound to hear sooner or later after you've spent some time in Colorado. Sure, it would have been nice to grow up living in the rocky mountains, but I grew up in Houston, so I got here as soon as I could.                    </span><br />
                    <div className="w-100 d-flex justify-content-center mt-4">
                        <Link to={data.markdownRemark.fields.slug}>
                            <Button color="success">Learn More</Button>
                        </Link>
                    </div>
                </div>
                {/* <div style={cardStyle} className="mt-5 text-center">
                        <h3>Categories</h3>
                        <ul>
                            {categories.map((category, index) => (
                                <li>
                                    <Link to="/">
                                    {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>*/}

                <div style={cardStyle} className="mt-5 text-center category-box">
                    <h3>Table of Contents</h3>
                    <ul>
                        {categories.map((category, index) => (
                            <li>
                                <Link to="/">
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </Col>
        </Row>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
