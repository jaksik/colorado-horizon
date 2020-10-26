import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "aspen-2.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div
    style={{ width: `100%`, position: `absolute`, height: `100vh`, overflow:`hidden`, zIndex: -1 }}
    >
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ width: `100%`, minHeight:`100vh`}}
      />
    </div>
  )
}

export default Image
