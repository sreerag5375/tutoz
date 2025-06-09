import React, { useState, useEffect } from "react";
import Button from "./Button";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Submit a question",
      description:
        "Type your academic question directly or upload photos of handwritten problems, textbook exercises, worksheets, or any study material from any subject.",
      image: "assets/hwo-it work-step-1.svg",
    },
    {
      id: 2,
      title: "Get clear step-by-step guidance",
      description:
        "Follow the easiest and most detailed breakdown of how to approach and solve the question.",
      image: "/assets/hwo-it work-step-2.svg",
    },
    {
      id: 3,
      title: "Need help? Just ask.",
      description:
        "If one of the steps is unclear, ask for help and get personalised help.",
      image: "/assets/hwo-it work-step-3.svg",
    },
    {
      id: 4,
      title: "Get help with your questions",
      description: "Never get stuck again. Chat until you get it",
      image: "/assets/hwo-it work-step-4.svg",
    },
  ];

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
        Math.floor(scrollProgress * steps.length),
        steps.length - 1
      );

      setActiveStep(Math.max(0, stepIndex));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 lg:py-24 bg-gray-50"
      style={{ minHeight: "200vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4"
            style={{ color: "#004077" }}
          >
            We simplify learning
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Master difficult questions quickly. Get step-by-step explanations
            and one-on-one help when you're stuck.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {steps.map((step, index) => (
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                  {/* Left Content */}
                  <div className="p-6 sm:p-8 lg:p-12 order-2 lg:order-1">
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
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="flex space-x-2 pt-2 sm:pt-4">
                        {steps.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx <= activeStep ? "bg-primary" : "bg-gray-200"
                            }`}
                            style={{ width: `${100 / steps.length}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative order-1 lg:order-2 min-h-[250px] sm:min-h-[300px] lg:min-h-[500px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-r-3xl lg:rounded-r-3xl"
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
