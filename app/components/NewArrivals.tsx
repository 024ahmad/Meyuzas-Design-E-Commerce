'use client';
import { useEffect } from 'react';

const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    rating: 5,
    reviews: 1450,
    price: 120,
    originalPrice: null,
    image: "/product1.png"
  },
  {
    id: 2,
    name: "Sidony Fit Jeans", 
    rating: 4,
    reviews: 1300,
    price: 240,
    originalPrice: 260,
    image: "/product2.png"
  },
  {
    id: 3,
    name: "Checkered Shirt",
    rating: 5, 
    reviews: 1400,
    price: 180,
    originalPrice: null,
    image: "/product3.png"
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    rating: 5,
    reviews: 1400,
    price: 130,
    originalPrice: 160, 
    image: "/product4.png"
  }
];

export default function NewArrivals() {
  // Debug images on component mount
  useEffect(() => {
    products.forEach(product => {
      const img = new Image();
      img.onload = () => console.log(`✅ ${product.name} loaded: ${product.image}`);
      img.onerror = () => console.log(`❌ ${product.name} failed: ${product.image}`);
      img.src = product.image;
    });
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star} 
            className={`text-sm ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            NEW ARRIVALS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Discover our latest collection of trendy and fashionable clothing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-xl transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
                
                {/* FIXED: Square aspect ratio without aspect-square */}
                <div className="relative bg-gray-50 rounded-xl">
                  <div className="w-full h-64 overflow-hidden rounded-xl"> {/* Fixed height */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-xl"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-xl"></div>
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-3 lg:p-4 space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-black transition-colors duration-200">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    {renderStars(product.rating)}
                    <span className="text-xs text-gray-600">
                      {product.reviews.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-black text-white py-2 rounded-lg font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-gray-800 text-gray-800 px-8 py-3 rounded-full font-medium text-base hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}