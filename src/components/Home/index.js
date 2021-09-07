import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function Home(props) {
  return (
    <Container className="Home">
      <Row>
        <Col>
          
          <h2>Dogs with a Snap!</h2>
          <h3>Open Noon - Late Everyday</h3>
          <h3>4611 SE Hawthorne Blvd 97215</h3>
          <h3>(503) 233-4616</h3>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <h2>Join us for...</h2>
          <h4>Local Craft Beers</h4>
          <h4>Summer Patio Seating</h4>
          <h4>Annual Hot Dog Eating Contest</h4>
          <h4>Outdoor Ping Pong</h4>
          <h4>Trail Blazers Games</h4>
        </Col>
      </Row>
    </Container>
  )
}
