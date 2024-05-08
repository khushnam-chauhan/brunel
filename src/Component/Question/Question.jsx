import React from 'react';

const Question = ({ questionText, answerText, isOpen, toggleQuestion, answerStyle }) => {
  return (
    <div>
      <div className='question' onClick={toggleQuestion}>
        {questionText}
        <span className="toggle-icon">{isOpen ? '-' : '+'}</span>

      </div>
      {isOpen && <div style={answerStyle}>{answerText}</div>}
      <hr className="question-line" />
    </div>
  );
};

export default Question;