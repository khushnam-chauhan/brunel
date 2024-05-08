import React, { useState, useEffect } from 'react';
import './SuccessSubmission.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SuccessSubmission = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
        <Link to="/">Brunel</Link>
        </div>
      </div>
      <div className="success-container">
        <div className="success-icon">✅</div>
        <h2>Success Submitted</h2>
        <p className='success-subhead'>Congratulations</p>
        <p>
          Your request has been successfully submitted to us. We will validate your information and reach out to your shortly
          with updates.
        </p>
        <p className='timer'>Redirecting you to Homepage in <span>{countdown} {countdown === 1 ? 'Second' : 'Seconds'}</span></p>
      </div>
    </>
  );
};

export default SuccessSubmission;
