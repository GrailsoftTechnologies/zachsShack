import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './styles.css';

class AltNavBar extends Component {
  render() {
    return (
			<Container
        className="AltNavBar"
        style={{backgroundColor: this.props.background, color: this.props.text}}>
        <style>
          {`
            .AltNavBar a:hover {
                color: ` + this.props.hovercolor + `!important;
            }
          `}
        </style>
				<Row className="justify-content-between">
					<Col xs='3'>
						<Button href={"https://postmates.com/merchant/zachs-shack-portland"}
              target="_blank"
              rel="noreferrer noopener"
              color={this.props.buttoncolor}>Order Here</Button>
					</Col>
          <Col xs='3' className="socialIcons">
						<a href="https://www.yelp.com/biz/zachs-shack-portland"
              target="_blank" rel="noreferrer noopener"><i className="fab fa-yelp" /></a>
						<a href="https://www.facebook.com/ZachsShackHotdogs/"
              target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook" /></a>
						<a href="https://www.instagram.com/explore/locations/227503863/zachs-shack/"
              target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram" /></a>
					</Col>
				</Row>
				<Row>
					<Col>
						<a href="/"><h1>Zach's Shack</h1></a>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center">
          <Col className="flex-grow-1">
					</Col>
					<Col>
						<a href="/menu"><h4>Menu</h4></a>
					</Col>
					<Col>
						<a href="/about"><h4>About</h4></a>
					</Col>
					<Col>
						<a href="/contact"><h4>Contact</h4></a>
					</Col>
          <Col className="flex-grow-1">
					</Col>
				</Row>
			</Container>
    );
  }
}

AltNavBar.defaultProps = {
  text: 'black',
  background: 'white',
  hovercolor: 'grey',
  buttoncolor: 'warning'
}

export default AltNavBar;
