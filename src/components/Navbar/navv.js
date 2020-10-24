import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import {
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import SocialConnect from '../Social/Connect'
import icon from '../../images/brand/icon.png'
import banner from '../../images/brand/banner.svg'
import './style.css'
import links from "./links.json"

const NavbarComponent = ({ siteTitle }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar
            light expand="md"
            className="background nav-wrapper d-block mb-5 position-absolute w-100"
            style={{ zIndex: `100` }}
        >


            <div className="d-flex align-items-center site-inner justify-content-between" style={{ maxWidth: `1200px` }}>
                {/* <img src={banner} style={{ marginBottom: `0`, maxWidth: `75%` }} className="" /> */}
                <span style={{ fontFamily: `cursive`, fontSize: 36, margin: 0 }}><Link to="/">Travel Colorado</Link></span>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem style={{ margin: `0 20px` }}>
                            <Link to="/blog" style={{ color: `white` }}>BLOG</Link>
                        </NavItem>
                        <NavItem style={{ margin: `0 20px` }}>
                            <Link to="/about" style={{ color: `white` }}>ABOUT</Link>
                        </NavItem>
                        <NavItem style={{ margin: `0 20px` }}>
                            <Link to="/contact" style={{ color: `white` }}>CONTACT</Link>
                        </NavItem>
                        <SocialConnect />




                        {links.map((dropdown, index) => (
                            <UncontrolledDropdown nav inNavbar className="mr-4">
                                <DropdownToggle nav caret className="p-0" style={{ fontFamily: `sans-serif`, fontSize: 23 }}>
                                    {dropdown.dropdown}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Row className="no-gutters">
                                        {dropdown.links.map((link, i) => (
                                            <Col xs="4">
                                                <DropdownItem>
                                                    <Link to="/estes-park">
                                                        {link.title}
                                                    </Link>
                                                </DropdownItem>
                                            </Col>
                                        ))}
                                    </Row>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        ))}
                    </Nav>
                </Collapse>

            </div>

        </Navbar>
    );
}

export default NavbarComponent;