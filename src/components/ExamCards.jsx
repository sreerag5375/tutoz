import React, { useState, useEffect, useRef } from "react";
import config from "../config";

const ExamCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before it comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to get icon based on type
  const getIcon = (iconType) => {
    const icons = {
      graduation: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      settings: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      calculator: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      book: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    };

    return icons[iconType] || icons.graduation;
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with fade-in */}
        <div 
          className={`text-center mb-12 transition-all duration-800 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-6'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-title">
            Your Gateway to India's Top Exams
          </h2>
        </div>

        {/* Cards Grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.exams.data.map((exam, index) => (
            <div
              key={exam.id}
              className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-48 cursor-pointer ${exam.color} ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0 scale-100' 
                  : 'opacity-0 transform translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' 
              }}
              onMouseEnter={() => setHoveredCard(exam.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Default Card Content */}
              <div
                className={`absolute inset-0 p-4 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  hoveredCard === exam.id
                    ? "opacity-0 transform -translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-white mr-2 transition-transform duration-300 group-hover:scale-110">
                    {getIcon(exam.iconType)}
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl text-white">
                    {exam.name}
                  </h3>
                </div>
              </div>

              {/* Hover Effect: Show Details */}
              <div
                className={`absolute inset-0 bg-white p-4 flex flex-col justify-start transition-all duration-300 ${
                  hoveredCard === exam.id
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-4"
                }`}
              >
                <div className="text-center mt-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {exam.name}
                  </h3>
                  <h4 className="text-md font-semibold text-gray-600 mb-3">
                    {exam.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exam.description}
                  </p>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${hoveredCard !== exam.id ? 'block' : 'hidden'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCards; 