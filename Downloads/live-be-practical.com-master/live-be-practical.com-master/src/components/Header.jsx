import React, { useState, useEffect } from 'react';
import brand from '../images/brand-logo.jpg';
import '../styles/header.css';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CoursePage, allCourseApi } from '../Data/DataFetcher';
import { Shimmer } from 'react-shimmer';

function Header() {
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [loading, setLoading] = useState(true);
  const [CourseData, setCourseData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await allCourseApi;
        setLoading(false);
        setCourseData(data.courses);
        console.log("data", data);
      } catch (error) {
        setLoading(true);
        console.error('Error fetching CoursePage:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id, subCourseId) => {
    localStorage.setItem('selectedCourseId', id);
    localStorage.setItem('selectedSubCourseId', subCourseId);
    setShow(false);
  };

  const handleLinkClick = () => {
    setShow(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="logo" className="rounded-2" />
          </a>
          <div>
            <button onClick={handleShow} className="bg-danger-2 btn d-xl-none">
              <i className="bi bi-list text-white"></i>
            </button>
            <button onClick={handleShowContact} className="btn bg-gray2 mx-2 rounded-2 d-xl-none">
              <i className="bi bi-person-lines-fill fs-4 text-white"></i>
            </button>
          </div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <a className="navbar-brand" href="/">
                  <img src={brand} alt="logo" />
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <ul className="m-0 list-group">
                <li className="mobile-list-item list-group-item" onClick={handleLinkClick}>
                  <Link to="/" className="nav-link fs-4">Home</Link>
                </li>
                <p className="p-large1 text-900  text-white p-2">Our Courses</p>
                <li className="mobile-list-item list-group-item">
                        <Link to='/advanced-full-stack-developers-course-in-bangalore'  className="nav-link text-dark" onClick={handleLinkClick}>Fullstack Development Courses</Link>
                      </li>
                      <li className="mobile-list-item list-group-item">
                        <Link to='/mern-stack-development-training'  className="nav-link text-dark" onClick={handleLinkClick}>Mern Fullstack Courses</Link>
                      </li>
                      <li className="mobile-list-item list-group-item">
                        <Link to='/java-fullstack-developer-course'  className="nav-link text-dark" onClick={handleLinkClick}>Java Fullstack Courses</Link>
                      </li>
                      <li className="mobile-list-item list-group-item">
                        <Link to='/python-fullstack'  className="nav-link text-dark" onClick={handleLinkClick}>Python Fullstack Courses</Link>
                      </li>
                      <li className="mobile-list-item list-group-item">
                        <Link to='/data-science-course-in-bangalore'  className="nav-link text-dark" onClick={handleLinkClick}>Date science Courses</Link>
                      </li>
                      <li className="mobile-list-item list-group-item">
                        <Link to='/advanced-cloud-computing-aws'  className="nav-link text-dark" onClick={handleLinkClick}>Cloud computing Courses</Link>
                      </li>
                      <li className="mobile-list-item list-group-item">
                        <Link to='/cloudops-devops-course-in-bangalore'  className="nav-link text-dark" onClick={handleLinkClick}>Cloud Oops Courses</Link>
                      </li>
                      <li className="mobile-list-item list-group-item">
                        <Link to='/advanced-digital-marketing-program'  className="nav-link text-dark" onClick={handleLinkClick}>Digital Marketing Courses</Link>
                      </li>
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="/gallery" className="nav-link fs-4">Gallery</Link>
                </li>
                <li className="mobile-list-item list-group-item p-0" onClick={handleLinkClick}>
                  <Link to="/elite" className="nav-link fs-4 bg-gold text-black p-2">
                    <i className="bi bi-stars"></i> Elite
                  </Link>
                </li>
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="/events" className="nav-link fs-4">Events</Link>
                </li>
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="/blogs" className="nav-link fs-4">Blogs</Link>
                </li>
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="/about-us-2" className="nav-link fs-4">About Us</Link>
                </li>
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="/contact-us" className="nav-link fs-4">Contact Us</Link>
                </li>
              </ul>
              <p className="p-large1 text-900 bg-danger-2 text-white p-2 mt-3">For Companies</p>
              <ul className="for-companies p-0 m-0 list-group">
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="https://be-practicalhr.com/corporate-training-in-bangalore" className="nav-link fs-4">Corporate Training</Link>
                </li>
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="https://be-practicalhr.com/" className="nav-link fs-4">Services</Link>
                </li>
                <li className="mobile-list-item list-group-item p-2" onClick={handleLinkClick}>
                  <Link to="/contact-us" className="nav-link fs-4">Hire Trained Graduates</Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-group d-flex align-items-center justify-content-center w-100">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses <i className="bi bi-chevron-down mx-1"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-wide p-0">
                  {/* {CourseData.map((item) => (
                    <React.Fragment key={item._id}>
                      <li className="list-group-item">
                        <Link to={`/${item.seo.canonical_url}`} onClick={() => handleClick(item._id, '')} className="nav-link text-dark">{item.courseName}</Link>
                      </li>
                      {item.subCourses.length !== 0 && (
                        item.subCourses.map((subItem) => (
                          <li key={subItem._id} className="list-group-item">
                            <Link to={`/${subItem.seo.canonical_url}`} onClick={() => handleClick(item._id, subItem._id)} className="nav-link text-dark">{subItem.courseName}</Link>
                          </li>
                        ))
                      )}
                    </React.Fragment>
                  ))} */}

                      <li className="list-group-item">
                        <Link to='/advanced-full-stack-developers-course-in-bangalore'  className="nav-link text-dark">Fullstack Development Courses</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to='/mern-stack-development-training'  className="nav-link text-dark">Mern Fullstack Courses</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to='/java-fullstack-developer-course'  className="nav-link text-dark">Java Fullstack Courses</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to='/python-fullstack'  className="nav-link text-dark">Python Fullstack Courses</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to='/data-science-course-in-bangalore'  className="nav-link text-dark">Date science Courses</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to='/advanced-cloud-computing-aws'  className="nav-link text-dark">Cloud computing Courses</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to='/cloudops-devops-course-in-bangalore'  className="nav-link text-dark">Cloud Ops Courses</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to='/advanced-digital-marketing-program'  className="nav-link text-dark">Digital Marketing Courses</Link>
                      </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="list-group-item">
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/blogs" className="nav-link">Blogs</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/events" className="nav-link">Events</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link elite-link" href="/elite">
                  <i className="bi bi-stars"></i> Elite
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu list-group">
                  <li className="list-group-item">
                    <Link to="/about-us-2" className="nav-link">About Us</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For Companies <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="list-group-item">
                    <Link to="https://www.be-practicalhr.com/corporate-training-services-bangalore" className="nav-link">Corporate Training</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="https://www.be-practicalhr.com/" className="nav-link">HR Services</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="https://www.be-practicalhr.com/hire-train-deploy-services-bangalore" className="nav-link">Hire Trained Graduates</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <a href="/book-demo" className="text-decoration-none">
              <button className="btn-o" type="button">Book Free Master Classes <i className="bi bi-chevron-double-right"></i></button>
            </a>
            <button onClick={handleShowContact} className="btn bg-gray2 mx-2 p-2 rounded-2">
              <i className="bi bi-person-lines-fill fs-4 text-white"></i>
            </button>
            <Offcanvas show={showContact} onHide={handleCloseContact}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <a className="navbar-brand" href="/">
                    <img src={brand} alt="" />
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className="list-group">
                  <li className="list-group-item p-2">
                    <p className="fs-5">
                      <i className="bi bi-telephone-fill text-green mx-2"></i> +91-9242079779
                    </p>
                  </li>
                  <li className="list-group-item p-2">
                    <p className="fs-5">
                      <i className="bi bi-envelope-fill text-yellow mx-2"></i> info@be-practicle.com
                    </p>
                  </li>
                  <li className="list-group-item p-2">
                    <p className="fs-5">
                      <address>
                        <i className="bi bi-building text-main-danger mx-2"></i> #737C, 1st Floor, 1st Cross, 3rd Stage, 4th Block, Basaveshwara Nagar, Bengaluru-560079
                      </address>
                    </p>
                  </li>
                </ul>
                <Link to="tel:+919242079779">
                  <button className="btn bg-success-2 w-100 text-white">Call Now</button>
                </Link>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
