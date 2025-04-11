import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PlantsList from './pages/PlantsList';
import PlantDetails from './pages/PlantDetails';
import PurchaseRequest from './pages/PurchaseRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants" element={<PlantsList />} />
        <Route path="/plant/:slug" element={<PlantDetails />} />
        <Route path="/purchase" element={<PurchaseRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
