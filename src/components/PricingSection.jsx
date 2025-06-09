import React from "react";
import Button from "./Button";

const PricingSection = () => {
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
    <section className="py-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-title">
            Choose your plan
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 transition-all duration-300
                w-full max-w-sm sm:max-w-sm md:max-w-xs lg:max-w-sm xl:flex-1
                ${
                  plan.popular
                    ? "border-primary scale-100 sm:scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-0">
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3"
                  style={{ color: "#004077" }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-baseline justify-center">
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
              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                  Features
                </h4>
              </div>

              {/* Features List */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
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
                      className={`text-base ${
                        feature.included
                          ? "text-gray-900"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  variant={plan.buttonVariant}
                  size="medium"
                  className="w-full text-base sm:text-base py-2 sm:py-3"
                  onClick={() => console.log(`Selected ${plan.name} plan`)}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;