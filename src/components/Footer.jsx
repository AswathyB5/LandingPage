import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="section-padding bg-dark-custom text-white mt-5" style={{ borderTopLeftRadius: '45px', borderTopRightRadius: '45px' }}>
            <Container>
                <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-4">
                    <div className="d-flex align-items-center gap-2">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5001 0.499939L18.6657 10.3344L28.5001 14.4999L18.6657 18.6655L14.5001 28.5L10.3344 18.6655L0.5 14.4999L10.3344 10.3344L14.5001 0.499939Z" fill="white" />
                        </svg>
                        <span className="fw-bold fs-4">Positivus</span>
                    </div>
                    <div className="d-flex gap-4 text-white text-decoration-underline" style={{ flexWrap: 'wrap' }}>
                        <a href="#" className="text-white">About us</a>
                        <a href="#" className="text-white">Services</a>
                        <a href="#" className="text-white">Use Cases</a>
                        <a href="#" className="text-white">Pricing</a>
                        <a href="#" className="text-white">Blog</a>
                    </div>
                    <div className="d-flex gap-3">
                        <a href="#" className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', color: 'black' }}>
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="#" className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', color: 'black' }}>
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', color: 'black' }}>
                            <FaTwitter size={14} />
                        </a>
                    </div>
                </div>

                <Row className="mb-5 pb-5 border-bottom border-secondary">
                    <Col md={4}>
                        <div className="bg-primary-custom text-black d-inline-block px-2 rounded mb-3" style={{ background: '#B9FF66' }}>
                            <h5 className="m-0 fw-bold">Contact us:</h5>
                        </div>
                        <p className="mb-1">Email: info@positivus.com</p>
                        <p className="mb-1">Phone: 555-567-8901</p>
                        <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
                    </Col>
                    <Col md={8} className="d-flex align-items-center justify-content-center justify-content-lg-end">
                        <div className="bg-dark p-4 rounded-4 d-flex gap-2 flex-wrap" style={{ backgroundColor: '#292A32' }}>
                            <input type="email" placeholder="Email" className="form-control bg-dark text-white border-white" style={{ maxWidth: '300px' }} />
                            <Button style={{ background: '#B9FF66', color: 'black', border: 'none' }} className="px-4 fw-bold">Subscribe to news</Button>
                        </div>
                    </Col>
                </Row>

                <div className="d-flex gap-4 text-secondary small">
                    <span>© 2023 Positivus. All Rights Reserved.</span>
                    <a href="#" className="text-secondary text-decoration-none">Privacy Policy</a>
                </div>
            </Container>
        </footer>
    );
}
export default Footer;
