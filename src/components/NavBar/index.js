import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './styles.css';
import Logo from '../../img/zachslogo.jpg';

class NavBar extends Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar expand="md" className={this.props.className}>
        <NavbarBrand>
          <Link to="#"><img id="zachsLogo" src={Logo} alt="the Zach's Shack logo"></img></Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
							<NavLink href={"#/Menu"} className="menuItem">Menu
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/About"} className="menuItem">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/Contact"} className="menuItem">Contact</NavLink>
						</NavItem>
          </Nav>
          <Nav>
            <NavItem href="https://www.instagram.com/brickandmotorpdx/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-instagram desktop-only"></span></NavItem>
            <NavItem href="https://www.facebook.com/brickandmotorpdx/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></NavItem>
            <NavItem href="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square desktop-only"></span></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  className: "sticky-top navbar-dark bg-dark",
}

export default NavBar;
