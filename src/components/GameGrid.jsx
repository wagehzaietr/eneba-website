// src/components/GameGrid.jsx
import React from 'react';
import GameCard from './GameCard';

const GameGrid = ({ games }) => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {games.length} {games.length === 1 ? 'Game' : 'Games'} Found
        </h2>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Sort by:</span>
          <select className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
            <option>Best Rated</option>
          </select>
        </div>
      </div>
      
      {games.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">No games found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters to find more games</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameGrid;