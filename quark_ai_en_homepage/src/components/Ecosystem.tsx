import React, { useState } from 'react';
import { Button } from './ui/button';

const Ecosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'creator' | 'user'>('creator');
  
  return (
    <section id="ecosystem" className="section-padding bg-quark-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">User & Creator Ecosystem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unified subscription model with fair revenue sharing, connecting strategy creators with investors
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-quark-black-800/50 p-1">
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'creator'
                  ? 'bg-quark-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('creator')}
            >
              Strategy Creators
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'user'
                  ? 'bg-quark-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('user')}
            >
              Strategy Users
            </button>
          </div>
        </div>
        
        {/* Creator Flow */}
        {activeTab === 'creator' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Create Strategy</h3>
              <p className="text-gray-300 mb-4">
                Create and optimize trading strategies using QuarkAI platform, using natural language descriptions or direct code uploads
              </p>
              <div className="flex items-center text-sm text-quark-blue">
                <span className="mr-2">No coding required</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Platform Rating</h3>
              <p className="text-gray-300 mb-4">
                Strategies are evaluated by the AI scoring system, receiving quality ratings and risk assessments to increase visibility
              </p>
              <div className="flex items-center text-sm text-quark-blue">
                <span className="mr-2">Transparent evaluation</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Revenue Sharing</h3>
              <p className="text-gray-300 mb-4">
                When users subscribe to and use your strategies, you receive 70% of the revenue share, with the platform taking only 15%
              </p>
              <div className="flex items-center text-sm text-quark-blue">
                <span className="mr-2">Industry-leading rates</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {/* User Flow */}
        {activeTab === 'user' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Discover Strategies</h3>
              <p className="text-gray-300 mb-4">
                Browse the strategy marketplace and filter by performance, risk, and ratings to find the best trading strategies for you
              </p>
              <div className="flex items-center text-sm text-quark-blue">
                <span className="mr-2">Curated selection</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Follow Creators</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to your favorite strategy creators and receive notifications about their latest strategies and updates
              </p>
              <div className="flex items-center text-sm text-quark-blue">
                <span className="mr-2">Stay updated</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Deploy Trading</h3>
              <p className="text-gray-300 mb-4">
                One-click deploy strategies to your trading account, monitor performance in real-time, and receive intelligent alerts
              </p>
              <div className="flex items-center text-sm text-quark-blue">
                <span className="mr-2">Seamless integration</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {/* Subscription Tiers */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Subscription Tiers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-quark-blue/30 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white">Basic</h4>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Access to basic strategy library</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">5 strategy generations per month</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Basic backtesting</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Email support</span>
                </div>
              </div>
              
              <Button variant="secondary" className="w-full">Choose Basic</Button>
            </div>
            
            {/* Professional Tier */}
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 border border-quark-blue transition-all duration-300 hover:shadow-lg hover:shadow-quark-blue/20 transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-quark-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white">Professional</h4>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">$99</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Access to advanced strategy library</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">20 strategy generations per month</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Advanced backtesting and optimization</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Priority email and chat support</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Strategy customization</span>
                </div>
              </div>
              
              <Button variant="primary" className="w-full">Choose Professional</Button>
            </div>
            
            {/* Enterprise Tier */}
            <div className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-quark-blue/30 hover:shadow-lg hover:shadow-quark-blue/10">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white">Enterprise</h4>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">$299</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Full strategy library access</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Unlimited strategy generation</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Enterprise-grade backtesting</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Dedicated account manager</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">API access</span>
                </div>
              </div>
              
              <Button variant="secondary" className="w-full">Choose Enterprise</Button>
            </div>
          </div>
        </div>
        
        {/* Revenue Sharing Visualization */}
        <div className="mt-16 bg-quark-black-800/30 backdrop-blur-md rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 text-center text-white">Revenue Sharing Model</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 max-w-md">
              <div className="relative h-64">
                {/* Pie chart visualization */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Creator share (70%) */}
                  <path
                    d="M50,50 L50,0 A50,50 0 0,1 97.5,65 L50,50"
                    fill="#0099FF"
                  />
                  
                  {/* Platform share (15%) */}
                  <path
                    d="M50,50 L97.5,65 A50,50 0 0,1 75,95 L50,50"
                    fill="#00E5FF"
                  />
                  
                  {/* Other costs (15%) */}
                  <path
                    d="M50,50 L75,95 A50,50 0 0,1 0,50 A50,50 0 0,1 50,0 L50,50"
                    fill="#1E293B"
                  />
                  
                  {/* Center circle */}
                  <circle cx="50" cy="50" r="25" fill="#0F172A" />
                </svg>
                
                {/* Labels */}
                <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="bg-quark-blue text-white text-xs font-bold px-2 py-1 rounded">
                    70% Creator
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                  <div className="bg-quark-cyan text-white text-xs font-bold px-2 py-1 rounded">
                    15% Platform
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2">
                  <div className="bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    15% Costs
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 max-w-md">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Industry-Leading Revenue Share</h4>
                  <p className="text-gray-300">
                    QuarkAI offers one of the most competitive revenue sharing models in the industry, with creators receiving 70% of all subscription revenue generated by their strategies.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Transparent Fee Structure</h4>
                  <p className="text-gray-300">
                    The platform fee is only 15%, with the remaining 15% covering operational costs including infrastructure, data feeds, and trading integrations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Monthly Payouts</h4>
                  <p className="text-gray-300">
                    Creators receive monthly payouts with detailed analytics on strategy performance and subscriber growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
