import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './styles.css';
import happyHour from '../../img/happyhour.jpg';


class Home extends Component {
  render() {
    return (
			<Container className="Home">
				<Row>
					<Col>
						<h1>Zach's Shack</h1>
						<h2>Dogs with a Snap!</h2>
						<h3>Open Noon-3am Everyday</h3>
					</Col>
				</Row>
        <Row>
          <Col>
            <img src={happyHour} alt="happy hour"/>
          </Col>
        </Row>
        <Row>
					<Col>
						<h3>Join us for...</h3>
						<p>Local Craft Beers</p>
            <p>Thursday Night Trivia at 8pm</p>
            <p>Summer Patio Seating</p>
            <p>Annual Hot Dog Eating Contest</p>
            <p>Outdoor Ping Pong</p>
            <p>Trail Blazers Games</p>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Home;
