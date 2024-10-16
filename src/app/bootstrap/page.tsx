"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Modal,
  Form,
  Pagination,
} from 'react-bootstrap';

const BootstrapPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">React Bootstrap Components Demo</h1>
      <Row>
        <Link href={"https://react-bootstrap.netlify.app/"} className='btn btn-primary'>For More About React-Bootstrap</Link>
      </Row>
      <hr/>
      <br></br>
      <Row className="mb-4">
        <Col>
          <h2>Buttons</h2>
          <Button variant="primary" className="me-2">Primary Button</Button>
          <Button variant="secondary" className="me-2">Secondary Button</Button>
          <Button variant="success" className="me-2">Success Button</Button>
          <Button variant="danger" className="me-2">Danger Button</Button>
          <Button variant="info" className="me-2" onClick={handleShow}>Launch Modal</Button>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Cards</h2>
          <Row className='gap-4'>
            {Array.from({ length: 3 }).map((_, index) => (
              <Col key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title {index + 1}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Alerts</h2>
          <Alert variant="success">This is a success alert—check it out!</Alert>
          <Alert variant="danger">This is a danger alert—be careful!</Alert>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Badges</h2>
          <h3>
            Example heading <Badge bg="secondary">New</Badge>
          </h3>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Jumbotron</h2>
          <div className="container-fluid bg-dark text-light p-5">
            <div className="container bg-dark p-5">
              <h1 className="display-4">Welcome to React Bootstrap Demo Page</h1>
              <hr />
              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra
                attention to featured content or information.</p>
              <a href="#" className="btn btn-primary">link</a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Modals</h2>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is a modal body text.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Forms</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Pagination</h2>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>


    </Container>
  );
}

export default BootstrapPage;
