import './StartJourneyForm.css';
import React, { useState } from 'react';

const StartJourneyForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    country: '',
    loanAmount:'',
    file_input: null,
  });

  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    country: '',
    loanAmount:'',
    file_input: '',
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

  const handleSubmit = (event) => {
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

    if (formData.country === '') {
      newErrors.country = 'Please select a country';
    }

    if (!formData.file_input) {
      newErrors.file_input = 'Please choose a file';
    }

    // Check for any errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Add your API call or further processing here.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
                required
              >
                <option value="" disabled>Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
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
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <label className="file-input-label" htmlFor="file-input">
              Choose File
            </label>
            <input
              type="file"
              id="file-input"
              name="file_input"
              className="file-input"
              onChange={handleFileChange}
              
            />
            {errors.file_input && <div className="error-msg">{errors.file_input}</div>}
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
};

export default StartJourneyForm;


