import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaCode,
  FaPhone,
  FaBriefcase,
  FaMoneyBillTrendUp,
  FaCartShopping,
  FaCloud,
  FaHeadset,
  FaShieldHalved,
  FaRobot,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaCode size={40} />,
    title: 'IT & Software Solutions',
    description:
      'We provide comprehensive IT and software solutions tailored to meet your business needs, including custom software development, system integration, and IT consulting.',
  },
  {
    icon: <FaPhone size={40} />,
    title: 'BPO & Outsourcing Services',
    description:
      'Our BPO services help you streamline operations and reduce costs by outsourcing non-core functions, allowing you to focus on your core business activities.',
  },
  {
    icon: <FaBriefcase size={40} />,
    title: 'Consulting & Recruitment',
    description:
      'We offer expert consulting services and recruitment solutions to help you find the right talent and optimize your business processes.',
  },
  {
    icon: <FaMoneyBillTrendUp size={40} />,
    title: 'Digital Marketing and Branding',
    description:
      'Our digital marketing services include SEO, social media marketing, and branding strategies to enhance your online presence and reach your target audience effectively.',
  },
  {
    icon: <FaCartShopping size={40} />,
    title: 'Ecommerce and Online Solutions',
    description:
      'We provide tailored e-commerce solutions, including store development, payment integration, user-friendly design, inventory management, and digital marketing to boost sales and engagement.',
  },
  {
    icon: <FaCloud size={40} />,
    title: 'Cloud and Infrastructure Services',
    description:
      'We provide cloud migration, secure hosting, network optimization, data storage, and disaster recovery for scalable and secure business operations.',
  },
  {
    icon: <FaHeadset size={40} />,
    title: 'Virtual Assistance & Remote Support',
    description:
      'Our virtual assistance and remote support services ensure seamless operations, offering real-time troubleshooting, IT support, and automated workflows for enhanced productivity.',
  },
  {
    icon: <FaShieldHalved size={40} />,
    title: 'Cybersecurity & Compliance',
    description:
      'We provide robust cybersecurity solutions, including threat detection, data encryption, compliance management, and risk assessment to safeguard your digital assets.',
  },
  {
    icon: <FaRobot size={40} />,
    title: 'AI & Automation Solutions',
    description:
      'We provide tailored AI and automation solutions to optimize workflows and enhance operational efficiency.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <section>
        <div className="parllax1">
          <div className="about">
            <div className="info">
              <h3>Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services code">
        {/* WhatsApp Icon */}
        <a
          href="https://api.whatsapp.com/send?phone=919500272207"
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <Container>
          <Row className="my-4">
            {services.map((service, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Card className="align-items-stretch custom-shadow justify-content-center text-center" style={{minHeight: '320px'}}>
                    <div className="icon my-3">{service.icon}</div>
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
