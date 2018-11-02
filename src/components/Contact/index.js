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
              <h1>CALL IN ORDERS</h1>
              <h1>(503)-233-4616</h1>
            </a>
					</Col>
				</Row>
        <hr></hr>
        <Row>
					<Col>
            <a href="mailto:contact@zachsshack.com">
              <h1>FOR PARTIES OR EVENTS</h1>
              <h1>CONTACT@ZACHSSHACK.COM</h1>
            </a>
					</Col>
				</Row>
        <hr></hr>
				<Row>
					<Col>
						<GoogleMapFrame name="Zach's+Shack" location="Portland+OR"/>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
