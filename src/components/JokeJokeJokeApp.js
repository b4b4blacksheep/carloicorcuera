import { Col, Container, Image, Row } from 'react-bootstrap';

import JokeJokeJoke from '../assets/Joke-Joke-Joke.png';

export default function JokeJokeJokeApp() {

  return (
  	<>
        <Col xs={12} md={12} lg={4}>
          <div className="mx-auto pt-5 pb-3">
            <h1 className="text-uppercase text-start banner-name">Project Joke Joke Joke</h1>
            <a 
              href="https://joke-joke-joke.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-decoration"
            >
              <h6 className="banner-link">https://joke-joke-joke.vercel.app/</h6>
            </a>
            <p className="pt-3 banner-text text-center d-none d-lg-block">
              Project <a>Joke Joke Joke offers</a> a blend of coding and humor through jokes in both English and Tagalog. The Tagalog jokes are sourced from an <a>Express.js API</a> that I personally created. Visit the app for a quick mood lift.
            </p>
          </div>
        </Col>
        <Col xs={12} md={12} lg={8}>
            <div className="mx-auto pt-5 pb-3">
              <a href="https://joke-joke-joke.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image fluid className="main-image" src={JokeJokeJoke} />
              </a>
            </div>
        </Col>
    </>
  );
}