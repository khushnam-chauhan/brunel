import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setEmailError(inputEmail.includes('@') ? '' : 'Enter a valid email address');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one page in history
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">Brunel</Link>
        </div>
        <div className="register-links" onClick={handleGoBack}>
          <RxCrossCircled />
        </div>
      </div>
      <div className="registration-form">
        <h2>Registration Form</h2>
        <p className="register-subhead">Start your success Journey here!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error">{emailError}</p>}
          {!name.trim() || !email.trim() || emailError ? (
            <span className="disabled-link">Submit</span>
          ) : (
            <Link to="/success" className="link">
              Submit
            </Link>
          )}
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
