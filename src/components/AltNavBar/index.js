import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './styles.css';
import Logo from '../../img/zachslogo.jpg';

class NavBar extends Component {
  constructor(props) {
  	super(props);
	}
  render() {
    return (
      <Container>
				<Row>
					<Col xs='3'>
						<Button href={"https://postmates.com/merchant/zachs-shack-portland"} color="success">Order Here</Button>
					</Col>
					<Col xs='9' id="socialIcons">
						<span className="footer-icon icon fa fa-yelp desktop-only"></span>
						<span className="footer-icon icon fa fa-facebook-square desktop-only"></span>
						<span className="footer-icon icon fa fa-instagram desktop-only"></span>
					</Col>
				</Row>
				<Row>
					<Col>
						<Container>
							<Row>
								<Col>
									<h1>Zach's Shack</h1>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
				<Row>
					<Col>
						<a href="/#/menu">Menu</a>
					</Col>
				</Row>
			</Container>
    );
  }
}

NavBar.defaultProps = {
  className: "",
}

export default NavBar;
