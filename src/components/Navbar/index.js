import React, { useState } from 'react';
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col
} from 'reactstrap';
import SocialConnect from '../Social/Connect'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ boxShadow: `0px 10px 2px #0000001f`}}>
      <Navbar color="light" light expand="md">
       <NavbarBrand href="/">Colorado Horizon</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto w-100" navbar>
            <Row className="no-gutters w-100">
              {/* <Col xs="12" className="d-md-flex justify-content-md-end">
              <SocialConnect />

              </Col> */}
              <Col xs="12" className="d-flex justify-content-center justify-content-md-end">
                <NavItem style={{ margin: `0 20px` }}>
                  <Link to="/blog" style={{ color: `black` }}>BLOG</Link>
                </NavItem>
                <NavItem style={{ margin: `0 20px` }}>
                  <Link to="/about" style={{ color: `black` }}>ABOUT</Link>
                </NavItem>
                <NavItem style={{ margin: `0 20px` }}>
                <SocialConnect />

                </NavItem>
               
              </Col>
            </Row>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;