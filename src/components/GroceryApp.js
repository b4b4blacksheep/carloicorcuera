import { Col, Container, Image, Row } from 'react-bootstrap';

import GroceryGIF from '../assets/GroceryApp.mp4';

export default function GroceryApp() {

  return (
  	<>
        <Col xs={12} md={12} lg={4}>
          <div className="mx-auto pt-5 pb-3">
            <h1 className="text-uppercase text-start banner-name">Project Grocery List</h1>
	            <a 
							  href="https://grocery-app-zeta.vercel.app/" 
							  target="_blank" 
							  rel="noopener noreferrer"
							  className="no-decoration"
							>
	            	<h6 className="banner-link">https://grocery-app-zeta.vercel.app/</h6>
	            </a>
            <p className="pt-3 banner-text text-center d-none d-lg-block">
              Project Grocery List originated from my search for a grocery list app. Built using <a>Tailwind CSS</a>, the project was largely coded with the assistance of <a>ChatGPT</a>. It's a straightforward solution for organizing your shopping needs.
            </p>
          </div>
        </Col>
        <Col xs={12} md={12} lg={8}>
	        <div className="mx-auto pt-5 pb-3">
	          <a href="https://grocery-list-rho-sage.vercel.app/" target="_blank" rel="noopener noreferrer">
	            <div className="video-container">
	              <video autoPlay loop muted className="responsive-video">
	                <source src={GroceryGIF} type="video/mp4" />
	              </video>
	            </div>
	          </a>
	        </div>
        </Col>
    </>
  );
}