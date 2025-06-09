import React, { useState, useEffect, useRef } from "react";

const ComparisonSection = () => {
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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

  const features = [
    {
      feature: "AI-powered instant doubt resolution",
      tutoz: true,
      others: false,
    },
    {
      feature: "Specialized for competitive exams",
      tutoz: true,
      others: false,
    },
    {
      feature: "Photo upload for handwritten questions",
      tutoz: true,
      others: true,
    },
    {
      feature: "Follow-up questions to clarify concepts",
      tutoz: true,
      others: false,
    },
    {
      feature: "Personalized learning paths",
      tutoz: true,
      others: false,
    },
    {
      feature: "Available 24/7, no waiting",
      tutoz: true,
      others: false,
    },
    {
      feature: "Created by IIT experts",
      tutoz: true,
      others: false,
    },
    {
      feature: "Affordable monthly subscription",
      tutoz: true,
      others: true,
    },
  ];

  const CheckIcon = () => (
    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-green-600">
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
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
  );

  const CrossIcon = () => (
    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-red-600">
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-12 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with fade-in */}
        <div 
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-6'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            <span style={{ color: "#004077" }}>Why </span>
            <span className="text-primary">Tutoz</span>
            <span style={{ color: "#004077" }}> stands out</span>
          </h2>
          <p 
            className={`text-base sm:text-lg max-w-2xl mx-auto text-gray-600 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
            style={{ 
              transitionDelay: isVisible ? '200ms' : '0ms' 
            }}
          >
            Compare Tutoz with traditional apps and see the difference
          </p>
        </div>

        {/* Comparison Table with slide-in animation */}
        <div 
          className={`bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transition-all duration-800 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform translate-y-8 scale-95'
          }`}
          style={{ 
            transitionDelay: isVisible ? '400ms' : '0ms' 
          }}
        >
          {/* Table Layout */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              {/* Table Header with special animation */}
              <thead>
                <tr 
                  className={`bg-gray-100 transition-all duration-600 ease-out ${
                    isVisible 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform -translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? '600ms' : '0ms' 
                  }}
                >
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                    Features
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-base sm:text-lg lg:text-xl font-bold text-primary">
                    Tutoz
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                    Other Apps
                  </th>
                </tr>
              </thead>
              
              {/* Table Body with staggered row animations */}
              <tbody>
                {features.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-t hover:bg-gray-50 transition-all duration-500 ease-out group cursor-pointer ${
                      isVisible 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-8'
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${700 + index * 100}ms` : '0ms' 
                    }}
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {item.feature}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex justify-center">
                        <CheckIcon />
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex justify-center">
                        {item.others ? <CheckIcon /> : <CrossIcon />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;