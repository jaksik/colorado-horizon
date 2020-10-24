import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{maxWidth:1200, margin:`0 auto`}}>{children}</main>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
