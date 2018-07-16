import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap';
import './styles.css';
import Logo from '../../img/zachsnav.jpeg';

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
      <Navbar inverse fluid collapseOnSelect className={this.props.className}>
        <Navbar>
          <NavbarBrand>
            <Link to="/"><img id="zachLogo" src={Logo} alt="the Zach's Shack logo"></img></Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav pullLeft>
            <NavItem href={"#/Menu"} className="menuItem">Menu</NavItem>
            <NavItem href={"#/About"} className="menuItem">About</NavItem>
            <NavItem href={"#/Contact"} className="menuItem">Contact</NavItem>
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
  className: "navigationBar navbar-fixed-top",
}

export default NavBar;
