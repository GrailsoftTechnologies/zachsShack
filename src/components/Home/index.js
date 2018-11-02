import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';
import happyHour from '../../img/happyhour.jpg';


class Home extends Component {
  render() {
    return (
			<Container className="Home">
				<Row>
					<Col>
						<h1 style={{fontFamily: 'Porter'}}>Zach's Shack</h1>
						<h2>Dogs with a Snap!</h2>
						<h3>Open Noon - 3 am Everyday</h3>
            <h3>4611 SE Hawthorne Blvd 97215</h3>
					</Col>
				</Row>
        <hr></hr>
        <Row>
          <Col>
            <img src={happyHour} alt="happy hour"/>
          </Col>
        </Row>
        <hr></hr>
        <Row>
					<Col>
						<h2>Join us for...</h2>
						<h4>Local Craft Beers</h4>
            <h4>Thursday Night Trivia at 8 pm</h4>
            <h4>Summer Patio Seating</h4>
            <h4>Annual Hot Dog Eating Contest</h4>
            <h4>Outdoor Ping Pong</h4>
            <h4>Trail Blazers Games</h4>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Home;
