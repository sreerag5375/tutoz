import React, { useState, useEffect } from "react";
import config from "../config";
import Button from "./Button";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { howItWorks } = config;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("how-it-works");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress =
        Math.max(0, -rect.top) / (sectionHeight - window.innerHeight);

      // Calculate which step should be active based on scroll position
      const stepIndex = Math.min(
        Math.floor(scrollProgress * howItWorks.steps.length),
        howItWorks.steps.length - 1
      );

      setActiveStep(Math.max(0, stepIndex));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [howItWorks.steps.length]);

  return (
    <section
      id="how-it-works"
      className="py-12 lg:py-24 bg-gray-50"
      style={{ minHeight: "200vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-title">
            {howItWorks.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            {howItWorks.description}
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {howItWorks.steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                sticky top-20 mb-4 sm:mb-6 lg:mb-8 transition-all duration-500 ease-out
                ${
                  activeStep === index
                    ? "opacity-100 scale-100 z-20"
                    : activeStep > index
                    ? "opacity-80 scale-98 z-10"
                    : "opacity-90 scale-99 z-10"
                }
              `}
              style={{
                transform:
                  activeStep === index
                    ? "translateY(0)"
                    : activeStep > index
                    ? `translateY(-${Math.min((activeStep - index) * 8, 24)}px)`
                    : "translateY(0)",
              }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                  {/* Left Content */}
                  <div className="p-6 sm:p-8 lg:p-12 order-2 md:order-1">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Step Number */}
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {step.id}
                          </span>
                        </div>
                        <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                          Step {step.id}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg lg:text-3xl font-bold text-gray-900 leading-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="flex space-x-2 pt-2 sm:pt-4">
                        {howItWorks.steps.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx <= activeStep ? "bg-primary" : "bg-gray-200"
                            }`}
                            style={{ width: `${100 / howItWorks.steps.length}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative bg order-1 md:order-2 min-h-[250px] sm:min-h-[300px] lg:min-h-[500px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-r-3xl md:rounded-r-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;