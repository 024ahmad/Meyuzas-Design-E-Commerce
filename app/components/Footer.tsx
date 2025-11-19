'use client';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-6 lg:mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-xl font-bold">Meyuza's Design</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-4">
              We offer trendy and fashionable clothing for everyone. Discover the latest styles and express your unique personality.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-blue-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-pink-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.558-.749-.947-1.078-2.204-.894-3.467.184-1.263.853-2.354 1.865-3.102 1.012-.749 2.297-1.078 3.56-.894 1.263.184 2.354.853 3.102 1.865.749 1.012 1.078 2.297.894 3.56-.184 1.263-.853 2.354-1.865 3.102-.749.553-1.63.853-2.565.853zm7.718 1.191c-.331 0-.644-.128-.881-.366-.238-.238-.366-.55-.366-.881s.128-.644.366-.881c.238-.238.55-.366.881-.366s.644.128.881.366c.238.238.366.55.366.881s-.128.644-.366.881c-.238.238-.55.366-.881.366zm3.652-5.342c-.092.644-.424 1.225-.925 1.665-.501.44-1.133.697-1.802.734-.67.037-1.325-.147-1.875-.513-.55-.366-.957-.893-1.155-1.499-.198-.606-.174-1.263.069-1.851.243-.588.685-1.063 1.253-1.337.568-.275 1.223-.332 1.83-.156.606.175 1.133.583 1.499 1.133.238.385.366.825.366 1.282 0 .165-.018.33-.055.492l-.055.22-.22-.055c-.165-.037-.33-.055-.492-.055-.441 0-.871.128-1.238.366-.367.238-.642.578-.789.972-.146.395-.156.825-.028 1.225.128.4.385.743.743.972.358.229.784.33 1.21.286.426-.045.825-.238 1.133-.55.308-.312.505-.716.569-1.155l.055-.22.22.055c.165.037.33.055.495.055.165 0 .33-.018.495-.055l.22-.055-.055.22c-.092.367-.238.716-.44 1.028z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-blue-400 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-black">Company</h3>
            <ul className="space-y-2">
              {['About', 'Features', 'Works', 'Career'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-1 hover:font-medium block text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-black">Help</h3>
            <ul className="space-y-2">
              {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-1 hover:font-medium block text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-black">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group text-sm"
                >
                  <svg className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group text-sm"
                >
                  <svg className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.558-.749-.947-1.078-2.204-.894-3.467.184-1.263.853-2.354 1.865-3.102 1.012-.749 2.297-1.078 3.56-.894 1.263.184 2.354.853 3.102 1.865.749 1.012 1.078 2.297.894 3.56-.184 1.263-.853 2.354-1.865 3.102-.749.553-1.63.853-2.565.853zm7.718 1.191c-.331 0-.644-.128-.881-.366-.238-.238-.366-.55-.366-.881s.128-.644.366-.881c.238-.238.55-.366.881-.366s.644.128.881.366c.238.238.366.55.366.881s-.128.644-.366.881c-.238.238-.55.366-.881.366zm3.652-5.342c-.092.644-.424 1.225-.925 1.665-.501.44-1.133.697-1.802.734-.67.037-1.325-.147-1.875-.513-.55-.366-.957-.893-1.155-1.499-.198-.606-.174-1.263.069-1.851.243-.588.685-1.063 1.253-1.337.568-.275 1.223-.332 1.83-.156.606.175 1.133.583 1.499 1.133.238.385.366.825.366 1.282 0 .165-.018.33-.055.492l-.055.22-.22-.055c-.165-.037-.33-.055-.492-.055-.441 0-.871.128-1.238.366-.367.238-.642.578-.789.972-.146.395-.156.825-.028 1.225.128.4.385.743.743.972.358.229.784.33 1.21.286.426-.045.825-.238 1.133-.55.308-.312.505-.716.569-1.155l.055-.22.22.055c.165.037.33.055.495.055.165 0 .33-.018.495-.055l.22-.055-.055.22c-.092.367-.238.716-.44 1.028z"/>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group text-sm"
                >
                  <svg className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z"/>
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group text-sm"
                >
                  <svg className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-600 text-xs text-center md:text-left">
              © 2024 Meyuza's Design. All rights reserved.
            </p>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <div className="text-gray-600 text-xs">We accept:</div>
              <div className="flex items-center gap-1">
                <div className="bg-black text-white p-1 rounded text-xs hover:scale-110 transition-transform duration-300">
                  <span className="font-bold px-1">VISA</span>
                </div>
                <div className="bg-black text-white p-1 rounded text-xs hover:scale-110 transition-transform duration-300">
                  <span className="font-bold px-1">MC</span>
                </div>
                <div className="bg-black text-white p-1 rounded text-xs hover:scale-110 transition-transform duration-300">
                  <span className="font-bold px-1">PP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}