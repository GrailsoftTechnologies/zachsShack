import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import './styles.css';

class About extends Component {
render() {
  return(
      <Container className="About">
				<Row>
					<Col>
						<Jumbotron className="aboutText">
							<h1 className="display-3">Hot Dogs</h1>
			        <p className="lead">Life can be complicated. Hot dogs are simple. They come in different styles, and they taste great with a beer and a side of fries.</p>
			        <hr className="my-1" />
			        <p>Come by for a hotdog today.</p>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default About;
