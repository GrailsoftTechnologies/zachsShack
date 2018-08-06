import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './styles.css';

class AltNavBar extends Component {
  constructor(props) {
  	super(props);
	}


  render() {
    return (
      <div className="AltNavBar">
				<Container>
					<Row>
						<Col xs='3'>
							<Button href={"https://postmates.com/merchant/zachs-shack-portland"} color="secondary">Order Here</Button>
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
										<a href="/#"><h1>Zach's Shack</h1></a>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
					<Row>
						<Col md="3"></Col>
						<Col>
							<a href="/#/menu">Menu</a>
						</Col>
						<Col>
							<a href="/#/about">About</a>
						</Col>
						<Col>
							<a href="/#/contact">Contact</a>
						</Col>
						<Col md="3"></Col>
					</Row>
				</Container>
			</div>
    );
  }
}

AltNavBar.defaultProps = {
  className: "",
}

export default AltNavBar;
