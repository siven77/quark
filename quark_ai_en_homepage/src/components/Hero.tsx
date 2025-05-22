import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-quark-black">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-quark-blue/10 via-transparent to-transparent opacity-60"></div>
        <div className="neural-network-animation"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Build the Future of AI-Powered Investing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From natural language to evolving, executable strategies
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" className="px-8 py-6 text-lg">
                Launch a Strategy
              </Button>
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg">
                Learn the Platform
              </Button>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Abstract visualization representing AI trading */}
              <div className="aspect-square max-w-lg mx-auto bg-quark-black-900/50 rounded-full p-8 backdrop-blur-md">
                <div className="w-full h-full relative">
                  {/* Animated circles and connections representing AI nodes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full border-4 border-quark-blue/30 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full border-2 border-quark-blue/20 animate-spin-slow"></div>
                  </div>
                  {/* Data points */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * Math.PI * 2) / 12;
                    const x = 50 + 45 * Math.cos(angle);
                    const y = 50 + 45 * Math.sin(angle);
                    return (
                      <div 
                        key={i}
                        className="absolute w-2 h-2 bg-quark-blue rounded-full"
                        style={{ 
                          left: `${x}%`, 
                          top: `${y}%`,
                          animation: `pulse 3s infinite ${i * 0.2}s`
                        }}
                      ></div>
                    );
                  })}
                  {/* Central node */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-quark-blue to-quark-cyan rounded-full flex items-center justify-center shadow-lg shadow-quark-blue/30">
                    <div className="text-white text-2xl font-bold">AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-400 mb-2">Scroll to explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
