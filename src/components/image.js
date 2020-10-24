import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "landing.jpg" }) {
        childImageSharp {
          fluid(quality: 70) {
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
        style={{ width: `100%`}}
      />
    </div>
  )
}

export default Image
