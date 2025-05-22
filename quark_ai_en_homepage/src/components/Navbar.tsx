import React from 'react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-quark-black-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/src/assets/images/logo.png" alt="QuarkAI Logo" className="h-8" />
            </a>
          </div>
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#strategies" className="text-gray-300 hover:text-white transition-colors">Strategies</a>
            <a href="#engine" className="text-gray-300 hover:text-white transition-colors">AI Engine</a>
            <a href="#ecosystem" className="text-gray-300 hover:text-white transition-colors">Ecosystem</a>
            <a href="#developers" className="text-gray-300 hover:text-white transition-colors">Developers</a>
          </nav>
          
          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-quark-black-800 text-gray-300 hover:text-white transition-colors"
              aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* Login Button */}
            <a href="#" className="hidden sm:inline-block px-4 py-2 rounded-md bg-quark-blue text-white hover:bg-quark-blue-600 transition-colors">
              Login
            </a>
            
            {/* Get Started Button */}
            <a href="#" className="px-4 py-2 rounded-md bg-gradient-to-r from-quark-blue to-quark-cyan text-white hover:shadow-lg hover:shadow-quark-blue/20 transition-all">
              Get Started
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-md bg-quark-black-800 text-gray-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
