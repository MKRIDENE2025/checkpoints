import { Card, Container, Row, Col } from 'react-bootstrap';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <Container>
        <h2 className="text-center mb-5 section-title">Nos Services</h2>
        <Row>
          <Col md={4}>
            <Card className="feature-card">
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/02/27/03/39/people-3184615_1280.jpg" alt="Massage relaxant" />
            <Card.Body>
                <Card.Title>Massages Relaxants</Card.Title>
                <Card.Text>
                  Profitez d’un massage apaisant pour détendre votre corps et votre esprit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
         <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/07/09/23/40/spa-5388990_1280.jpg" alt="Soin du visage" />
             <Card.Body>
                <Card.Title>Soins du Visage</Card.Title>
                <Card.Text>
                  Régénérez votre peau avec nos soins du visage personnalisés et naturels.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/07/24/22/48/essential-oils-1539457_1280.jpg" alt="Aromathérapie" />
              <Card.Body>
                <Card.Title>Aromathérapie</Card.Title>
                <Card.Text>
                  Plongez dans une atmosphère de détente avec nos bougies parfumées et huiles essentielles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
