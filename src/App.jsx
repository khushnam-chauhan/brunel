import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './Component/Registration/RegistrationForm';
import SuccessSubmission from './Component/SucessSubmission/SuccessSubmission';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/success' element={<SuccessSubmission />} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
