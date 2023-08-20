import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import ConnectModal from './ConnectModal';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import 'animate.css'
import Dropdown from 'react-bootstrap/Dropdown';



const NavBar = () => {


// popup modal function

  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    
    setIsOpen(false);
    
    document.body.style.overflow = 'auto';
  };

//popup modal function end




  // const [isModalOpen, setIsModalOpen] = useState(false);
  

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 768);
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="brand animate__animated animate__bounce" href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>
       
           <Dropdown id='nav-small-menu'>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
      <span ><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/about">About Us</Dropdown.Item>
        
        <Dropdown.Item >
        <p  onClick={openPopup}>Contact us</p>
          <ConnectModal isOpen={isOpen} onRequestClose={closePopup} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        
        
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
       
 
      </div>
    </nav>
  );
};

export default NavBar;
