import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-white py-4" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3 d-flex align-items-center gap-2">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5001 0.499939L18.6657 10.3344L28.5001 14.4999L18.6657 18.6655L14.5001 28.5L10.3344 18.6655L0.5 14.4999L10.3344 10.3344L14.5001 0.499939Z" fill="#191A23" />
                    </svg>
                    <span>Positivus</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-4">
                        <Nav.Link href="#about" className="text-dark">About us</Nav.Link>
                        <Nav.Link href="#services" className="text-dark">Services</Nav.Link>
                        <Nav.Link href="#cases" className="text-dark">Use Cases</Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark">Pricing</Nav.Link>
                        <Nav.Link href="#blog" className="text-dark">Blog</Nav.Link>
                        <Button variant="outline-dark" className="btn-outline-custom ms-2 text-dark">Request a quote</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;
