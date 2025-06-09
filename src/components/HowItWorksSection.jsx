import React, { useState, useEffect } from "react";
import Button from "./Button";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Submit a question",
      description: "Type in any academic question from any subject or course.",
      image: "/assets/step1-submit.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Get clear step-by-step guidance",
      description:
        "Follow the easiest and most detailed breakdown of how to approach and solve the question.",
      image: "/assets/step2-guidance.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Need help? Just ask.",
      description:
        "If one of the steps is unclear, ask for help and get personalised help.",
      image: "/assets/step3-help.jpg", // Replace with actual image path
    },
    {
      id: 4,
      title: "Get help with your questions",
      description: "Never get stuck again. Chat until you get it",
      image: "/assets/step4-chat.jpg", // Replace with actual image path
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
      className="py-16 lg:py-24 bg-gray-50"
      style={{ minHeight: "200vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-4"
            style={{ color: "#004077" }}
          >
            We simplify learning
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
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
                sticky top-20 mb-8 transition-all duration-700 ease-in-out
                ${
                  activeStep === index
                    ? "opacity-100 scale-100 z-20"
                    : activeStep > index
                    ? "opacity-30 scale-95 -translate-y-4"
                    : "opacity-60 scale-95"
                }
              `}
              style={{
                transform:
                  activeStep > index
                    ? `translateY(-${(activeStep - index) * 20}px)`
                    : "translateY(0)",
              }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px]">
                  {/* Left Content */}
                  <div className="p-8 lg:p-12 order-2 lg:order-1">
                    <div className="space-y-6">
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
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="flex space-x-2 pt-4">
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
                  <div className="relative order-1 lg:order-2 min-h-[300px] lg:min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      {/* Placeholder for image - replace with actual images */}
                      <div className="w-64 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
                          </div>
                          <p className="text-gray-600 font-medium">
                            Step {step.id} Image
                          </p>
                        </div>
                      </div>
                      {/* Replace above div with: */}
                      {/* <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
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
