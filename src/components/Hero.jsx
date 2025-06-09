import React, { useState, useEffect } from "react";
import config from "../config";
import Button from "./Button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure smooth animation start

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadApp = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=your.app.package",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSeeHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - slides in from left */}
          <div 
            className={`text-center lg:text-left pt-20 lg:p-4 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-16'
            }`}
          >
            {/* Main Heading */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ 
                transitionDelay: isLoaded ? '200ms' : '0ms' 
              }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-title-dark mb-6"
                style={{ lineHeight: "1.16" }}
              >
                {config.hero.heroTextFirst}
                <span className="text-primary"> AI </span>
                {config.hero.heroTextSecond}
              </h1>
            </div>

            {/* Points Container with staggered animation */}
            <div className="flex flex-col items-center lg:items-start mb-8">
              <div className="w-full max-w-sm lg:max-w-none space-y-3">
                {[
                  config.hero.heroPointsOne,
                  config.hero.heroPointsTwo,
                  config.hero.heroPointsThree,
                ].map((point, index) => (
                  <div
                    key={index}
                    className={`flex items-start lg:items-center space-x-3 transition-all duration-700 ease-out ${
                      isLoaded 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform -translate-x-8'
                    }`}
                    style={{ 
                      transitionDelay: isLoaded ? `${400 + index * 100}ms` : '0ms' 
                    }}
                  >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 lg:mt-0 shadow-lg">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 text-left leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons with staggered animation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div
                className={`transition-all duration-700 ease-out ${
                  isLoaded 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
                style={{ 
                  transitionDelay: isLoaded ? '700ms' : '0ms' 
                }}
              >
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleDownloadApp}
                  className="hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Download App
                </Button>
              </div>
              
              <div
                className={`transition-all duration-700 ease-out ${
                  isLoaded 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
                style={{ 
                  transitionDelay: isLoaded ? '800ms' : '0ms' 
                }}
              >
                <Button
                  variant="secondary"
                  size="large"
                  onClick={handleSeeHowItWorks}
                  className="hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  See how it works
                </Button>
              </div>
            </div>
          </div>

          {/* Image - slides in from right */}
          <div 
            className={`flex justify-center pt-4 relative transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-16'
            }`}
            style={{ 
              transitionDelay: isLoaded ? '300ms' : '0ms' 
            }}
          >
            {/* Background decoration */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ 
                transitionDelay: isLoaded ? '500ms' : '0ms' 
              }}
            />
            
            {/* Main Image with floating animation */}
            <div className={`relative z-10 ${isLoaded ? 'animate-float' : ''}`}>
              <img
                src={config.assets.heroImage}
                alt="Tutoz App"
                className="max-w-full h-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;