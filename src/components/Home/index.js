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
							<h1 className="display-3">ZACHS SHACK</h1>
							<h1 className="display-4">HOT DOGS</h1>
							<Button href={"#/Contact"} color="secondary">Find us</Button>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron>
							<h1 className="display-3">HOT DOGS</h1>
							<h1 className="display-4">DELIVERED</h1>
							<Button href={"https://postmates.com/merchant/zachs-shack-portland"} color="success">Order Here</Button>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Home;
