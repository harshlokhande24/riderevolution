import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bicycle-outline"></ion-icon>
                  <h1>RideEvolution Gears</h1>
              </div>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
