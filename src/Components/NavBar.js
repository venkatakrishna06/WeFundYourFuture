import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import ConnectModal from './ConnectModal';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import 'animate.css'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
   
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
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
        <a className="brand animate__animated animate__bounce" href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>
        {isSmallScreen ? (
          <>
            <button className="navbar-toggler" type="button" onClick={toggleModal}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </>
        ) : (
          <div className="collapse navbar-collapse animate__animated animate__bounce" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" rel="noopener noreferrer">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
              {/* <Link className="nav-link" target={'_blank'} to="https://api.whatsapp.com/send?phone=9703628658">
                  Contact Us
                </Link> */}


          <p className="nav-link" onClick={openPopup}>Contact us</p>
          <ConnectModal isOpen={isOpen} onRequestClose={closePopup} />
      
              </li>
            </ul>
            {/*<div className="navbar-button">*/}
            {/*  <button className="btn submit-app-btn">Begin Loan Application</button>*/}
            {/*</div>*/}
          </div>
        )}

        <Modal show={isModalOpen} onHide={toggleModal} >
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
              <p className="nav-link" onClick={openPopup}>Contact us</p>
          <ConnectModal isOpen={isOpen} onRequestClose={closePopup} />
              </li>
            </ul>
            {/* <div className="navbar-button">
              <button className="btn submit-app-btn">Begin Loan Application</button>
            </div> */}
          </Modal.Body>

        </Modal>
      </div>
    </nav>
  );
};

export default NavBar;
