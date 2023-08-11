import './StartJourneyForm.css';
import React, { useState } from 'react';

import 'react-js-dropdavn/dist/index.css'
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { collection, getDocs,addDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from 'react-spinners';
import { SimpleDropdown } from 'react-js-dropdavn';
import ChooseCountry from './ChooseCountry';
const StartJourneyForm = ({closeModal}) => {
  const navigate = useNavigate();
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
  const storage = getStorage(app);

  const [isLoading, setLoading]= useState(false);


  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    country: '',
    loanAmount:'',
    admissionStatus:'',
    targetIntake:'',
    dateSubmitted: new Date(),
    file_input: null,
  });

  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    // country: '',
    // loanAmount:'',
    // file_input: '',
    admissionStatus:'',
    targetIntake:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file_input: file,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      file_input: '',
    }));
  };

  const handleSubmitDataInSheet = (e) => {
    setLoading(true);
    e.preventDefault();
    $.ajax({
      type        : 'POST',
      url         : 'https://script.google.com/macros/s/AKfycbyhlnLmi11zZMTN4k8vDz6-obrxY8o5cT6vFXvstFmzW9_amgCoLT-VEok9acXlQfa4nQ/exec',
      data        : formData,
    }).done(function(data) {
      <FadeLoader color="#36d7b7" />
      if(data.result == 'success') {
        setLoading(false);

        closeModal()
      }
      else {
        closeModal()

      }
    }).fail(function (jqXHR,status,err) {
      closeModal()

    });

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
   

    // Validation rules
    if (formData.first_name.trim() === '') {
      newErrors.first_name = 'First Name is required';
    }

    if (formData.last_name.trim() === '') {
      newErrors.last_name = 'Last Name is required';
    }

    if (!/^\d+$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Phone Number should contain only digits';
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (formData.admissionStatus.trim() === '') {
      newErrors.last_name = 'Status is required';
    }
    if (formData.targetIntake.trim() === '') {
      newErrors.last_name = 'Intake date is required';
    }
    // if (formData.country === '') {
    //   newErrors.country = 'Please select a country';
    // }

    // if (!formData.file_input) {
    //   newErrors.file_input = 'Please choose a file';
    // }
    // Check for any errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      let userData = {...formData};
      const customFile = formData.file_input;
      delete userData['file_input']

      const docRef = await addDoc(collection(db, "students_enquired"), {...userData});
      console.log("Document written with ID: ", docRef.id);


      const storageRef = ref(storage, `files/${docRef.id}`);
      const uploadTask = uploadBytesResumable(storageRef, customFile);

      uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log(downloadURL)
            });
          }
      );


      await getDocs(collection(db, "students_enquired"))
          .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            console.log(newData);
          })
    }
  }


  const ChooseCountryMenu = [
    {label: 'US', value: 'us'},
    {label: 'UK', value: 'uk'},
    {label: 'Ireland', value: 'ireland'},
    {label: 'Canada', value: 'canada'},
    {label: 'Germany', value: 'germany'},
    
  ]




  const admissionStatusMenu=[
    {label: 'Not Applied', value: 'NotApplied'},
    {label: 'Applied', value: 'applied'},
    {label: 'Confirmed', value: 'confirmed'},



  ]


  return (
    <form onSubmit={handleSubmitDataInSheet}>
      <div className="container form-container">
        <div className="form-title">
        <h2 className="form-title">Start your journey now</h2>
      <p className="form-subtitle">Help us with a few details.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <input
                type="text"
                id="first-name"
                name="first_name"
                className="form-control"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <label htmlFor="first-name">First Name</label>
              {errors.first_name && <div className="error-msg">{errors.first_name}</div>}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <input
                type="text"
                id="last-name"
                name="last_name"
                className="form-control"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
              <label htmlFor="last-name">Last Name</label>
              {errors.last_name && <div className="error-msg">{errors.last_name}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <input
                type="tel"
                id="phone-number"
                name="phone_number"
                pattern="[0-9]+"
                className="form-control"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone-number">Phone Number</label>
              {errors.phone_number && <div className="error-msg">{errors.phone_number}</div>}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              {errors.email && <div className="error-msg">{errors.email}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <select
                id="country"
                name="country"
                className="form-control"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled>Select Country</option>
                <option value="IN">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="AUS">Australia</option>
                <option value="CA">Canada</option>
              </select>
              {errors.country && <div className="error-msg">{errors.country}</div>}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                className="form-control"
                value={formData.loanAmount}
                onChange={handleChange}
                required

              />
              <label htmlFor="email">Loan Amount</label>
              {errors.loanAmount && <div className="error-msg">{errors.loanAmount}</div>}
            </div>
          </div>
        </div>
        {/*<div className="row"><p className='input-file-label'>Upload relavent documents</p>*/}
        {/*  <div className="col-md-6 col-sm-12">*/}
        {/*    <input*/}
        {/*      type="file"*/}
        {/*      id="file-input"*/}
        {/*      name="file_input"*/}
        {/*      className="file-input"*/}
        {/*      onChange={handleFileChange}*/}
        {/*    />*/}
        {/*    {errors.file_input && <div className="error-msg">{errors.file_input}</div>}*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <select
                id="admissionStatus"
                name="admissionStatus"
                className="form-control"
                value={formData.admissionStatus}
                onChange={handleChange}
              >
                <option value="" disabled>Admission Status</option>
                <option value="Not Applied">Not Applied</option>
                <option value="Applied">Applied</option>
                <option value="Confirmed">Confirmed</option>
                
              </select>
              {errors.country && <div className="error-msg">{errors.admissionStatus}</div>}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <input
                type="date"
                id="targetIntake"
                name="targetIntake"
                className="form-control"
                value={formData.targetIntake}
                onChange={handleChange}

              />
              <label htmlFor="targetIntake">Target Intake</label>
              {errors.loanAmount && <div className="error-msg">{errors.targetIntake}</div>}
            </div>
          </div>
        </div>
        {
         !isLoading && <>
         <button type="submit" className="submit-button">Submit</button>
        </>
       }
       {
        isLoading && <>
        <div className='loader-div'>
        
        <FadeLoader color="#36d7b7"  />
        </div>
        </>
       }
      </div>
    </form>
  );
};

export default StartJourneyForm;


