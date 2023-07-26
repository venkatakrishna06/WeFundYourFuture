import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="brand" href="/">
          <img src="https://i.ibb.co/C2CrWbq/logo.png" alt="Logo" className="navbar-logo" />
        </a>
        {isSmallScreen ? (
          <>

            <button className="navbar-toggler" type="button" onClick={toggleModal}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Study Abroad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Student Accomidation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="navbar-button">
              <button className="btn submit-app-btn">Begin Loan Application</button>
            </div>
          </div>
        )}

        <Modal show={isModalOpen} onHide={toggleModal} >
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Student Loan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Study Abroad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Student Accommodation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="navbar-button">
              <button className="btn submit-app-btn">Begin Loan Application</button>
            </div>
          </Modal.Body>

        </Modal>
      </div>
    </nav>
  );
};

export default NavBar;
