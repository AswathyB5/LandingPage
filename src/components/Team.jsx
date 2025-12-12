import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedinIn } from 'react-icons/fa';
import TeamImg1 from '../assets/testimonial-1.png';
import TeamImg2 from '../assets/testimonial-2.png';

const team = [
    { name: 'John Smith', role: 'CEO and Founder', exp: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and Content Strategy', img: TeamImg1 },
    { name: 'Jane Doe', role: 'Director of Operations', exp: '7+ years of experience in project management and team leadership. Strong organizational skills', img: TeamImg2 },
    { name: 'Michael Brown', role: 'Senior SEO Specialist', exp: '5+ years of experience in SEO and content marketing. Proficient in keyword research and on-page optimization', img: TeamImg1 },
    { name: 'Emily Davis', role: 'PPC Manager', exp: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis', img: TeamImg2 },
    { name: 'Brian Williams', role: 'Social Media Specialist', exp: '4+ years of experience in social media marketing. Proficient in creating and scheduling content', img: TeamImg1 },
    { name: 'Sarah Wilson', role: 'Content Creator', exp: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-friendly content', img: TeamImg2 },
];

function Team() {
    return (
        <section id="team" className="section-padding">
            <Container>
                <div className="section-title-wrapper">
                    <div className="section-label">Team</div>
                    <p className="section-description">
                        Meet the skilled and experienced team behind our successful digital marketing strategies
                    </p>
                </div>

                <Row className="g-4">
                    {team.map((member, idx) => (
                        <Col md={6} lg={4} key={idx}>
                            <div className="card-custom p-4">
                                <div className="d-flex align-items-end justify-content-between mb-4 border-bottom border-secondary pb-4">
                                    <div className="d-flex align-items-end gap-3">
                                        <div className="position-relative">
                                            <img src={member.img} alt={member.name} className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-1">{member.name}</h5>
                                            <p className="mb-0 small text-muted">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="bg-black rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', color: '#B9FF66' }}>
                                        <FaLinkedinIn size={14} />
                                    </div>
                                </div>
                                <p className="mb-0">{member.exp}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="text-end mt-4">
                    <button className="btn-primary-custom" style={{ width: '100%' }}>See all team</button>
                </div>
            </Container>
        </section>
    );
}
export default Team;
