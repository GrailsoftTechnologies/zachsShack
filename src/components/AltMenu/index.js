import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';

class AltMenu extends Component {
render() {
 return(
  <Container className="AltMenu">
			<Row>
				<Col className="dogType">
					<h1>
						Chicago Dog $5.50
					</h1>
					<p>
						Yellow Mustard, Onion, Neon Relish, Sport Peppers, Pickle Spear, Tomato, Celery Salt, Poppy Seed Bun
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						New York Dog $5.75
					</h1>
					<p>
						Cheddar Cheese, Yellow Mustard, Onion, Chili
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Syd Dog $4.50
					</h1>
					<p>
						Ketchup, Mayo, Green Relish, Pickle Slices
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Sgt. Peppers $5.75
					</h1>
					<p>
						Brown Mustard, Jalapenos, Peperoncinis, Sport Peppers
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Los Lobos Dog $6.50
					</h1>
					<p>
						Cheddar Cheese, Salsa, Sour Cream, Black Olives, Jalapenos
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Scorpions Dog $5.25
					</h1>
					<p>
						Brown Mustard, Sauerkraut
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Dylan Dog $5.75
					</h1>
					<p>
						Cream Cheese, Onion, Tomato
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Feat Dog $5.25
					</h1>
					<p>
						Brown Mustard, Cole Slaw
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						John Popper $5.75
					</h1>
					<p>
						Cream Cheese, Onions, Green Relish, Jalapenos, Sweet Thai Chili Sauce
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Grateful Dog $5.50
					</h1>
					<p>
						Onion, Cucumber, Tomato, Celery Salt
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						James Brown $6.50
					</h1>
					<p>
						Cream Cheese, Jalapenos, Chili, Sour Cream
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Zach's Favorite $5.25
					</h1>
					<p>
						Brown Mustard, Red Relish, Sport Peppers, Onion, Pickle Slices, Celery Salt
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="dogType">
					<h1>
						Wings Dog $6.00
					</h1>
					<p>
						Carrots, Blue Cheese, Sour Cream, Aardvark, Celery Salt
					</p>
				</Col>
			</Row>
		</Container>
  );
 }
}

export default AltMenu;
