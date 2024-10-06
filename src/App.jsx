import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayFaculty from './components/DisplayFaculty';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayFaculty />} />
       
      </Routes>
    </Router>
  );
};

export default App;


