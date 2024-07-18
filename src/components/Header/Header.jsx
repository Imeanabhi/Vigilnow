
// src/Components/BasicExample.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Ensure this is imported for styles
import logo from '../../Images/logo.png';
import './Header.css'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar expand="lg" bg="white" variant="light" className='navbari'>
      <Container className='containernav'>
      <img src={logo} alt="VigilNow Logo" className="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
            <NavDropdown title="Features" id="features-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3000/error-monitoring">Error Monitoring</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/health-checks">Health Checks</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/job-monitoring">Job Monitoring</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/api-monitoring">API Monitoring</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" id="solutions-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3000/development-teams">Development Teams</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/manager">Manager</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="http://localhost:3000/resources/">Resources</Nav.Link>
          </Nav>
    <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=header&_gl=1*74f2yl*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDUxNzkwMC40NS4xLjE3MjA1MTgxNzIuMC4wLjA.&_ga=2.25779705.539706939.1720413142-871476253.1719329457" target="blank"><Button className='Button' variant="primary">Get Started</Button></a>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
