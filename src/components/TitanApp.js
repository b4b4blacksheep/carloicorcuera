import { Col, Container, Image, Row } from 'react-bootstrap';

import Titan from '../assets/Titan-Homepage.png';

export default function TitanApp() {

  return (
  	<>
        <Col xs={12} md={12} lg={4}>
          <div className="mx-auto pt-5 pb-3">
            <h1 className="text-uppercase text-start banner-name">Project Titan</h1>
            <a 
              href="https://titan-app-project.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-decoration"
            >
              <h6 className="banner-link">https://titan-app-project.vercel.app/</h6>
            </a>
            <p className="pt-3 banner-text text-center d-none d-lg-block">
              Built primarily on the <a>MERN stack</a> and enhanced by <a>Bootstrap v5.3</a>, this platform emulates Titan 22's features and design. All content is sourced from Titan 22 and the app was developed in September 2023.
            </p>
          </div>
        </Col>
        <Col xs={12} md={12} lg={8}>
            <div className="mx-auto pt-5 pb-3">
              <a href="https://titan-app-project.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image fluid className="main-image" src={Titan} />
              </a>
            </div>
        </Col>
    </>
  );
}