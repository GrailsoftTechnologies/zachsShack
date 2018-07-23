import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './styles.css';
import Logo from '../../img/zachslogo.jpg';

class NavBar extends Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
	this.toggle2 = this.toggle2.bind(this);
  this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
	toggle2() {
		if (this.state.isOpen) {
			this.setState({
	      isOpen: false
	    });
		}
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
							<NavLink href={"#/Menu"} className="menuItem" onClick={this.toggle2}>Menu
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/About"} className="menuItem" onClick={this.toggle2}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/Contact"} className="menuItem" onClick={this.toggle2}>Contact</NavLink>
						</NavItem>
          </Nav>
          <Nav className="socialIcons">
						<NavItem>
							<NavLink href="https://www.instagram.com/explore/locations/227503863/zachs-shack/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-instagram desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.facebook.com/ZachsShackHotdogs/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.yelp.com/biz/zachs-shack-portland" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-yelp desktop-only"></span></NavLink>
						</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  className: "sticky-top navbar-dark bg-dark Navbar",
}

export default NavBar;
