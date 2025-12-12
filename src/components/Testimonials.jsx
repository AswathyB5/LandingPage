import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const testimonials = [
    {
        text: '"We receive a steady stream of new customers thanks to the amazing work of the team at Positivus. They are true professionals who know what they are doing!"',
        author: 'John Smith',
        role: 'Marketing Director at XYZ Corp'
    },
    {
        text: '"Our online presence has skyrocketed since we started working with Positivus. We highly recommend their services to anyone looking to grow their business!"',
        author: 'Jane Doe',
        role: 'CEO at ABC Inc'
    },
    {
        text: '"The team at Positivus is fantastic! They really took the time to understand our business and created a strategy that works for us. We are seeing great results!"',
        author: 'Michael Brown',
        role: 'Owner at 123 Business'
    }
];

function Testimonials() {
    return (
        <section id="testimonials" className="section-padding">
            <Container>
                <div className="section-title-wrapper">
                    <div className="section-label">Testimonials</div>
                    <p className="section-description">
                        Hear from Our Satisfied Clients: Read our Testimonials to Learn More about Our Digital Marketing Services
                    </p>
                </div>

                <div className="bg-dark-custom rounded-5 p-5" style={{ borderRadius: '45px' }}>
                    <Row className="flex-nowrap overflow-auto g-4 pb-3" style={{ scrollbarWidth: 'none' }}>
                        {testimonials.map((t, idx) => (
                            <Col md={6} lg={4} key={idx} style={{ minWidth: '350px' }}>
                                <div className="border rounded-5 p-4 h-100 position-relative" style={{ background: 'transparent', borderRadius: '45px', borderColor: '#B9FF66' }}>
                                    <p className="mb-4 text-white">
                                        {t.text}
                                    </p>
                                    <div className="mt-4">
                                        <h5 className="text-primary mb-0 fw-bold" style={{ color: '#B9FF66' }}>{t.author}</h5>
                                        <p className="text-white small mb-0">{t.role}</p>
                                    </div>

                                    {/* Bubble tail */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-12px',
                                        left: '40px',
                                        width: '20px',
                                        height: '20px',
                                        background: '#191A23',
                                        borderRight: '1px solid #B9FF66',
                                        borderBottom: '1px solid #B9FF66',
                                        transform: 'rotate(45deg)'
                                    }}></div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Slider controls placeholder */}
                    <div className="d-flex justify-content-center gap-5 mt-5 text-white">
                        <span className="opacity-50">&larr;</span>
                        <div className="d-flex gap-2">
                            <span className="text-primary" style={{ color: '#B9FF66' }}>&#10022;</span>
                            <span className="opacity-50">&#10022;</span>
                            <span className="opacity-50">&#10022;</span>
                        </div>
                        <span className="opacity-50">&rarr;</span>
                    </div>
                </div>
            </Container>
        </section >
    );
}
export default Testimonials;
