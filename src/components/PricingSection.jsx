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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-title mb-6">
            Choose your plan
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300
                ${
                  plan.popular
                    ? "border-primary scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  style={{ color: "#004077" }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-lg font-semibold text-gray-900">
                    {plan.currency}
                  </span>
                  <span className="text-3xl lg:text-4xl font-semibold text-gray-900 mx-1">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/ {plan.period}</span>
                </div>
              </div>

              {/* Features Title (Replaces Button) */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800">Features</h4>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
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
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-gray-500"
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
                      className={`text-sm ${
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
                  size="large"
                  className="w-full"
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
