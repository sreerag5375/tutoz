import React from "react";
import config from "../config";

const ComparisonSection = () => {
  const { comparison } = config;

  const CheckIcon = () => (
    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
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
    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
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
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-title">
            <span>{comparison.title.first}</span>
            <span className="text-primary">{comparison.title.highlight}</span>
            <span>{comparison.title.last}</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-600">
            {comparison.description}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          {/* Table Layout */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-base sm:text-lg lg:text-xl font-bold text-gray-900">{comparison.tableHeaders.features}</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-base sm:text-lg lg:text-xl font-bold text-primary">{comparison.tableHeaders.tutoz}</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-base sm:text-lg lg:text-xl font-bold text-gray-900">{comparison.tableHeaders.others}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.features.map((feature, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-medium text-gray-900">{feature}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex justify-center">
                        <CheckIcon />
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex justify-center">
                        {feature === "Photo upload for handwritten questions" || feature === "Affordable monthly subscription" ? <CheckIcon /> : <CrossIcon />}
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