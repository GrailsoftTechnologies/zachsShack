import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'

export default function NotFound(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron style={{color: 'inherit', backgroundColor: 'inherit'}}>
            <h1>404</h1>
            <h3>Uh oh, something went wrong</h3>
            <a href="/"><h3>Return to home page</h3></a>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}
