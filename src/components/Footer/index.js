import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Row, Col } from 'reactstrap'
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share";
import banner from "../../images/brand/banner.svg"
import './style.css'

const Footer = ({ siteTitle, blogPosts }) => {
  const footerLinks = [
    {
      title: "About Us",
      link: "/about"
    },
    {
      title: "Contact Us",
      link: "/about"
    },
    {
      title: "Privacy Policy",
      link: "/about"
    },
    {
      title: "Cookie Policy",
      link: "/about"
    }
  ]

  const mountainTowns = [
    "Aspen",
    "Silverthorne",
    "Breckenridge",
    "Keystone",
    "Frisco",
    "Steamboat",
    "Winter Park"
  ]

  return (
    <footer>
      <Row className="no-gutters justify-content-center pt-5">
        <LinkedinIcon size={32} />
        <a href="https://www.instagram.com/epicnationalparks/">
          <InstapaperIcon size={32} className="ml-2" />
        </a>
        <a href="https://www.facebook.com/epicnationalparks">
          <FacebookIcon size={32} className="ml-2" />
        </a>
        <EmailIcon size={32} className="ml-2" />
        <a href="https://id.pinterest.com/epicnationalparks">
          <PinterestIcon size={32} className="ml-2" />
        </a>
        <TwitterIcon size={32} className="ml-2" />
      </Row>

      <Row className="no-gutters pt-5">
        <Col xs={8} sm={6} lg={3} className="offset-2 offset-sm-3 offset-lg-1 d-flex align-items-center mb-4 mb-lg-0">
          <img src={banner} width="100%" />
          {/* <span>Colorado Horizon</span> */}
        </Col>

        <Col xs={10} sm={5} lg={3} className="offset-1">
          <h4>Latest Blog Posts</h4>
          <ul>
            {mountainTowns.map((town, index) => (
              <li style={{color:`white`}}>{town}</li>
            ))}
          </ul>
        </Col>

        <Col xs={10} sm={5} lg={3} className="offset-1">
          <h4>About Us</h4>
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.link}  className="footer-link">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </Col>


        <Col xs={12} className="d-flex justify-content-center text-white mt-5 pt-3" style={{ borderTop: `1px solid white` }}>
          © {new Date().getFullYear()}, {siteTitle}
        </Col>

      </Row>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
