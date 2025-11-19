'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'On Sale', path: '/on-sale' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#78B9B5] backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto">
          
          {/* Left: Logo with custom image */}
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/Meyuza's Logo.png" 
                alt="Meyuza's Design" 
                width={100} 
                height={100}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Center: Navigation Links with center-to-corners animation */}
          <nav className="hidden md:flex items-center space-x-8 ">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path}
                className="relative text-[#016B61] hover:text-black font-bold text-base transition-all duration-300 group py-4 px-2 "
              >
                {item.name}
                
                {/* Animated underline - Center to corners - FIXED */}
                <span className="absolute bottom-3 left-1/2 w-0 h-0.5 bg-black transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </nav>

          {/* Right: Search, Cart, Profile with custom images */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Bar with search button */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
                <svg className="h-4 w-4 text-gray-400 transition-colors duration-300 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for products..."
                className="pl-10 pr-12 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white w-64 transition-all duration-300 hover:bg-gray-200 focus:shadow-lg focus:scale-105"
              />
              
              {/* Search Button - Visible when typing */}
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center opacity-0 focus:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 hover:scale-110">
                <svg className="h-4 w-4 text-gray-600 hover:text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Cart Icon */}
            <button className="relative p-2 group hover:scale-105 rounded-lg bg-[#016B61] hover:bg-[#014a43] focus:ring-2 focus:ring-[#016B61] focus:ring-opacity-50 transition-all duration-300">
              <img 
                src="/cart.png" 
                alt="Cart" 
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                View Cart
              </div>
            </button>

            {/* User Profile */}
            <button className="relative p-2 group hover:scale-105 rounded-lg bg-[#016B61] hover:bg-[#014a43] focus:ring-2 focus:ring-[#016B61] focus:ring-opacity-50 transition-all duration-300">
              <img 
                src="/user.png" 
                alt="My Account" 
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                My Account
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black">
              <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <svg 
                className={`h-5 w-5 text-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}>
          <div className="flex flex-col space-y-3 px-4">
            {navItems.map((item, index) => (
              <Link 
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-black font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:translate-x-2 hover:shadow-sm text-base"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Search */}
            <div className="relative mt-4 group">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300 focus:shadow-lg"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:scale-110">
                <svg className="h-4 w-4 text-gray-400 transition-colors duration-300 group-focus-within:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}