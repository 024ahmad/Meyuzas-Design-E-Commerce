'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Optional: Image slideshow for multiple hero images
  const heroImages = [
    '/couple.png',
    // Add more images if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#9ECFD4] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
             50% off on your first order
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Fashionable and trendy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                clothing
              </span>{' '}
              for everyone
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Discover the latest trends in clothing. From casual to formal, we have it all. 
              Shop now and get 50% off on your first order!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Order Now →
              </button>
              
              <button className="border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:border-black hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Explore More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 lg:pt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600 mt-1">International Brands</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">2,000+</div>
                <div className="text-sm text-gray-600 mt-1">High-Quality Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">30,000+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
                <img 
                  src="/couple.png" 
                  alt="Fashionable couple wearing trendy clothing"
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">⭐ 4.8</div>
                    <div className="text-xs text-gray-600">Rated by 10k+</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-lg font-bold">🔥 Trending</div>
                    <div className="text-xs opacity-90">This Week</div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl transform rotate-3 scale-105"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}