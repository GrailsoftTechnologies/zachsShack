import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";

class Contact extends Component {
  render() {
    return (
			<Container className= "Contact">
				<Row>
					<Col>
						<h1><a href="tel:+15032334616">CALL (503)-233-4616</a></h1>
					</Col>
				</Row>
        <Row>
					<Col>
						<h3><a href="mailto:contact@zachsshack.com">EMAIL CONTACT@ZACHSSHACK.COM</a></h3>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="mapBox">
	            <iframe
								title="googleMap"
	              height="400px"
	              width="100%"
	              frameborder="0"
	              styles="border:0"
	              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDozY9mgvE7tAZjIUB2d51Ss5EbmKBeKRM
	                &q=Zach's+Shack,Portland+OR
	                &zoom=14"
	              allowfullscreen>
	            </iframe>
	          </div>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
