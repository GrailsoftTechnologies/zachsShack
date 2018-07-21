import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './styles.css';


class Home extends Component {
  render() {
    return (
			<Container className="Home">
				<Row>
					<Col>
						<Jumbotron>
							<h1 className="display-3">Zach's Shack</h1>
							<h1 className="display-4">Hot Dogs</h1>
							<Button href={"#/Contact"} color="secondary">Find us</Button>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron>
							<h1 className="display-3">Hot Dogs Delivered</h1>
							<Button href={"https://postmates.com/merchant/zachs-shack-portland"} color="success">Order Here</Button>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Home;
