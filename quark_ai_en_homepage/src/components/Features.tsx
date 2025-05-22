import React from 'react';
import { cn } from '../lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10",
      className
    )}>
      <div className="w-12 h-12 bg-quark-blue/20 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-quark-black-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Platform Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            QuarkAI platform provides comprehensive AI-driven trading strategy tools, a complete solution from creation to deployment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            title="Strategy Generation"
            description="Create trading strategies using natural language input, no programming knowledge required."
            className="lg:transform lg:hover:-translate-y-2"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            title="Backtesting Engine"
            description="Rigorously test strategies with historical data and out-of-sample validation for performance and stability."
            className="lg:transform lg:hover:-translate-y-2"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            }
            title="AI Scoring System"
            description="AI evaluates strategies across five dimensions: risk, return, stability, innovation, and adaptability."
            className="lg:transform lg:hover:-translate-y-2"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            }
            title="Strategy Evolution"
            description="Strategies automatically adjust to market changes, continuously optimizing performance with each version."
            className="lg:transform lg:hover:-translate-y-2"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Deployment & Monitoring"
            description="Easily deploy strategies to real markets with real-time monitoring and intelligent alerts."
            className="lg:transform lg:hover:-translate-y-2 md:col-span-2 lg:col-span-1"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="#strategies" className="inline-flex items-center text-quark-blue hover:text-quark-cyan transition-colors">
            <span className="mr-2">Explore Strategy Showcase</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
