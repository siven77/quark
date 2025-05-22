import React, { useState } from 'react';

const SocialProof: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'media'>('testimonials');
  
  const testimonials = [
    {
      quote: "QuarkAI has completely transformed our strategy development process, reducing development time from weeks to hours.",
      author: "Michael Zhang",
      position: "Quantitative Fund Manager, Horizon Capital",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "As an investor without a programming background, QuarkAI allows me to create and deploy professional-grade trading strategies.",
      author: "Lisa Chen",
      position: "Individual Investor",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The platform's AI scoring system helps us filter the most promising strategies, significantly improving our portfolio performance.",
      author: "Robert Wang",
      position: "Chief Investment Officer, Smart Investments",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];
  
  const mediaReports = [
    {
      title: "QuarkAI Secures $20 Million Series A Funding",
      source: "FinTech Daily",
      date: "March 15, 2025",
      logo: "/src/assets/images/media-1.svg",
      link: "#"
    },
    {
      title: "QuarkAI Platform User Base Surpasses 100,000",
      source: "Investor Weekly",
      date: "February 28, 2025",
      logo: "/src/assets/images/media-2.svg",
      link: "#"
    },
    {
      title: "QuarkAI Named Among Year's Most Innovative FinTech Companies",
      source: "Tech Innovation Report",
      date: "January 10, 2025",
      logo: "/src/assets/images/media-3.svg",
      link: "#"
    }
  ];
  
  return (
    <section id="social-proof" className="section-padding bg-quark-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Social Proof & Media</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our users and the media are saying about QuarkAI
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-quark-black-800/50 p-1">
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'testimonials'
                  ? 'bg-quark-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('testimonials')}
            >
              Testimonials
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'media'
                  ? 'bg-quark-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('media')}
            >
              Media Coverage
            </button>
          </div>
        </div>
        
        {/* Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-quark-blue/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-400" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Media Coverage */}
        {activeTab === 'media' && (
          <div>
            {/* Media Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="bg-quark-black-800/30 p-4 rounded-lg">
                <svg className="h-8 w-auto text-gray-400" viewBox="0 0 100 30" fill="currentColor">
                  <path d="M10 8v14h5V8h-5zm15 0v14h5V8h-5zm-10 0v14h5V8h-5zm30 0v14h5V8h-5zm15 0v14h5V8h-5zm-10 0v14h5V8h-5zm30 0v14h5V8h-5z" />
                </svg>
              </div>
              <div className="bg-quark-black-800/30 p-4 rounded-lg">
                <svg className="h-8 w-auto text-gray-400" viewBox="0 0 100 30" fill="currentColor">
                  <path d="M20 8a10 10 0 100 20 10 10 0 000-20zm40 0a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <div className="bg-quark-black-800/30 p-4 rounded-lg">
                <svg className="h-8 w-auto text-gray-400" viewBox="0 0 100 30" fill="currentColor">
                  <path d="M10 8h80v5H10zm0 9h60v5H10zm0 9h40v5H10z" />
                </svg>
              </div>
              <div className="bg-quark-black-800/30 p-4 rounded-lg">
                <svg className="h-8 w-auto text-gray-400" viewBox="0 0 100 30" fill="currentColor">
                  <path d="M30 8L10 28h20zm40 0L50 28h20z" />
                </svg>
              </div>
              <div className="bg-quark-black-800/30 p-4 rounded-lg">
                <svg className="h-8 w-auto text-gray-400" viewBox="0 0 100 30" fill="currentColor">
                  <path d="M50 8L30 28h40z" />
                </svg>
              </div>
            </div>
            
            {/* Media Articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaReports.map((report, index) => (
                <a 
                  key={index}
                  href={report.link}
                  className="bg-quark-black-800/50 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-quark-black-800/70 hover:shadow-lg hover:shadow-quark-blue/10"
                >
                  <div className="h-12 mb-4 flex items-center">
                    <div className="w-12 h-12 bg-quark-black-900 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-quark-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">{report.title}</h4>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-quark-blue">{report.source}</span>
                    <span className="text-gray-400">{report.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Social Media Feed */}
        <div className="mt-16 bg-quark-black-800/30 backdrop-blur-md rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 text-center text-white">Latest Updates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Twitter/X Feed */}
            <div className="bg-quark-black-800/50 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-quark-blue mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-white font-bold">Latest from X</span>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="text-gray-300 mb-2">Excited to announce our new partnership with @AlpacaHQ for seamless trading integration! #FinTech #AITrading</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>@QuarkAI</span>
                    <span className="mx-2">•</span>
                    <span>2 days ago</span>
                  </div>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="text-gray-300 mb-2">Our latest platform update includes enhanced backtesting capabilities and new strategy templates. Check it out! #TradingStrategies</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>@QuarkAI</span>
                    <span className="mx-2">•</span>
                    <span>1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* YouTube Feed */}
            <div className="bg-quark-black-800/50 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <span className="text-white font-bold">Latest Videos</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-24 h-16 bg-quark-black-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-300 text-sm">Getting Started with QuarkAI: Creating Your First Strategy</p>
                    <p className="text-gray-400 text-xs mt-1">15K views • 3 weeks ago</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-24 h-16 bg-quark-black-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-300 text-sm">Advanced Backtesting Techniques with QuarkAI</p>
                    <p className="text-gray-400 text-xs mt-1">8.2K views • 1 month ago</p>
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

export default SocialProof;
