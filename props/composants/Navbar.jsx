import { Navbar, Container } from "react-bootstrap";
import './Navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"> <img  src="manel.png" alt="logo" width={200}/></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
