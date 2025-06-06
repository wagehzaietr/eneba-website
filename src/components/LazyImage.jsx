// src/components/LazyImage.jsx
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  spinnerSize = 'md',
  spinnerClassName = ''
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner size={spinnerSize} className={spinnerClassName} />
        </div>
      )}
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 border border-dashed border-gray-300">
          <div className="text-gray-400 text-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-xs">Image failed to load</span>
          </div>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover ${loaded ? 'block' : 'invisible'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;