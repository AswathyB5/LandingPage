import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CaseStudies() {
    return (
        <section id="cases" className="section-padding">
            <Container>
                <div className="section-title-wrapper">
                    <div className="section-label">Case Studies</div>
                    <p className="section-description">
                        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                    </p>
                </div>

                <div className="bg-dark-custom rounded-5 p-5" style={{ borderRadius: '45px' }}>
                    <Row>
                        {[1, 2, 3].map((item, idx) => (
                            <Col md={4} key={idx} className={idx !== 2 ? "border-end border-secondary" : ""}>
                                <div className="px-lg-4 px-2 py-3">
                                    <p className="mb-4">
                                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                                    </p>
                                    <a href="#" className="text-primary text-decoration-none fw-bold d-flex align-items-center gap-2">
                                        Learn more
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default CaseStudies;
