// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const GameDetailsPage = lazy(() => import('./pages/GameDetailsPage'))

function App () {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Header />
      <main className='flex-1'>
        <Suspense
          fallback={
            <div className='flex justify-center items-center h-64'>
              <LoadingSpinner size='lg' />
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/game/:id' element={<GameDetailsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
