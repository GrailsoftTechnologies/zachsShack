import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './styles.css';


class Home extends Component {
  render() {
    return (
			<Container className="Home">
				<Row>
					<Col>
						<h1>Zach's Shack</h1>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Home;
