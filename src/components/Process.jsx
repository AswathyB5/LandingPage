import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

const processes = [
    { id: '01', title: 'Consultation', desc: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
    { id: '02', title: 'Research and Strategy Development', desc: 'We conduct thorough research into your competitors and target audience to build a solid strategy.' },
    { id: '03', title: 'Implementation', desc: 'Our team executes the strategy using the best tools and channels for your business.' },
    { id: '04', title: 'Monitoring and Optimization', desc: 'We continuously monitor campaign performance and make data-driven adjustments.' },
    { id: '05', title: 'Reporting and Communication', desc: 'Regular reports keep you informed about our progress and the results we are achieving.' },
    { id: '06', title: 'Continual Improvement', desc: 'Digital marketing is ever-evolving, and so are our strategies. We stay ahead of the curve.' },
];

function Process() {
    const [activeKey, setActiveKey] = useState('0');

    return (
        <section id="process" className="section-padding">
            <Container>
                <div className="section-title-wrapper">
                    <div className="section-label">Our Working Process</div>
                    <p className="section-description">
                        Step-by-Step Guide to Achieving Your Business Goals
                    </p>
                </div>

                <Accordion defaultActiveKey="0" flush className="d-flex flex-column gap-4">
                    {processes.map((item, idx) => (
                        <Accordion.Item eventKey={idx.toString()} key={idx} className={`border border-dark rounded-5 overflow-hidden card-custom ${activeKey === idx.toString() ? 'bg-lime' : 'bg-grey'}`} style={{ borderRadius: '45px', boxShadow: '0 5px 0 0 #191A23' }}>
                            <Accordion.Header onClick={() => setActiveKey(activeKey === idx.toString() ? null : idx.toString())} className="d-flex align-items-center">
                                <div className="d-flex align-items-center w-100 gap-4 py-2">
                                    <span className="display-4 fw-bold">{item.id}</span>
                                    <span className="fs-3 fw-bold">{item.title}</span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className="pt-0 pb-4 fs-5 border-top border-dark mt-3">
                                {item.desc}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </section>
    );
}
export default Process;
