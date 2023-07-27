
import './ConnectModal.css'; // Import the CSS file
import React, { useState }  from 'react';
import Modal from 'react-modal';
import { initializeApp, cert } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { collection, getDocs,addDoc } from "firebase/firestore";

const ConnectModal = ({ isOpen, onRequestClose }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDJa0wWs8YV4ImbYj55Uq6bgnIcN-nCHFk",
        authDomain: "we-fund-your-future.firebaseapp.com",
        projectId: "we-fund-your-future",
        storageBucket: "we-fund-your-future.appspot.com",
        messagingSenderId: "1351502469",
        appId: "1:1351502469:web:d00049527062ab9d8df7ec",
        measurementId: "G-R6BXGKFH24"
    };
      const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [originCountry, setOriginCountry] = useState('');
  const [destination, setDestination] = useState('');
  
  const [loanAmount, setLoanAmount] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!fullName) {
      errors.fullName = 'Full name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    }
    if (!originCountry) {
      errors.originCountry = 'Origin is required';
    }
    if (!destination) {
      errors.destination = ' Destination is required';
    }

    if (!loanAmount) {
      errors.loanAmount = ' Loan Amount is required';
    }

    // Add more validations for email, phone number, and loan amount if needed

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit =   async (e) => {
      e.preventDefault();
      if (validateForm()) {
          // Handle form submission here
          console.log('Form submitted successfully!');
          const docRef = await addDoc(collection(db, "students_enquired"), {
           fullName, email, phoneNumber
          });
          console.log("Document written with ID: ", docRef.id);
          await getDocs(collection(db, "students_enquired"))
              .then((querySnapshot)=>{
                  const newData = querySnapshot.docs
                      .map((doc) => ({...doc.data(), id:doc.id }));
                  console.log(newData);
              })
          debugger;
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
      <h2 className="form-title">Start your journey now</h2>
      <p className="form-subtitle">Help us with a few details.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="input"
            placeholder='Jennifer'
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
           Email Address
          </label>
          <input
            className="input"
            placeholder='Jenmifer@example.co '
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.fullName && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>
        <div className="input-group">
          <label className="label" htmlFor="phoneNo">
            Phone Number
          </label>
          <input
            className="input"
            placeholder='7893281389'
            type="number"
            id="phoneNo"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <p className="error-message">{errors.phoneNumber}</p>
          )}
        </div> 
        <div className="input-group">
          <label className="label" htmlFor="originCountry">
            Origin Country
          </label>
          <input
            className="input"
            placeholder='India'
            type="text"
            id="originCountry"
            value={originCountry}
            onChange={(e) => setOriginCountry(e.target.value)}
          />
          {errors.originCountry && (
            <p className="error-message">{errors.originCountry}</p>
          )}
        </div> 
        <div className="input-group">
          <label className="label" htmlFor="destination">
            Destination Country
          </label>
          <input
            className="input"
            placeholder='USA'
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          {errors.destination && (
            <p className="error-message">{errors.destination}</p>
          )}
        </div> 

        <div className="input-group">
          <label className="label" htmlFor="loanAmount">
            Loan required
          </label>
          <input
            className="input"
            placeholder='20000'
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          {errors.loanAmount && (
            <p className="error-message">{errors.loanAmount}</p>
          )}
        </div> 
        <button type="submit" className='modal-form-submiotBtn'>Submit</button>
      </form>
    </div>
       
        </div>
      </div>
    </Modal>
  );
};

export default ConnectModal ;

