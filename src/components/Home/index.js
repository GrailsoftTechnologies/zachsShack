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
						<h2 style={{fontFamily: 'Porter'}}>Zach's Shack</h2>
						<h3>Dogs with a Snap!</h3>
						<h4>Open Noon-3am Everyday</h4>
            <h4>4611 SE Hawthorne Blvd 97215</h4>
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
