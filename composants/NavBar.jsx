import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css'

const NavbarSpa=()=> {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
      <Navbar.Brand className="logo" href="/">
        <img src="manel.png" alt="logo"width={100}/>
        </Navbar.Brand>
       <Navbar.Toggle aria-controls="spa-navbar" />
        <Navbar.Collapse >
          <Nav className="ms-auto spa-navbar">
            <Nav.Link href="#accueil">Accueil</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSpa;
