import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactImg from '../assets/contact-stars.png';

function Contact() {
    return (
        <section id="contact" className="section-padding">
            <Container>
                <div className="section-title-wrapper">
                    <div className="section-label">Contact Us</div>
                    <p className="section-description">
                        Connect with Us: Let's Discuss Your Digital Marketing Needs
                    </p>
                </div>

                <div className="bg-grey rounded-5 p-5 overflow-hidden position-relative" style={{ borderRadius: '45px' }}>
                    <Row>
                        <Col lg={7}>
                            <Form>
                                <div className="d-flex gap-4 mb-4">
                                    <Form.Check type="radio" label="Say Hi" name="contactType" defaultChecked />
                                    <Form.Check type="radio" label="Get a Quote" name="contactType" />
                                </div>

                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" className="bg-white rounded-3 px-3 py-2 border-dark" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="Email" className="bg-white rounded-3 px-3 py-2 border-dark" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Message*</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Message" className="bg-white rounded-3 px-3 py-2 border-dark" />
                                </Form.Group>

                                <Button className="btn-primary-custom w-100">Send Message</Button>
                            </Form>
                        </Col>
                        <Col lg={5} className="d-none d-lg-block position-relative">
                            <div style={{ position: 'absolute', right: '-280px', top: '50%', transform: 'translateY(-50%)' }}>
                                <img src={ContactImg} alt="Contact" style={{ height: '500px', objectFit: 'contain' }} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default Contact;
