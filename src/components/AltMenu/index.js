import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';

class AltMenu extends Component {
render() {
 return(
  <Container className="AltMenu">
    <Container className="MenuSection">
      <Row>
        <Col className="MenuHeader">
          <h1>
            Signature Dogs
          </h1>
          <hr className="my-2"></hr>
          <h4>
            <i>
              All signature dogs are prepared with Red Hot Chicago All Beef Dogs in natural casing.
            </i>
          </h4>
          <h4>
            Substitute the following for no additional charge:
          </h4>
          <h4>
            <i>
              Tofu Pup or Turkey Dog
            </i>
          </h4>
          <h4>
            Substitute any of the following for $1.50:
          </h4>
          <h4>
            <i>
              Red Hot Spicy Sausage, Cheese Filled Sausage, Linguisa Pork Sausage, or Field Roast Veggie Sausage
            </i>
          </h4>
        </Col>
      </Row>
      <hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Chicago Dog $5.50
					</h2>
					<h4>
						Yellow Mustard, Onion, Neon Relish, Sport Peppers, Pickle Spear, Tomato, Celery Salt, Poppy Seed Bun
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						New York Dog $5.75
					</h2>
					<h4>
						Cheddar Cheese, Yellow Mustard, Onion, Chili
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Syd Dog $4.50
					</h2>
					<h4>
						Ketchup, Mayo, Green Relish, Pickle Slices
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Sgt. Peppers $5.75
					</h2>
					<h4>
						Brown Mustard, Jalape&#241;os, Peperoncinis, Sport Peppers
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Los Lobos Dog $6.50
					</h2>
					<h4>
						Cheddar Cheese, Salsa, Sour Cream, Black Olives, Jalape&#241;os
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Scorpions Dog $5.25
					</h2>
					<h4>
						Brown Mustard, Sauerkraut
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Dylan Dog $5.75
					</h2>
					<h4>
						Cream Cheese, Onion, Tomato
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Feat Dog $5.25
					</h2>
					<h4>
						Brown Mustard, Cole Slaw
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						John Popper $5.75
					</h2>
					<h4>
						Cream Cheese, Onions, Green Relish, Jalape&#241;os, Sweet Thai Chili Sauce
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Grateful Dog $5.50
					</h2>
					<h4>
						Onion, Cucumber, Tomato, Celery Salt
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						James Brown $6.50
					</h2>
					<h4>
						Cream Cheese, Jalape&#241;os, Chili, Sour Cream
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Zach's Favorite $5.25
					</h2>
					<h4>
						Brown Mustard, Red Relish, Sport Peppers, Onion, Pickle Slices, Celery Salt
					</h4>
				</Col>
			</Row>
			<hr className="my-2"></hr>
			<Row>
				<Col className="dogType">
					<h2>
						Wings Dog $6.00
					</h2>
					<h4>
						Carrots, Blue Cheese, Sour Cream, Aardvark, Celery Salt
					</h4>
				</Col>
			</Row>
		</Container>
    <Container className="MenuSection">
      <Row>
        <Col className="MenuHeader">
          <h2>
            Build Your Own
          </h2>
        </Col>
      </Row>
      <hr className="my-2"></hr>
      <Row>
				<Col>
					<h3>
						Free Toppings
					</h3>
					<h4>
						Yellow Mustard, Brown Mustard, Ketchup, Onions, Mayo, Celery Salt, Neon Green Relish, Red Relish, Dill Relish, Sweet Green Relish
					</h4>
				</Col>
			</Row>
      <hr className="my-2"></hr>
      <Row>
				<Col>
					<h3>
						75 cent Toppings
					</h3>
					<h4>
						Tomato Slices, Pickle Slices, Pickle Spears, Black Olives, Jalape&#241;os, Pepperoncini, Salsa, Cucumbers, Sour Cream, Sport Peppers, Carrots, Side of Ranch or Marinara
					</h4>
				</Col>
			</Row>
      <hr className="my-2"></hr>
      <Row>
        <Col>
          <h3>
            $1.50 Toppings
          </h3>
          <h4>
            Cream Cheese, Cheddar CHeese, Blue Cheese, Chili, Veggie Chili, Cole Slaw, Sauerkraut
          </h4>
        </Col>
      </Row>
      <hr className="my-2"></hr>
      <Row>
        <Col>
          <h3>
            Gluten Free Buns $1.50
          </h3>
        </Col>
      </Row>
    </Container>
    <Container className="MenuSection">
      <Row>
        <Col className="MenuHeader">
          <h2>
            Fries
          </h2>
        </Col>
      </Row>
      <hr className="my-2"></hr>
      <Row>
        <Col>
          <h3>
            Small $3.50
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            Regular $5.50
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            Cheddar $6.50
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            Cheddar and Jalape&#241;o $7
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            Chili and Cheddar $8
          </h3>
        </Col>
      </Row>
    </Container>
    <Container className="MenuSection">
      <Row>
        <Col className="MenuHeader">
          <h2>
            Extras
          </h2>
        </Col>
      </Row>
      <hr className="my-2"></hr>
      <Row>
				<Col>
					<h2>
						Mozzarella Sticks (5) $7.50
					</h2>
					<h4>
						served with marinara sauce
					</h4>
				</Col>
			</Row>
      <hr className="my-2"></hr>
      <Row>
				<Col>
					<h2>
						Jalape&#241;o Poppers (5) $7.50
					</h2>
					<h4>
						stuffed with cream cheese and served with sweet chili Thai sauce
					</h4>
				</Col>
			</Row>
      <hr className="my-2"></hr>
      <Row>
        <Col>
          <h2>
            Chips $1.50
          </h2>
        </Col>
      </Row>
    </Container>
    <Container className="MenuSection" style={{marginBottom: "0px"}}>
      <Row>
        <Col className="MenuHeader">
          <h2>
            Drinks
          </h2>
        </Col>
      </Row>
      <hr className="my-2"></hr>
      <Row>
				<Col>
					<h2>
						Soda (free refills) $2.50
					</h2>
					<h4>
						Coke
					</h4>
          <h4>
						Diet Coke
					</h4>
          <h4>
						Sprite
					</h4>
          <h4>
						Ginger Ale
					</h4>
          <h4>
						Orange
					</h4>
          <h4>
						Ice Tea
					</h4>
          <h4>
						Lemonade $3(no refill)
					</h4>
				</Col>
			</Row>
      <hr className="my-2"></hr>
      <Row>
				<Col>
					<h2>
            Local Craft Beer, Wine, and Liquor Available
					</h2>
				</Col>
			</Row>
    </Container>
  </Container>
  );
 }
}

export default AltMenu;
