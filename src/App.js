import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CoursesList from './CoursesList';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React JS Website</h1>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<CoursesList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
