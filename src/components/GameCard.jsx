// src/components/GameCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <Link 
      to={`/game/${game.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow block"
    >
      <div className="relative">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-48 object-cover"
        />
        {game.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white font-bold text-sm px-2 py-1 rounded-md">
            -{game.discount}%
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex space-x-1">
          {game.platforms.map(platform => (
            <div key={platform} className={`w-6 h-6 rounded-full flex items-center justify-center ${platform === 'pc' ? 'bg-blue-500' : platform === 'xbox' ? 'bg-green-500' : platform === 'ps' ? 'bg-blue-800' : 'bg-red-500'}`}>
              <span className="text-white text-xs font-bold">
                {platform === 'pc' ? 'PC' : platform === 'xbox' ? 'XB' : platform === 'ps' ? 'PS' : 'NS'}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{game.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">{game.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div>
            {game.discount > 0 ? (
              <div className="flex items-baseline">
                <span className="text-lg font-bold text-gray-800">${game.price.toFixed(2)}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${game.originalPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800">${game.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{game.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;