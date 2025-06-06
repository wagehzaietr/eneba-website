// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch, searchQuery }) => {
  return (
    <header className="bg-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Link to='/' className="flex items-center">
              <img className='bg-cover rounded-full mx-3 w-10 h-10' src="/logo1.jpg" alt="" />
              <h1 className="text-2xl font-bold">wageh<span className="text-indigo-300">zaiter</span></h1>
            </Link>
            
            <nav className="hidden md:block ml-10">
              <ul className="flex space-x-6">
                {['Store', 'Xbox', 'PlayStation', 'Nintendo', 'Gift Cards', 'Subscriptions'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-200 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="flex-1 max-w-2xl w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for games..."
                className="w-full py-2 px-4 rounded-lg border-1 text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            
            <div className="flex items-center bg-indigo-700 hover:bg-indigo-600 px-3 py-1 rounded-md cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-900 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-6 hide-scrollbar">
            {['Top Deals', 'New Releases', 'Under $10', 'Pre-orders', 'Best Sellers', 'Free Games', 'Indie Games', 'Coming Soon'].map((item) => (
              <a key={item} href="#" className="whitespace-nowrap hover:text-indigo-200 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;