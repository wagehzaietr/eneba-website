// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ENEB<span className="text-indigo-400">A</span></h3>
            <p className="text-gray-400 mb-4">
              The best place to buy game keys at competitive prices with instant delivery.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'youtube'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white">
                  <div className="bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="sr-only">{social}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              {['PC Games', 'PlayStation', 'Xbox', 'Nintendo', 'Gift Cards', 'Pre-orders'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-gray-400">
              {['FAQ', 'Support Center', 'Contact Us', 'Return Policy', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and game deals.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Eneba Clone. This is a demo project for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;