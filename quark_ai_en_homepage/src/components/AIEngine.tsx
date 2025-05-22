import React, { useEffect, useState } from 'react';

const AIEngine: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('ai-engine');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const aiRoles = [
    {
      name: "Strategy Designer",
      description: "Creates the overall strategy architecture and logic flow",
      color: "#0099FF"
    },
    {
      name: "Risk Expert",
      description: "Evaluates and optimizes risk parameters",
      color: "#FF6B6B"
    },
    {
      name: "Data Scientist",
      description: "Handles data processing and feature engineering",
      color: "#4CAF50"
    },
    {
      name: "Backtesting Engineer",
      description: "Designs and runs comprehensive backtests",
      color: "#FFC107"
    },
    {
      name: "Optimization Specialist",
      description: "Fine-tunes parameters for optimal performance",
      color: "#9C27B0"
    },
    {
      name: "Code Generator",
      description: "Translates strategy logic into executable code",
      color: "#00BCD4"
    },
    {
      name: "Market Analyst",
      description: "Provides market context and conditions",
      color: "#FF9800"
    },
    {
      name: "Documentation Expert",
      description: "Creates clear strategy documentation",
      color: "#8BC34A"
    },
    {
      name: "Coordinator",
      description: "Orchestrates the collaboration between all roles",
      color: "#3F51B5"
    }
  ];

  return (
    <section id="engine" className="section-padding bg-quark-black-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Orca AI Engine</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nine-role collaborative AI model structure, seamlessly transforming natural language into strategy architecture
          </p>
        </div>
        
        <div id="ai-engine" className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* AI Engine Visualization */}
          <div className="relative w-full max-w-4xl mx-auto h-[500px] mb-12">
            {/* Central node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-quark-blue to-quark-cyan rounded-full flex items-center justify-center shadow-lg shadow-quark-blue/30 z-20">
              <div className="text-white text-center">
                <div className="font-bold text-lg">Orca</div>
                <div className="text-sm">AI Engine</div>
              </div>
            </div>
            
            {/* Role nodes */}
            {aiRoles.map((role, index) => {
              const angle = (index * (2 * Math.PI)) / aiRoles.length;
              const radius = 180; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div 
                  key={index}
                  className="absolute w-24 h-24 bg-quark-black-800/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md transition-all duration-500"
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    borderColor: role.color,
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="text-white text-center p-1">
                    <div className="font-bold text-xs">{role.name}</div>
                  </div>
                </div>
              );
            })}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
              {aiRoles.map((_, index) => {
                const angle = (index * (2 * Math.PI)) / aiRoles.length;
                const radius = 180;
                const x = Math.cos(angle) * radius + 250; // Adjusted for center position
                const y = Math.sin(angle) * radius + 250; // Adjusted for center position
                
                return (
                  <line 
                    key={index}
                    x1="250" 
                    y1="250" 
                    x2={x} 
                    y2={y} 
                    stroke="#0099FF" 
                    strokeWidth="2" 
                    strokeOpacity="0.3"
                    strokeDasharray={isVisible ? "none" : "5,5"}
                    className="transition-all duration-1000"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                );
              })}
            </svg>
          </div>
          
          {/* AI Engine Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Prompt-to-Strategy Architecture</h3>
              <p className="text-gray-300 mb-6">
                Orca AI Engine transforms natural language descriptions into fully functional trading strategies through a sophisticated multi-stage process:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-quark-blue/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-quark-blue font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Natural Language Processing</h4>
                    <p className="text-gray-400">Analyzes user intent and extracts key strategy parameters</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-quark-blue/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-quark-blue font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Strategy Formulation</h4>
                    <p className="text-gray-400">Designs logical framework and trading rules based on intent</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-quark-blue/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-quark-blue font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Code Generation</h4>
                    <p className="text-gray-400">Translates strategy into optimized, executable code</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-quark-blue/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-quark-blue font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Validation & Optimization</h4>
                    <p className="text-gray-400">Tests and refines strategy for optimal performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Core Advantages</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Professional Role Specialization</h4>
                    <p className="text-gray-400">Each aspect of strategy creation is handled by specialized AI experts, ensuring comprehensive quality</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Natural Language Input</h4>
                    <p className="text-gray-400">Create sophisticated trading strategies using plain English, no programming knowledge required</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Continuous Learning</h4>
                    <p className="text-gray-400">Strategies evolve over time, automatically adapting to changing market conditions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Comprehensive Documentation</h4>
                    <p className="text-gray-400">Detailed strategy documentation and explanation for complete transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Strategy Request Demo */}
          <div className="mt-12 bg-quark-black-800/30 backdrop-blur-md rounded-xl p-6 border border-quark-blue/20">
            <h3 className="text-xl font-bold mb-4 text-white">Try a Strategy Request</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <textarea 
                  className="w-full h-24 bg-quark-black-900 border border-gray-700 rounded-lg p-3 text-white focus:border-quark-blue focus:ring-1 focus:ring-quark-blue outline-none"
                  placeholder="Describe your trading strategy in natural language. E.g.: Create a strategy that buys when price breaks above the 20-day high and sells when it drops below the 10-day low. Use 1% stop loss and 3% take profit."
                ></textarea>
              </div>
              <div className="flex-shrink-0 flex items-end">
                <button className="px-6 py-3 bg-gradient-to-r from-quark-blue to-quark-cyan text-white rounded-lg hover:shadow-lg hover:shadow-quark-blue/20 transition-all">
                  Generate Strategy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEngine;
