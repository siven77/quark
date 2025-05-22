import React from 'react';
import { Button } from './ui/button';

const DeveloperPlatform: React.FC = () => {
  return (
    <section id="developers" className="section-padding bg-quark-black-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Open API & Developer Platform</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful APIs and tools for quantitative developers to easily integrate and extend QuarkAI functionality
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left side: API features */}
          <div className="w-full lg:w-1/2">
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">API Features</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">RESTful API</h4>
                    <p className="text-gray-300">Complete API documentation supporting all functions for strategy creation, backtesting, deployment, and monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">SDK Support</h4>
                    <p className="text-gray-300">Official SDKs for Python, JavaScript, and Java, simplifying API integration</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Model Upload</h4>
                    <p className="text-gray-300">Upload custom AI models and strategy templates to extend platform capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Sandbox Testing</h4>
                    <p className="text-gray-300">Secure testing environment for validating API integration and strategy deployment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="primary">View API Documentation</Button>
              </div>
            </div>
          </div>
          
          {/* Right side: Code example */}
          <div className="w-full lg:w-1/2">
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Python Code Example</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="bg-quark-black-900 rounded-lg p-4 font-mono text-sm overflow-auto" style={{ maxHeight: '400px' }}>
                <pre className="text-gray-300">
                  <code>
                    <span className="text-blue-400">import</span> <span className="text-green-400">quark_ai</span>
                    
                    <span className="text-gray-500"># Initialize API client</span>
                    <span className="text-blue-400">client</span> = quark_ai.Client(api_key=<span className="text-yellow-400">"YOUR_API_KEY"</span>)
                    
                    <span className="text-gray-500"># Create new strategy</span>
                    <span className="text-blue-400">strategy</span> = client.create_strategy(
                      name=<span className="text-yellow-400">"Momentum Breakout Strategy"</span>,
                      description=<span className="text-yellow-400">"Price momentum based breakout trading strategy"</span>,
                      prompt=<span className="text-yellow-400">"Create a strategy that buys when price breaks above the 20-day high and sells when price drops below the 10-day low. Use 1% stop loss and 3% take profit."</span>
                    )
                    
                    <span className="text-gray-500"># Run backtest</span>
                    <span className="text-blue-400">backtest</span> = strategy.backtest(
                      symbols=[<span className="text-yellow-400">"AAPL"</span>, <span className="text-yellow-400">"MSFT"</span>, <span className="text-yellow-400">"GOOGL"</span>],
                      timeframe=<span className="text-yellow-400">"1d"</span>,
                      start_date=<span className="text-yellow-400">"2023-01-01"</span>,
                      end_date=<span className="text-yellow-400">"2023-12-31"</span>
                    )
                    
                    <span className="text-gray-500"># Get backtest results</span>
                    <span className="text-blue-400">results</span> = backtest.get_results()
                    <span className="text-blue-400">print</span>(<span className="text-yellow-400">f"Total return: {`{results.total_return}`}%"</span>)
                    <span className="text-blue-400">print</span>(<span className="text-yellow-400">f"Sharpe ratio: {`{results.sharpe_ratio}`}"</span>)
                    
                    <span className="text-gray-500"># Deploy strategy</span>
                    <span className="text-blue-400">deployment</span> = strategy.deploy(
                      capital=<span className="text-purple-400">10000</span>,
                      broker=<span className="text-yellow-400">"alpaca"</span>,
                      credentials={`{
                        "api_key": "ALPACA_API_KEY",
                        "api_secret": "ALPACA_API_SECRET"
                      }`}
                    )
                    
                    <span className="text-gray-500"># Set notifications</span>
                    <span className="text-blue-400">deployment</span>.set_notifications(
                      email=<span className="text-yellow-400">"user@example.com"</span>,
                      telegram=<span className="text-purple-400">True</span>
                    )
                  </code>
                </pre>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button variant="secondary_outline" size="sm">Copy Code</Button>
                <Button variant="primary" size="sm">Run Example</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Developer resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-quark-black-800/30 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/50 hover:shadow-lg hover:shadow-quark-blue/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-quark-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-white">API Documentation</h3>
            <p className="text-gray-300 mb-4">Detailed API reference documentation, including all endpoints, parameters, and response formats</p>
            <a href="#" className="text-quark-blue hover:text-quark-cyan transition-colors">View Documentation →</a>
          </div>
          
          <div className="bg-quark-black-800/30 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/50 hover:shadow-lg hover:shadow-quark-blue/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-quark-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-white">Developer Community</h3>
            <p className="text-gray-300 mb-4">Join our developer community to share experiences, ask questions, and get support</p>
            <a href="#" className="text-quark-blue hover:text-quark-cyan transition-colors">Join Community →</a>
          </div>
          
          <div className="bg-quark-black-800/30 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/50 hover:shadow-lg hover:shadow-quark-blue/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-quark-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-white">Tutorials & Examples</h3>
            <p className="text-gray-300 mb-4">Learn how to use the QuarkAI API to create and deploy trading strategies</p>
            <a href="#" className="text-quark-blue hover:text-quark-cyan transition-colors">Browse Tutorials →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperPlatform;
