import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";
import GoogleMapFrame from '../GoogleMapFrame';

class Contact extends Component {
  render() {
    return (
			<Container className= "Contact">
				<Row>
					<Col>
            <a href="tel:+15032334616">
              <h3>CALL IN ORDERS</h3>
              <h3>(503)-233-4616</h3>
            </a>
					</Col>
				</Row>
        <hr></hr>
        <Row>
					<Col>
            <a href="mailto:contact@zachsshack.com">
              <h3>FOR PARTIES OR EVENTS</h3>
              <h3>CONTACT@ZACHSSHACK.COM</h3>
            </a>
					</Col>
				</Row>
        <hr></hr>
				<Row>
					<Col>
						<GoogleMapFrame name="Zach's+Shack" location="Portland+OR"/>
					</Col>
				</Row>
        <hr></hr>
        <Row className="justify-content-center">
          <Col xs='1'>
						<a href="https://www.yelp.com/biz/zachs-shack-portland" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-yelp desktop-only"></span></a>
					</Col>
          <Col xs='1'>
            <a href="https://www.facebook.com/ZachsShackHotdogs/" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></a>
          </Col>
          <Col xs='1'>
            <a href="https://www.instagram.com/explore/locations/227503863/zachs-shack/" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-instagram desktop-only"></span></a>
          </Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
