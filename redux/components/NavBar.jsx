import {Navbar, Container, Form, FormControl} from 'react-bootstrap';

const NavBar = ({setSearchTerm}) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">   
        <Container>
            <Navbar.Brand href="#home">Film Library</Navbar.Brand>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>
        </Container>
        </Navbar>
    );
};
export default NavBar;