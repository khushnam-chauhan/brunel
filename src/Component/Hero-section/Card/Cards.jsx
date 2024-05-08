import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card card1">
        <div className="card-content ">
          <h2 className="card-percentage">40%</h2>
          <p className="card-text ">
            Achieved reduction in project execution time by optimising team availability
          </p>
        </div>
      </div>
      <div className="card card2">
        <div className="card-content ">
          <div className="card-icon">
            <i className="fas fa-user-check"></i>
            <p>10 DAYS</p>
          </div>
          <p className="card-text ">Staff Deployment</p>
        </div>
      </div>
      <div className="card card3">
        <div className="card-content">
          <h2 className="card-amount">$0.5 <span>MILLION</span></h2>
          <p className="card-text ">
            Reduced client expenses by saving on hiring and employee costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;