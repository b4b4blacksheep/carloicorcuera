import { Container, Nav, Navbar, NavDropdown, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { FaPhoneAlt, FaRegFilePdf, FaRegFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Resume from "../assets/carlo-corcuera-resume.pdf";
import Carlo from '../assets/1-modified.png';

import './style.css'

export default function AppNavbar() {

  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiarynavbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand className="navbar-logo fs-1">carlo.</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="link" className="me-auto">
              <a href={Resume} download="carlo-corcuera.pdf">
              <FaRegFilePdf title="carlo-corcuera-resume" color="black" size="1.5em" />
              </a>   
              </Button>
                <OverlayTrigger
                trigger="click"
                key="bottom"
                size="sm"
                placement="bottom"
                overlay={
                  <Popover id={`popover-positioned-bottom`} >
                  <Popover.Header className="popover-header text-center" as="h4">{`Call Me!`}</Popover.Header>
                  <Popover.Body className="popover-body text-center">
                  Contact Me: <strong>carloicorcuera@gmail.com</strong>!
                  </Popover.Body>
                  </Popover>
                }
                >
              <Button variant="link" title="Arf arf arf" className="me-auto custom-popover"><FaPhoneAlt color="black" size="1.5em"/></Button>
                </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}