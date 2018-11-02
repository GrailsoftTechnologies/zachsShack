import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './styles.css';

class AltNavBar extends Component {
  render() {
    return (
			<Container className="AltNavBar">
				<Row className="justify-content-between">
					<Col xs='3'>
						<Button href={"https://postmates.com/merchant/zachs-shack-portland"} color="warning">Order Here</Button>
					</Col>
          <Col xs='3' className="socialIcons">
						<a href="https://www.yelp.com/biz/zachs-shack-portland"><span className="footer-icon icon fa fa-yelp desktop-only"></span></a>
						<a href="https://www.facebook.com/ZachsShackHotdogs/"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></a>
						<a href="https://www.instagram.com/explore/locations/227503863/zachs-shack/"><span className="footer-icon icon fa fa-instagram desktop-only"></span></a>
					</Col>
				</Row>
				<Row>
					<Col>
						<Container>
							<Row>
								<Col>
									<a href="/"><h1>Zach's Shack</h1></a>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs="3">
						<a href="/menu"><h4>Menu</h4></a>
					</Col>
					<Col xs="3">
						<a href="/about"><h4>About</h4></a>
					</Col>
					<Col xs="3">
						<a href="/contact"><h4>Contact</h4></a>
					</Col>
				</Row>
			</Container>
    );
  }
}

AltNavBar.defaultProps = {
  className: "",
}

export default AltNavBar;
