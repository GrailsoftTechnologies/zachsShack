import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';

class Menu extends Component {
render() {
  return(
    <Container className="Menu">
			<Row>
				<Col sm="3">
					<h1>
						Chicago Dog $4.75
					</h1>
					<p>
						Yellow Mustard, Onion, Neon Relish, Sport Peppers, Pickle Spear, Tomato, Celery Salt, Poppy Seed Bun
					</p>
				</Col>
				<Col sm="3">
					<h1>
						New York Dog  $4.75
					</h1>
					<p>
						Cheddar Cheese, Yellow Mustard, Onion, Chili
					</p>
				</Col>
				<Col sm="3">
					<h1>
						Syd Dog  $4.00
					</h1>
					<p>
						Ketchup, Mayo, Green Relish, Pickle Slices
					</p>
				</Col>
				<Col sm="3">
					<h1>
						Sgt. Peppers  $4.75
					</h1>
					<p>
						Brown Mustard, Jalapenos, Peperoncinis, Sport Peppers
					</p>
				</Col>
				<Col sm="3">
					<h1>
						Los Lobos Dog  $5.50
					</h1>
					<p>
						Cheddar Cheese, Salsa, Sour Cream, Black Olives, Jalapenos
					</p>
				</Col>
				<Col sm="3">
					<h1>
						Scorpion Dog  $4.50
					</h1>
					<p>
						Brown Mustard, Sauerkraut
					</p>
				</Col>
				<Col sm="3">
					<h1>
						Dylan Dog  $4.75
					</h1>
					<p>
						Cream Cheese, Onion, Tomato
					</p>
				</Col>
			</Row>
		</Container>
    );
  }
}

export default Menu;
