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
        <NavbarBrand href="#">
          <img id="zachsLogo" src={Logo} alt="the Zach's Shack logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
							<NavLink href={"#/Menu"} className="menuItem" onClick={this.toggle}>Menu
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/About"} className="menuItem" onClick={this.toggle}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/Contact"} className="menuItem" onClick={this.toggle}>Contact</NavLink>
						</NavItem>
          </Nav>
          <Nav className="socialIcons">
						<NavItem>
							<NavLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-instagram desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square desktop-only"></span></NavLink>
						</NavItem>
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
