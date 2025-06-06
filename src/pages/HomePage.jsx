// src/pages/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarFilters from '../components/SidebarFilters';
import GameGrid from '../components/GameGrid';
import  games  from '../data/games';
import  platforms  from '../data/platforms';

const HomePage = () => {
  const [filteredGames, setFilteredGames] = useState(games);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilter = () => {
    let result = [...games];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
      );
    }
    
    // Apply platform filter
    if (selectedPlatforms.length > 0) {
      result = result.filter(game => 
        selectedPlatforms.every(platform => game.platforms.includes(platform))
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(game => 
        selectedCategories.includes(game.category)
      );
    }
    
    // Apply price filter
    result = result.filter(game => 
      game.price >= priceRange[0] && game.price <= priceRange[1]
    );
    
    setFilteredGames(result);
  };

  const resetFilters = () => {
    setPriceRange([0, 100]);
    setSelectedPlatforms([]);
    setSelectedCategories([]);
    setSearchQuery('');
    setFilteredGames(games);
  };

  React.useEffect(() => {
    handleFilter();
  }, [priceRange, selectedPlatforms, selectedCategories, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-6 gap-6">
      <div className="md:hidden mb-4">
        <button 
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
        >
          <span className="mr-2">{showMobileFilters ? 'Hide' : 'Show'} Filters</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {(showMobileFilters || window.innerWidth >= 768) && (
          <SidebarFilters 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedPlatforms={selectedPlatforms}
            setSelectedPlatforms={setSelectedPlatforms}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            platforms={platforms}
            resetFilters={resetFilters}
          />
        )}
        
        <GameGrid games={filteredGames} />
      </div>
    </div>
  );
};

export default HomePage;