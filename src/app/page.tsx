import Link from 'next/link';
import { Container, Button, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="text-center mt-5">
      <h2 className="mb-4">Home Title</h2>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Link href="/jest" passHref>
            <Button variant="primary" className="mb-2">Jest Test Page</Button>
          </Link>
        </Col>
        <Col xs="auto">
          <Link href="/bootstrap" passHref>
            <Button variant="secondary">Bootstrap</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
