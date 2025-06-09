const config = {
  hero: {
    heroTextFirst: "Instant Doubt Resolution With",
    heroTextSecond: "Tutoring",
    heroPointsOne: "Instant doubt resolution powered by advanced AI",
    heroPointsTwo:
      "Specialized for competitive exams: JEE, NEET, CAT, GATE & UPSC",
    heroPointsThree: "Created by IIT experts for unmatched quality",
  },
  howItWorks: {
    title: "We simplify learning",
    description: "Master difficult questions quickly. Get step-by-step explanations and one-on-one help when you're stuck.",
    steps: [
      {
        id: 1,
        title: "Submit a question",
        description: "Type your academic question directly or upload photos of handwritten problems, textbook exercises, worksheets, or any study material from any subject.",
        image: "assets/hwo-it work-step-1.svg",
      },
      {
        id: 2,
        title: "Get clear step-by-step guidance",
        description: "Follow the easiest and most detailed breakdown of how to approach and solve the question.",
        image: "/assets/hwo-it work-step-2.svg",
      },
      {
        id: 3,
        title: "Need help? Just ask.",
        description: "If one of the steps is unclear, ask for help and get personalised help.",
        image: "/assets/hwo-it work-step-3.svg",
      },
      {
        id: 4,
        title: "Get help with your questions",
        description: "Never get stuck again. Chat until you get it",
        image: "/assets/hwo-it work-step-4.svg",
      },
    ]
  },
  exams: {
    title: "Your Gateway to India's Top Exams",
    data: [
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
    ]
  },
  downloadSection: {
    title: {
      first: "Start Your ",
      highlight: "Success",
      last: " Journey"
    },
    description: "Experience the future of learning with AI-powered tutoring designed for competitive exam preparation",
    content: {
      heading: "Download Tutoz today",
      description: "Be among the first to experience revolutionary AI tutoring for competitive exams. Get instant doubt resolution, step-by-step explanations, and personalized learning support."
    },
    buttons: {
      appStore: "App Store",
      playStore: "Play Store"
    }
  },
  comparison: {
    title: {
      first: "Why ",
      highlight: "Tutoz",
      last: " stands out"
    },
    description: "Compare Tutoz with traditional apps and see the difference",
    tableHeaders: {
      features: "Features",
      tutoz: "Tutoz", 
      others: "Other Apps"
    },
    features: [
      "AI-powered instant doubt resolution",
      "Specialized for competitive exams",
      "Photo upload for handwritten questions",
      "Follow-up questions to clarify concepts",
      "Personalized learning paths",
      "Available 24/7, no waiting",
      "Created by IIT experts",
      "Affordable monthly subscription"
    ]
  },
  assets: {
    logoIcon: "assets/logo-icon.svg",
    navLogo: "assets/logo.svg",
    heroImage: "assets/hero-image.svg",
    downloadAppImage: "assets/download-mockup.svg",
  },
};

export default config;