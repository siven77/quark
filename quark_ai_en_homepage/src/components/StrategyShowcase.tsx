import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const StrategyShowcase: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState(0);
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
    
    const element = document.getElementById('strategy-showcase');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  const strategies = [
    {
      name: "Quantitative Momentum Tracker",
      description: "Multi-asset strategy based on price momentum and trading volume",
      version: "V2.4",
      return: "+18.7%",
      risk: 6.2,
      sharpe: 1.8,
      maxDrawdown: "-12.3%",
      winRate: "68%"
    },
    {
      name: "Adaptive Mean Reversion",
      description: "Identifies price deviations using statistical arbitrage",
      version: "V1.7",
      return: "+12.3%",
      risk: 4.8,
      sharpe: 1.5,
      maxDrawdown: "-8.7%",
      winRate: "72%"
    },
    {
      name: "Sentiment-Driven Trend",
      description: "Predictive model analyzing social media and news sentiment",
      version: "V3.1",
      return: "+22.5%",
      risk: 7.9,
      sharpe: 1.6,
      maxDrawdown: "-15.2%",
      winRate: "64%"
    },
    {
      name: "Multi-Factor Stock Selection",
      description: "Stock selection strategy combining fundamental and technical factors",
      version: "V2.8",
      return: "+15.2%",
      risk: 5.5,
      sharpe: 1.7,
      maxDrawdown: "-10.8%",
      winRate: "70%"
    }
  ];
  
  return (
    <section id="strategies" className="section-padding bg-quark-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Strategy Cards & Dynamic Visualization</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our strategy library and explore high-performance trading strategies generated and optimized by AI
          </p>
        </div>
        
        <div id="strategy-showcase" className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Strategy Cards */}
          <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-6">
              {strategies.map((strategy, index) => (
                <div 
                  key={index}
                  className={`snap-center flex-shrink-0 w-full sm:w-96 bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 cursor-pointer transition-all duration-300 ${activeStrategy === index ? 'ring-2 ring-quark-blue shadow-lg shadow-quark-blue/20' : 'hover:bg-quark-black-800/70'}`}
                  onClick={() => setActiveStrategy(index)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{strategy.name}</h3>
                      <p className="text-gray-400 text-sm">{strategy.description}</p>
                    </div>
                    <span className="px-2 py-1 bg-quark-blue/20 text-quark-blue rounded text-sm font-medium">
                      {strategy.version}
                    </span>
                  </div>
                  
                  <div className="flex justify-between mb-6">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Return</p>
                      <p className="text-green-500 font-bold">{strategy.return}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Risk</p>
                      <p className="text-white font-bold">{strategy.risk}/10</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Sharpe</p>
                      <p className="text-white font-bold">{strategy.sharpe}</p>
                    </div>
                  </div>
                  
                  {/* Simplified chart representation */}
                  <div className="h-24 bg-quark-black-900/50 rounded-lg mb-4 overflow-hidden">
                    <div className="h-full w-full relative">
                      {/* Simplified chart line */}
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {index === 0 && (
                          <path 
                            d="M0,50 C10,45 20,60 30,40 C40,20 50,70 60,50 C70,30 80,45 90,25 L90,100 L0,100 Z" 
                            fill="rgba(0, 153, 255, 0.1)"
                          />
                        )}
                        {index === 1 && (
                          <path 
                            d="M0,60 C10,50 20,70 30,50 C40,30 50,60 60,40 C70,50 80,30 90,35 L90,100 L0,100 Z" 
                            fill="rgba(0, 153, 255, 0.1)"
                          />
                        )}
                        {index === 2 && (
                          <path 
                            d="M0,70 C10,60 20,40 30,30 C40,20 50,30 60,20 C70,10 80,20 90,15 L90,100 L0,100 Z" 
                            fill="rgba(0, 153, 255, 0.1)"
                          />
                        )}
                        {index === 3 && (
                          <path 
                            d="M0,50 C10,60 20,40 30,45 C40,30 50,40 60,30 C70,25 80,35 90,20 L90,100 L0,100 Z" 
                            fill="rgba(0, 153, 255, 0.1)"
                          />
                        )}
                        
                        {index === 0 && (
                          <path 
                            d="M0,50 C10,45 20,60 30,40 C40,20 50,70 60,50 C70,30 80,45 90,25" 
                            fill="none"
                            stroke="#0099FF"
                            strokeWidth="2"
                          />
                        )}
                        {index === 1 && (
                          <path 
                            d="M0,60 C10,50 20,70 30,50 C40,30 50,60 60,40 C70,50 80,30 90,35" 
                            fill="none"
                            stroke="#0099FF"
                            strokeWidth="2"
                          />
                        )}
                        {index === 2 && (
                          <path 
                            d="M0,70 C10,60 20,40 30,30 C40,20 50,30 60,20 C70,10 80,20 90,15" 
                            fill="none"
                            stroke="#0099FF"
                            strokeWidth="2"
                          />
                        )}
                        {index === 3 && (
                          <path 
                            d="M0,50 C10,60 20,40 30,45 C40,30 50,40 60,30 C70,25 80,35 90,20" 
                            fill="none"
                            stroke="#0099FF"
                            strokeWidth="2"
                          />
                        )}
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-400">Max Drawdown:</span>
                      <span className="text-red-400 ml-1">{strategy.maxDrawdown}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Win Rate:</span>
                      <span className="text-green-400 ml-1">{strategy.winRate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Strategy Details */}
          <div className="mt-12 bg-quark-black-800/30 backdrop-blur-md rounded-xl p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-white">{strategies[activeStrategy].name}</h3>
                <p className="text-gray-300 mb-6">{strategies[activeStrategy].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-quark-black-900/50 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Version History</p>
                    <div className="flex items-center mt-2">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-quark-blue to-quark-cyan h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-white ml-2">{strategies[activeStrategy].version}</span>
                    </div>
                  </div>
                  
                  <div className="bg-quark-black-900/50 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Risk Assessment</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-green-400">Low</span>
                      <span className={`text-yellow-400 ${strategies[activeStrategy].risk < 6 ? 'font-bold' : ''}`}>Med</span>
                      <span className={`text-red-400 ${strategies[activeStrategy].risk >= 6 ? 'font-bold' : ''}`}>High</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="primary">Deploy Strategy</Button>
                  <Button variant="secondary_outline">View Details</Button>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-quark-black-900/50 p-4 rounded-lg h-64">
                  {/* Radar Chart (simplified representation) */}
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      {/* Radar background */}
                      <div className="absolute inset-0 border-2 border-gray-700 rounded-full"></div>
                      <div className="absolute inset-[15%] border-2 border-gray-700 rounded-full"></div>
                      <div className="absolute inset-[30%] border-2 border-gray-700 rounded-full"></div>
                      <div className="absolute inset-[45%] border-2 border-gray-700 rounded-full"></div>
                      
                      {/* Radar axes */}
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700"></div>
                      <div className="absolute bottom-0 top-0 left-1/2 w-0.5 bg-gray-700"></div>
                      <div className="absolute w-full h-full origin-center rotate-45">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700"></div>
                      </div>
                      <div className="absolute w-full h-full origin-center -rotate-45">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700"></div>
                      </div>
                      
                      {/* Radar data points */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100">
                        <polygon 
                          points={
                            activeStrategy === 0 ? "50,10 90,50 50,85 15,50" :
                            activeStrategy === 1 ? "50,15 80,50 50,75 20,50" :
                            activeStrategy === 2 ? "50,5 85,50 50,90 10,50" :
                            "50,20 75,50 50,80 25,50"
                          }
                          fill="rgba(0, 153, 255, 0.2)"
                          stroke="#0099FF"
                          strokeWidth="2"
                        />
                      </svg>
                      
                      {/* Labels */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-xs text-gray-400">Return</div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 text-xs text-gray-400">Stability</div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 text-xs text-gray-400">Risk</div>
                      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 text-xs text-gray-400">Innovation</div>
                      <div className="absolute top-[15%] right-[15%] text-xs text-gray-400">Adaptability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyShowcase;
