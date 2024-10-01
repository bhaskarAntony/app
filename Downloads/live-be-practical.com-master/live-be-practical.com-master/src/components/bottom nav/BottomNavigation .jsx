// Import necessary libraries and components
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlaneDeparture, faVanShuttle, faCarSide, faBuilding, faGraduationCap, faStar, faSmoking, faCode, faNewspaper, faSubway, faCalendar } from '@fortawesome/free-solid-svg-icons';

// Functional component for the bottom navigation bar
const BottomNavigation = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light" className='d-lg-none text-center p-0 m-0 overflow-scroll dark-shadow'>
      <Nav className="m-0 p-0 d-flex justify-content-between flex-row  w-100">
        <Nav.Item>
          <Nav.Link href="/courses">
            <FontAwesomeIcon icon={faGraduationCap} className='text-secondary'/>
            <small className="d-block fs-6 text-main-danger">Courses</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/elite">
            <FontAwesomeIcon icon={faStar} className='text-secondary' />
            <small className="d-block fs-6 text-main-danger">Elite</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/events">
            <FontAwesomeIcon icon={faCalendar} className='text-secondary'/>
            <small className="d-block fs-6 text-main-danger">Events</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/discount/quiz">
            <FontAwesomeIcon icon={faCode} className='text-secondary' />
            <small className="d-block fs-6 text-main-danger">Quiz</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blogs">
            <FontAwesomeIcon icon={faNewspaper} className='text-secondary'/>
            <small className="d-block fs-6 text-main-danger">Blogs</small>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default BottomNavigation;
