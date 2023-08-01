
import './ConnectModal.css'; // Import the CSS file
import React, { useState }  from 'react';
import StartJourneyForm from './StartJourneyForm';
import Modal from 'react-modal';

const ConnectModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Modal" >
      <div className="popup-container">
        <button className="close-button" onClick={onRequestClose} type="button"  aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

<div className="left-side">
<h1 className='title1'>BP Finance</h1>
<div className='leftside_JDBS'>
        <h2 className='title2'>Why US ?</h2>
        <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
              <img className='greenTick_bg'
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2712%27/%3e"
                
              />
              <img className='greenTick_icon'
                alt="banner"
                src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg"
                decoding="async"
              />
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list">Flexible Collateral</p>
          </div>
       
          <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
              <img className='greenTick_bg'
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2712%27/%3e"
                
              />
              <img className='greenTick_icon'
                alt="banner"
                src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg"
                decoding="async"
              />
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list"> AI Powered Loan Partner Suggestions</p>
          </div>
          <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
              <img className='greenTick_bg'
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2712%27/%3e"
                
              />
              <img className='greenTick_icon'
                alt="banner"
                src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg"
                decoding="async"
              />
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list">Low Bank Processing Fee</p>
          </div>
      </div>
      <div className='leftSide_bottom_contact'>Need Quick Loan Assistance? Call Our Experts on</div>
      <div className='quick_assist_call'> <a href="tel:9703628658">
      
      <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list">+919703628658</p>
          </div>
          </a>
      </div>
      
      </div>
      <div className="right-side">
        <StartJourneyForm></StartJourneyForm>
      </div>
     
        
       
      </div>
    </Modal>
  );
};

export default ConnectModal ;

