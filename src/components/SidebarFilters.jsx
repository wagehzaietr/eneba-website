// src/components/SidebarFilters.jsx
import React from 'react';

const SidebarFilters = ({
  priceRange,
  setPriceRange,
  selectedPlatforms,
  setSelectedPlatforms,
  selectedCategories,
  setSelectedCategories,
  platforms,
  resetFilters
}) => {
  const categories = [
    'Action', 'Adventure', 'RPG', 'Strategy', 
    'Simulation', 'Sports', 'Racing', 'Indie'
  ];

  const togglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="md:w-64 flex-shrink-0 bg-white rounded-lg shadow p-4 h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <button 
          onClick={resetFilters}
          className="text-sm text-indigo-600 hover:text-indigo-800"
        >
          Reset All
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h3 className="font-semibold text-gray-700">Price Range</h3>
          <span className="text-indigo-600 font-medium">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Platform</h3>
        <div className="space-y-2">
          {platforms.map(platform => (
            <div key={platform.id} className="flex items-center">
              <input
                type="checkbox"
                id={`platform-${platform.id}`}
                checked={selectedPlatforms.includes(platform.id)}
                onChange={() => togglePlatform(platform.id)}
                className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <label htmlFor={`platform-${platform.id}`} className="ml-2 text-gray-700 flex items-center">
                <div className={`w-5 h-5 mr-2 ${platform.color}`}></div>
                {platform.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <label htmlFor={`category-${category}`} className="ml-2 text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Deals</h3>
        <div className="space-y-2">
          {['Discounts', 'Special Offers', 'Free to Play'].map(deal => (
            <div key={deal} className="flex items-center">
              <input
                type="checkbox"
                id={`deal-${deal}`}
                className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <label htmlFor={`deal-${deal}`} className="ml-2 text-gray-700">
                {deal}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => {}}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SidebarFilters;