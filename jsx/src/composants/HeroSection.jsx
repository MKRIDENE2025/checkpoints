import { Button, Container } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container className="text-center py-5">
        <h1 className="hero-title">Bienvenue chez Manel’s Spa</h1>
        <p className="hero-subtitle">
          Offrez-vous un moment de détente et de bien-être dans notre havre de paix.
        </p>
        <Button className="hero-button">Réserver maintenant</Button>
      </Container>
    </section>
  );
};

export default Hero;
