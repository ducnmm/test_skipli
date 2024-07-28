import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhoneNumberForm from './PhoneNumberForm';
import AccessCodeForm from './AccessCodeForm';
import Main from './components/Main';
import FacebookPost from './components/FacebookPost';
import GetInspired from './components/GetInspired';
import StartFromScratch from './components/StartFromScratch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneNumberForm />} />
        <Route path="/verify-code" element={<AccessCodeForm />} />
        <Route path="/home" element={<Main />} />
        <Route path="/facebook-post" element={<FacebookPost />} />
        <Route path="/get-inspired" element={<GetInspired />} />
        <Route path="/start-from-scratch" element={<StartFromScratch />} />

      </Routes>
    </Router>
  );
};

export default App;