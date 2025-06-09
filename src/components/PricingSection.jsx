import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

const PricingSection = () => {
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

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Try Tutoz with limited features",
      price: "0",
      currency: "₹",
      period: "month",
      buttonText: "Start for free",
      buttonVariant: "outline",
      features: [
        { text: "10 Questions per day", included: true },
        { text: "Basic subjects only", included: true },
        { text: "Text-based questions only", included: true },
        { text: "Photo upload questions", included: false },
        { text: "Follow-up questions", included: false },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description:
        "Best for exploring Tutoz's personalised tools and getting a headstart.",
      price: "249",
      currency: "₹",
      period: "month",
      buttonText: "Get Started",
      buttonVariant: "primary",
      popular: true,
      features: [
        { text: "10 Questions per day", included: true },
        { text: "Basic subjects only", included: true },
        { text: "Text-based questions only", included: true },
        { text: "Photo upload questions", included: true },
        { text: "Follow-up questions", included: false },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      description:
        "Best for exploring Tutoz's personalised tools and getting a headstart.",
      price: "399",
      currency: "₹",
      period: "month",
      buttonText: "Get Ultimate",
      buttonVariant: "outline",
      features: [
        { text: "10 Questions per day", included: true },
        { text: "Basic subjects only", included: true },
        { text: "Text-based questions only", included: true },
        { text: "Photo upload questions", included: true },
        { text: "Follow-up questions", included: true },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with fade-in */}
        <div 
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-6'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-title">
            Choose your plan
          </h2>
        </div>

        {/* Pricing Cards with staggered animation */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`
                relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 transition-all duration-700 ease-out
                w-full max-w-sm sm:max-w-sm md:max-w-xs lg:max-w-sm xl:flex-1
                group hover:shadow-2xl hover:-translate-y-2
                ${
                  plan.popular
                    ? "border-primary scale-100 sm:scale-105 shadow-xl"
                    : "border-gray-200 hover:border-gray-300"
                }
                ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-8 scale-95'
                }
              `}
              style={{ 
                transitionDelay: isVisible ? `${300 + index * 200}ms` : '0ms' 
              }}
            >
              {/* Background glow effect for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl" />
              )}

              {/* Popular Badge with bounce animation */}
              {plan.popular && (
                <div 
                  className={`absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 -translate-y-4 scale-75'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${700}ms` : '0ms' 
                  }}
                >
                  <span className="bg-primary text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-0 relative z-10">
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300"
                  style={{ color: "#004077" }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price with scale animation on hover */}
              <div className="text-center mb-4 sm:mb-6 relative z-10">
                <div className="flex items-baseline justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm sm:text-lg font-semibold text-gray-900">
                    {plan.currency}
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mx-1">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-base sm:text-base">/ {plan.period}</span>
                </div>
              </div>

              {/* Features Title */}
              <div className="mb-4 sm:mb-6 relative z-10">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                  Features
                </h4>
              </div>

              {/* Features List with staggered hover animation */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ 
                      transitionDelay: `${featureIndex * 50}ms` 
                    }}
                  >
                    {feature.included ? (
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
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
                    ) : (
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    )}
                    <span
                      className={`text-base transition-colors duration-300 ${
                        feature.included
                          ? "text-gray-900 group-hover:text-gray-700"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button with enhanced hover effects */}
              <div className="mt-auto relative z-10">
                <Button
                  variant={plan.buttonVariant}
                  size="medium"
                  className="w-full text-base sm:text-base py-2 sm:py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => console.log(`Selected ${plan.name} plan`)}
                >
                  {plan.buttonText}
                </Button>
              </div>

              {/* Shimmer effect on popular card */}
              {plan.popular && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none">
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 animate-shimmer" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(300%) translateY(300%) rotate(45deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;