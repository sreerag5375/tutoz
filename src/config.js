const config = {
  hero: {
    heroTextFirst: "Instant Doubt Resolution With",
    heroTextSecond: "Tutoring",
    heroPointsOne: "Instant doubt resolution powered by advanced AI",
    heroPointsTwo:
      "Specialized for competitive exams: JEE, NEET, CAT, GATE & UPSC",
    heroPointsThree: "Created by IIT experts for unmatched quality",
  },
  assets: {
    logoIcon: "assets/logo-icon.svg",
    navLogo: "assets/logo.svg",
    heroImage: "assets/hero-image.svg",
    downloadAppImage: "assets/download-mockup.svg",
  },
  exams: [
    {
      id: "jee",
      name: "JEE",
      title: "Joint Entrance Examination",
      description:
        "JEE is a national level entrance exam conducted for admission to various engineering colleges and courses all over the country.",
      color: "bg-blue-500",
      lightBg: "bg-blue-50",
      iconType: "graduation"
    },
    {
      id: "neet",
      name: "NEET",
      title: "National Eligibility cum Entrance Test",
      description:
        "NEET is the national level medical entrance exam for admission to MBBS, BDS, and other medical courses in India.",
      color: "bg-green-600",
      lightBg: "bg-green-50",
      iconType: "graduation"
    },
    {
      id: "gate",
      name: "GATE",
      title: "Graduate Aptitude Test in Engineering",
      description:
        "GATE is a national level examination that tests comprehensive understanding of undergraduate subjects in engineering and science.",
      color: "bg-orange-500",
      lightBg: "bg-orange-50",
      iconType: "settings"
    },
    {
      id: "cat",
      name: "CAT",
      title: "Common Admission Test",
      description:
        "CAT is a computer-based test for admission to postgraduate management programs.",
      color: "bg-purple-600",
      lightBg: "bg-purple-50",
      iconType: "calculator"
    },
    {
      id: "upsc",
      name: "UPSC",
      title: "Union Public Service Commission",
      description:
        "UPSC Civil Services Examination is conducted for recruitment to various Central Government posts including IAS, IPS, IFS, and other Group A and Group B services.",
      color: "bg-gray-600",
      lightBg: "bg-gray-50",
      iconType: "book"
    },
  ],
};

export default config;