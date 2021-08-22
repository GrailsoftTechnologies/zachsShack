import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function About (props) {
  return(
    <Container className="About">
			<Row>
				<Col>
					<h1>Zach's Shack Hot Dogs...</h1>
	        <h3>
						...are 100% beef dogs with a natural casing.
            It's the casing and the steaming that gives the dog the "snap".
            You may choose to substitute a tofu dog or veggie sausage (will take 4 minutes longer to prepare) at no extra charge.
            We are open until late every night.
            Thanks for stopping by!
					</h3>
          <br/>
					<h3>-Zach</h3>
				</Col>
			</Row>
		</Container>
  )
}
