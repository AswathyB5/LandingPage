import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEOImg from '../assets/tokyo-magnifier-web-search-with-elements 2.png';
import PPCImg from '../assets/tokyo-selecting-a-value-in-the-browser-window 1.png';
import SocialImg from '../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import EmailImg from '../assets/tokyo-sending-messages-from-one-place-to-another 1.png';
import ContentImg from '../assets/tokyo-many-browser-windows-with-different-information 1.png';

// Fallback for Analytics if needed, reusing one or generic
const AnalyticsImg = SEOImg;

const services = [
    {
        title1: 'Search engine', title2: 'optimization',
        theme: 'grey',
        img: SEOImg,
        link: '#'
    },
    {
        title1: 'Pay-per-click', title2: 'advertising',
        theme: 'lime',
        img: PPCImg,
        link: '#'
    },
    {
        title1: 'Social Media', title2: 'Marketing',
        theme: 'dark',
        img: SocialImg,
        link: '#'
    },
    {
        title1: 'Email', title2: 'Marketing',
        theme: 'grey',
        img: EmailImg,
        link: '#'
    },
    {
        title1: 'Content', title2: 'Creation',
        theme: 'lime',
        img: ContentImg,
        link: '#'
    },
    {
        title1: 'Analytics and', title2: 'Tracking',
        theme: 'dark',
        img: AnalyticsImg,
        link: '#'
    },
];

function Features() {
    return (
        <section id="services" className="section-padding">
            <Container>
                <div className="section-title-wrapper">
                    <div className="section-label">Services</div>
                    <p className="section-description">
                        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                    </p>
                </div>

                <Row className="g-4">
                    {services.map((service, idx) => (
                        <Col lg={6} key={idx}>
                            <div className={`card-custom ${service.theme}`}>
                                <Row className="h-100">
                                    <Col xs={7} className="d-flex flex-column justify-content-between">
                                        <div>
                                            <h3 className={`mb-0 ${service.theme === 'lime' || service.theme === 'grey' ? 'bg-white px-1 rounded d-inline-block' : 'd-inline-block'}`}>
                                                <span className={service.theme === 'lime' || service.theme === 'grey' ? 'bg-white px-2 rounded-2' : ''}>{service.title1}</span>
                                            </h3>
                                            <h3 className={`mb-0 ${service.theme === 'lime' || service.theme === 'grey' ? 'bg-white px-1 rounded d-inline-block mt-1' : 'd-inline-block mt-1'}`}>
                                                <span className={service.theme === 'lime' || service.theme === 'grey' ? 'bg-white px-2 rounded-2' : ''}>{service.title2}</span>
                                            </h3>
                                        </div>

                                        <div className="learn-more-link">
                                            <div className="arrow-circle">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span style={{ display: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'block' }}>Learn more</span>
                                        </div>
                                    </Col>
                                    <Col xs={5} className="d-flex align-items-center justify-content-center">
                                        <img src={service.img} alt={service.title1} className="img-fluid" style={{ maxHeight: '160px' }} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
export default Features;
