// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameDetailsPage from './pages/GameDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<GameDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>

  );
}

export default App;