import React from "react";

const ComparisonSection = () => {
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
    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
      <svg
        className="w-4 h-4 text-white"
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
    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
      <svg
        className="w-4 h-4 text-white"
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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold">
            <span style={{ color: "#004077" }}>Why </span>
            <span className="text-primary">Tutoz</span>
            <span style={{ color: "#004077" }}> stands out</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Compare Tutoz with traditional apps and see the difference
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Table Layout */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-xl font-bold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-center text-xl font-bold text-primary">Tutoz</th>
                  <th className="px-6 py-4 text-center text-xl font-bold text-gray-900">Other Apps</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-lg font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.tutoz ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.others ? <CheckIcon /> : <CrossIcon />}
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
