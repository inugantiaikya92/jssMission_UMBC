import React from 'react';
import Dashboard from './Dashborad';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CateringForm from './components/CateringForm';
import Yoga from './components/Yoga';
import CateringReqForm from './components/CateringReqForm';


const App = () => {
  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/CateringForm" element={<CateringForm />} />
        <Route path="/Yoga" element={<Yoga />} />
        <Route path="/CatringReq" element={<CateringReqForm />} />
      </Routes>
    </Router>
  );
};

export default App;
