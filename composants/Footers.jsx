import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="text-center text-md-start align-items-center">
          <Col md={6}>
            <p className="mb-0">© 2025 Manel’s Spa. Tous droits réservés.</p>
          </Col>
          <Col md={6} className="text-md-end mt-2 mt-md-0">
            <p className="mb-0">Conçu avec ❤️ à Sfax</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
