'use client';

export default function Newsletter() {
  return (
    <section className="bg-black text-white py-8 lg:py-3 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-xl lg:text-4xl font-bold mb-2 leading-tight">
                STAY UPTO DATE ABOUT<br />
                OUR LATEST OFFERS
              </h2>
            </div>

            {/* Right Side - Email Form */}
            <div className="flex-1 w-full max-w-md">
              <div className="space-y-3">
                {/* Email Input - Top */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 placeholder-gray-500 text-sm"
                  />
                </div>
                
                {/* Subscribe Button - Bottom */}
                <button className="w-full bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}