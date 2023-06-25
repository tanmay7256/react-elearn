import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage } from './mycomponents/home.js'
import { Navbar } from './mycomponents/navbar'
import { Footer } from './mycomponents/footer'
import { Login } from './mycomponents/login'
import { Register } from './mycomponents/register'
import { Dashboard } from './mycomponents/dashboard'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Homepage /> <Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;