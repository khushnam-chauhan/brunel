import React, { useState } from 'react';
import Question from './Question';
import './questions.css'

const questionsAndAnswers = [
  {
    question: 'Do you offer freelancers?',
    answer: 'Yes, we have a network of highly skilled freelancers available for hire.'
  },
  {
    question: 'What\'s the guarantee that I will be satisfied with the hired talent?',
    answer: 'We have a rigorous vetting process for our freelancers to ensure top-notch quality. If you\'re not satisfied, we offer a money-back guarantee.'
  },
  {
    question: 'Can I hire multiple talents at once?',
    answer: 'Absolutely! You can hire as many freelancers as you need to work on your project simultaneously.'
  },
  {
    question: 'Why shouldn\'t I go to an agency directly?',
    answer: 'While agencies can be a good option, our platform offers more flexibility, cost-efficiency, and a diverse pool of talents to choose from.'
  },
  {
    question: 'Who can help me pick a right skillset and duration for me?',
    answer: 'Our team of project consultants can help you assess your needs and recommend the best skillsets and duration for your project.'
  }
];

const QuestionAccordion = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setOpenQuestions((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className='question-section'>
      <div className='heading'>
      <h2>what's on your mind</h2>
      <h1>Ask Questions</h1>
      </div>
      <div className='questions' >
        {questionsAndAnswers.map(({ question, answer }, index) => (
          <Question
            key={index}
            questionText={question}
            answerText={answer}
            isOpen={openQuestions.includes(index)}
            toggleQuestion={() => toggleQuestion(index)}
            answerStyle={{ fontWeight: 'lighter', fontSize: '15px', marginTop:'20px' }} 
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionAccordion;