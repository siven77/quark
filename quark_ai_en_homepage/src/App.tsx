import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StrategyShowcase from './components/StrategyShowcase';
import AIEngine from './components/AIEngine';
import Ecosystem from './components/Ecosystem';
import DeveloperPlatform from './components/DeveloperPlatform';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply theme
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="min-h-screen bg-quark-black text-white">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <Features />
      <StrategyShowcase />
      <AIEngine />
      <Ecosystem />
      <DeveloperPlatform />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
