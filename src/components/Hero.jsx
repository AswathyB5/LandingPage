import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImg from '../assets/megaphone-hero.png';

function Hero() {
    return (
        <section id="home" className="d-flex align-items-center" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '60px' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <h1 className="mb-4">
                            Navigating the <br /> digital landscape <br /> for success
                        </h1>
                        <p className="lead mb-5 fs-5">
                            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                        </p>
                        <button className="btn-primary-custom">Book a consultation</button>
                    </Col>
                    <Col lg={5} className="text-end d-none d-lg-block">
                        <img src={HeroImg} alt="Digital Marketing" className="img-fluid" style={{ maxHeight: '600px' }} />
                    </Col>
                </Row>

                {/* Company Logos Placeholder */}
                <div className="mt-5 pt-5 d-flex justify-content-between align-items-center flex-wrap gap-4 opacity-50 grayscale">
                    <h3 className="m-0 fw-bold fs-4">amazon</h3>
                    <h3 className="m-0 fw-bold fs-4 font-monospace">dribbble</h3>
                    <h3 className="m-0 fw-bold fs-4">HubSpot</h3>
                    <h3 className="m-0 fw-bold fs-4">Notion</h3>
                    <h3 className="m-0 fw-bold fs-4">NETFLIX</h3>
                    <h3 className="m-0 fw-bold fs-4">zoom</h3>
                </div>
            </Container>
        </section>
    );
}
export default Hero;
