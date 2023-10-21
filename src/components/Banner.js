import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Carlo from '../assets/1-modified.png';
import ChatHead from '../assets/2-chatHead.png';

export default function Banner() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const chatHeadElement = document.querySelector('.chat-head');
      chatHeadElement.classList.add('show-chat-head');
    }, 3000); // 3000 milliseconds = 3 seconds
  }, []);

  return (
    <Container>
      <Row className="align-items-center">
        {/* Left Column */}
      <Col xs={12} md={12} lg={6}>
      <div className="pt-5 pb-3 image-container">
        <Link to="/projects">
          <Image fluid className="main-image" src={Carlo} />
          <Image fluid className="chat-head" src={ChatHead} />
        </Link>
      </div>
      </Col>
        {/* Right Column */}
        <Col xs={12} md={12} lg={6}>
          <div className="mx-auto pt-5 pb-3 text-center">
            <h1 className="text-uppercase banner-name">Carlo Corcuera</h1>
            <h6 className="banner-name">@carloicorcuera</h6>
            <div>
              <a className="py-2 px-3" href="https://www.linkedin.com/in/carlo-i-corcuera/" target="_blank" rel="noreferrer">
                <FaLinkedinIn color="#ED370A" size="1.5em" title="LinkedIn"/>
              </a>
              <a className="py-2 px-3" href="https://www.instagram.com/carloicorcuera/" target="_blank" rel="noreferrer">
                <FaInstagram color="#ED370A" size="1.5em" title="Instagram"/>
              </a>
              <a className="py-2 px-3" href="https://github.com/b4b4blacksheep" target="_blank" rel="noreferrer">
                <FaGithub color="#ED370A" size="1.5em" title="GitHub"/>
              </a>
              <a className="py-2 px-3" href="https://call.whatsapp.com/voice/AULbfVyKGaBBR81D3VdWFS" target="_blank" rel="noreferrer">
                <FaWhatsapp color="#ED370A" size="1.5em" title="WhatsApp"/>
              </a>
            </div>
            <p className="pt-3 banner-text d-none d-lg-block">
              Hi, I'm <a>Carlo Corcuera</a>, a 23-year-old IT instructor from Manila, Philippines. I specialize in guiding tech graduates and career shifters into the IT field. I hold a Bachelor's degree in Industrial Education - Information Communication Technology. My expertise is as a <a>MERN Stack</a> Instructor.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
