// src/pages/GameDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import  games from '../data/games';
import { FaWindows, FaXbox, FaPlaystation, FaGamepad } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';
import LoadingSpinner from '../components/LoadingSpinner';

const GameDetailsPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    const timer = setTimeout(() => {
      const foundGame = games.find(g => g.id === parseInt(id));
      
      if (foundGame) {
        setGame(foundGame);
      } else {
        setError(true);
      }
      
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const platformIcons = {
    pc: <FaWindows className="text-blue-500" />,
    xbox: <FaXbox className="text-green-500" />,
    ps: <FaPlaystation className="text-blue-800" />,
    switch: <FaGamepad className="text-red-500" />
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <LoadingSpinner size="lg" className="mx-auto" />
        <p className="mt-4 text-gray-600">Loading game details...</p>
      </div>
    );
  }
  
  if (error || !game) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Game Not Found</h2>
        <p className="text-gray-600 mb-8">The game you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Back to Store
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <ol className="flex space-x-2">
          <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="text-gray-400">/</li>
          <li><Link to="/" className="hover:text-indigo-600">Games</Link></li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium truncate max-w-xs">{game.title}</li>
        </ol>
      </nav>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Images */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
            <LazyImage 
              src={game.image} 
              alt={game.title} 
              className="w-full h-96"
              spinnerSize="lg"
              spinnerClassName="text-indigo-300"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(index - 1)}
                className={`bg-white rounded-lg shadow-sm overflow-hidden border-2 ${selectedImage === index - 1 ? 'border-indigo-600' : 'border-transparent'}`}
              >
                <LazyImage 
                  src={game.image} 
                  alt={`${game.title} screenshot ${index}`} 
                  className="w-full h-20"
                  spinnerSize="sm"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Right Column - Game Details */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{game.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{game.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{game.category}</span>
                </div>
              </div>
              
              {game.discount > 0 && (
                <div className="bg-red-500 text-white font-bold text-sm px-2 py-1 rounded-md">
                  -{game.discount}%
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {game.platforms.map(platform => (
                <div key={platform} className="flex items-center bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                  <span className="mr-2">
                    {platformIcons[platform]}
                  </span>
                  <span>
                    {platform === 'pc' ? 'PC' : 
                     platform === 'xbox' ? 'Xbox' : 
                     platform === 'ps' ? 'PlayStation' : 
                     'Nintendo Switch'}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-700 mb-6">
              {game.longDescription || game.description}
            </p>
            
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {game.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                )) || [
                  "Open world exploration",
                  "Rich story with multiple endings",
                  "Customizable characters",
                  "Multiplayer support",
                  "Regular content updates"
                ].map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">${game.price.toFixed(2)}</span>
                    {game.discount > 0 && (
                      <span className="ml-2 text-gray-500 line-through">${game.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="text-green-600 font-medium">
                    Instant delivery
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <div className="flex border border-gray-300 rounded">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        id="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-12 text-center border-x border-gray-300"
                      />
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  <button className="bg-indigo-600 mt-6 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-blue-700">
                  This is a digital product. After purchase, you will receive a game key that you can activate on the appropriate platform.
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-8 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About this game</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">System Requirements</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">OS:</span> Windows 10 (64-bit)</li>
                    <li><span className="font-medium">Processor:</span> Intel Core i5-4460 or AMD FX-6300</li>
                    <li><span className="font-medium">Memory:</span> 8 GB RAM</li>
                    <li><span className="font-medium">Graphics:</span> NVIDIA GeForce GTX 760 or AMD Radeon R7 260x</li>
                    <li><span className="font-medium">Storage:</span> 50 GB available space</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Additional Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="block text-sm text-gray-500">Developer</span>
                    <span className="font-medium">CD Projekt Red</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Release Date</span>
                    <span className="font-medium">December 10, 2020</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Languages</span>
                    <span className="font-medium">English, French, German, Spanish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Games */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games
            .filter(g => g.id !== game.id)
            .slice(0, 4)
            .map(game => (
              <Link 
                key={game.id} 
                to={`/game/${game.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <LazyImage 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-48"
                  spinnerSize="md"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{game.title}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      {game.discount > 0 ? (
                        <div className="flex items-baseline">
                          <span className="font-bold text-gray-800">${game.price.toFixed(2)}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">${game.originalPrice.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-gray-800">${game.price.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{game.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;