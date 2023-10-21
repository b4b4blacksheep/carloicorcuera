import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Project from './pages/Project';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        {/* Add other Routes here */}
      </Routes>
    </BrowserRouter>
  );
}