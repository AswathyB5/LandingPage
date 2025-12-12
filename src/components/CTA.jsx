import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import illustration from '../assets/illustration.png'

function CTA() {
    return (
        <section className="section-padding">
            <Container>
                <div className="bg-grey rounded-5 p-5 position-relative overflow-hidden" style={{ borderRadius: '45px' }}>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h3 className="fw-bold fs-3 mb-4">Let's make things happen</h3>
                            <p className="mb-4">
                                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                            </p>
                            <Button className="btn-primary-custom">Get your free proposal</Button>
                        </Col>

                        <Col lg={6} className="d-none d-lg-block position-relative" style={{ height: '250px' }}>
                            <div style={{ position: 'absolute', right: '80px', top: '50%', transform: 'translateY(-50%)' }}>
                                <img src={illustration} alt="Illustration" style={{ height: '350px', objectFit: 'contain' }} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default CTA;
