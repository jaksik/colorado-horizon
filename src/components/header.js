import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'; import { Link } from "gatsby"
import icon from '../../images/brand/icon.png'
import links from '../../data/sitemap.json'
import banner from '../../images/brand/banner.svg'
import './style.css'

const NavbarComponent = ({ siteTitle }) => {


  return (
    <div className="nav-wrapper">
      <Navbar
        dark expand="md"
        className="background"
      >

        <NavbarBrand href="/" className="mr-auto d-flex align-items-center nav-brand-image">
          <img src={icon} width="50px" className="nav-brand-icon" />
          <img src={banner} style={{ marginBottom: `0` }} className="nav-brand-banner" />
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <div className="d-flex justify-content-end h-100 w-100">
            <Nav navbar>
  
              {links.mainLinks.map((mainLink, ind) => (
                <NavItem key={ind} style={{ margin: `0 20px` }}>
                  <Link to={mainLink.link} style={{ color: `white` }}>{mainLink.title}</Link>
                </NavItem>
              ))}

            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;