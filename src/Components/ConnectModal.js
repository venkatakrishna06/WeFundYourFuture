
import './ConnectModal.css'; // Import the CSS file
import React, { useState }  from 'react';
import Modal from 'react-modal';


const ConnectModal = ({ isOpen, onRequestClose }) => {
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!fullName) {
      errors.fullName = 'Full name is required';
    }

    // Add more validations for email, phone number, and loan amount if needed

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted successfully!');
    }
  };









  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Modal"
    >
      <div className="popup-container">
      <button className="close-button" onClick={onRequestClose}>
          X
        </button>
        <div className="left-div">
          {/* Content for the left div */}
          <h2>We Fund Your Future</h2>
        </div>
        <div className="right-div">
          {/* Content for the right div */}

          <div className="form-container">
      <h1 className="form-title">Form Title</h1>
      <p className="form-subtitle">Form Subtitle</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="input"
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <p className="error-message">{errors.fullName}</p>
          )}
        </div>

        {/* Add input fields for email, phone number, and loan amount with similar structure */}
        {/* For example: */}
        <div className="input-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div> 
        
        <button type="submit">Submit</button>
      </form>
    </div>
       
        </div>
      </div>
    </Modal>
  );
};

export default ConnectModal ;

