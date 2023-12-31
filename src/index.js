import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './home';
import Services from './services';
import ServiceDetails from './service_details';
import LogIn from './login';
import Register from './register';

function MyRoute() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route index element={<HomePage />} />
        
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyRoute />
);


