
import './ConnectModal.css'; // Import the CSS file
import React, { useState }  from 'react';
import StartJourneyForm from './StartJourneyForm';
import Modal from 'react-modal';


const ConnectModal = ({ isOpen, onRequestClose }) => {






  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Modal"
    >
      <div className="popup-container">
        <button className="close-button" onClick={onRequestClose} type="button"  aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
     
        <div className="left-div">
          {/* Content for the left div */}
         
        <div className='modal-left-content'>
        <h2>We Fund Your Future</h2>


        <div className='sub-text'>Our Uniqueness 
        <ul>
          <li>
          Low Bank Processing Fee
          </li>
          <li>
          Flexible Collateral
          </li>
          <li>AI Powered Loan Partner Suggestions</li>
        </ul>
        </div>

        </div> 
          




        </div>
        <div className="right-div">
          {/* Content for the right div */}

          <div className="form-container">
      
      <StartJourneyForm></StartJourneyForm>

  
    </div>
       
        </div>
      </div>
    </Modal>
  );
};

export default ConnectModal ;

