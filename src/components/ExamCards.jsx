import React, { useState } from "react";

const ExamCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const examData = [
    {
      id: "jee",
      name: "JEE",
      title: "Joint Entrance Examination",
      description:
        "JEE is a national level entrance exam conducted for admission to various engineering colleges and courses all over the country.",
      color: "bg-blue-500",
      lightBg: "bg-blue-50",
      icon: (
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
    },
    {
      id: "neet",
      name: "NEET",
      title: "National Eligibility cum Entrance Test",
      description:
        "NEET is the national level medical entrance exam for admission to MBBS, BDS, and other medical courses in India.",
      color: "bg-green-600",
      lightBg: "bg-green-50",
      icon: (
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
    },
    {
      id: "gate",
      name: "GATE",
      title: "Graduate Aptitude Test in Engineering",
      description:
        "GATE is a national level examination that tests comprehensive understanding of undergraduate subjects in engineering and science. ",
      color: "bg-orange-500",
      lightBg: "bg-orange-50",
      icon: (
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
    },
    {
      id: "cat",
      name: "CAT",
      title: "Common Admission Test",
      description:
        "CAT is a computer-based test for admission to postgraduate management programs. ",
      color: "bg-purple-600",
      lightBg: "bg-purple-50",
      icon: (
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
    },
    {
      id: "upsc",
      name: "UPSC",
      title: "Union Public Service Commission",
      description:
        "UPSC Civil Services Examination is conducted for recruitment to various Central Government posts including IAS, IPS, IFS, and other Group A and Group B services.",
      color: "bg-gray-600",
      lightBg: "bg-gray-50",
      icon: (
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
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Your Gateway to India's Top Exams
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examData.map((exam) => (
            <div
              key={exam.id}
              className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-48 ${exam.color}`}
              onMouseEnter={() => setHoveredCard(exam.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Default Card Content */}
              <div className={`absolute inset-0 p-4 flex flex-col items-center justify-center text-center transition-all duration-300 ${hoveredCard === exam.id ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="text-white rounded-full p-3 mr-3">
                    {exam.icon}
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl text-white">{exam.name}</h3>
                </div>
              </div>

              {/* Hover Effect: Show Details */}
              <div
                className={`absolute inset-0 bg-white p-4 flex flex-col justify-start transition-all duration-300 ${hoveredCard === exam.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
              >
                <div className="text-center mt-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{exam.name}</h3>
                  <h4 className="text-md font-semibold text-gray-600 mb-3">{exam.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{exam.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCards;