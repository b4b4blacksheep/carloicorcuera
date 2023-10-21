import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useSwipeable } from 'react-swipeable';

import TitanApp from '../components/TitanApp';
import JokeJokeJokeApp from '../components/JokeJokeJokeApp';
import GroceryApp from '../components/GroceryApp';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectComponents = [ <TitanApp />, <JokeJokeJokeApp />, <GroceryApp /> ];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectComponents.length);
  };

  const previousProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projectComponents.length) % projectComponents.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextProject(),
    onSwipedRight: () => previousProject(),
  });

  return (
    <div style={{ position: 'relative' }} {...handlers}>
      <Container>
        <Row className="align-items-center mx-lg-3">
          <h1 className="text-end banner-name">Projects Created</h1>
            {projectComponents[currentProjectIndex]}
        </Row>
      </Container>
      <div
        className="hide-on-small"
        style={{
         position: 'absolute',
         top: '50%',
         right: '10px',
         transform: 'translateY(-50%)',
         zIndex: 999,
         backgroundColor: 'transparent',
       }}
       >
       <button onClick={nextProject} style={{ backgroundColor: 'transparent', border: 'none' }}>
        <GrNext size="1em" style={{ backgroundColor: 'transparent' }} />
       </button>
     </div>

     <div
       className="hide-on-small"
       style={{
         position: 'absolute',
         top: '50%',
         left: '10px',
         transform: 'translateY(-50%)',
         zIndex: 999,
         backgroundColor: 'transparent',
       }}
       >
       <button onClick={previousProject} style={{ backgroundColor: 'transparent', border: 'none' }}>
        <GrPrevious size="1em" style={{ backgroundColor: 'transparent' }} />
       </button>
     </div>
   </div>
  );
}