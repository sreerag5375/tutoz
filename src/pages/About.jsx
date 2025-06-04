import React from 'react';
import config from '../config';

const AboutPage = () => {
  const stats = [
    { number: '50,000+', label: 'Students Helped' },
    { number: '1M+', label: 'Doubts Resolved' },
    { number: '99.8%', label: 'Success Rate' },
    { number: '24/7', label: 'Available Support' }
  ];

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Co-Founder & CEO',
      education: 'IIT Delhi, Ph.D. in AI',
      image: '/assets/team/rajesh.jpg',
      description: '15+ years in EdTech and AI research'
    },
    {
      name: 'Prof. Priya Sharma',
      role: 'Co-Founder & CTO',
      education: 'IIT Bombay, M.Tech CSE',
      image: '/assets/team/priya.jpg',
      description: 'Former Google AI researcher'
    },
    {
      name: 'Dr. Amit Verma',
      role: 'Head of Content',
      education: 'IIT Kanpur, Ph.D. Mathematics',
      image: '/assets/team/amit.jpg',
      description: 'Expert in competitive exam preparation'
    },
    {
      name: 'Sneha Patel',
      role: 'Head of Product',
      education: 'IIT Madras, B.Tech + MBA',
      image: '/assets/team/sneha.jpg',
      description: 'Product strategy and user experience expert'
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Constantly pushing the boundaries of AI in education to create better learning experiences.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Student-First',
      description: 'Every decision we make is centered around what\'s best for our students\' learning journey.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Maintaining the highest standards in content quality and educational methodology.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Accessibility',
      description: 'Making quality education accessible to every student, regardless of their background.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Tutoz was founded by IIT alumni with a vision to democratize quality education' },
    { year: '2021', title: 'AI Engine Launch', description: 'Launched our proprietary AI doubt resolution engine' },
    { year: '2022', title: '10K Students', description: 'Reached our first 10,000 active students milestone' },
    { year: '2023', title: 'Series A Funding', description: 'Raised Series A funding to expand our AI capabilities' },
    { year: '2024', title: '50K+ Students', description: 'Now serving over 50,000 students across India' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{color: '#004077'}}>
                About <span className="text-primary">Tutoz</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're on a mission to revolutionize education through AI, making quality learning accessible to every student preparing for competitive exams in India.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={config.assets.heroImage} 
                alt="Tutoz Team"
                className="w-full max-w-md mx-auto lg:max-w-none drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#004077'}}>
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming the way students learn and prepare for competitive exams
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#004077'}}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize quality education by providing instant, AI-powered doubt resolution to every student, 
                making competitive exam preparation more efficient and accessible across India.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#004077'}}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's leading AI-powered education platform, where every student has access to 
                personalized, expert-level guidance 24/7, transforming their learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#004077'}}>
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From IIT classrooms to revolutionizing education across India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tutoz was born out of a simple observation: too many bright students struggle with doubts that could 
                be easily resolved with the right guidance. As IIT graduates, our founders experienced firsthand 
                how access to quality mentorship can make the difference between success and failure in competitive exams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In 2020, during the pandemic, we saw students struggling more than ever with limited access to teachers 
                and quality education. This sparked the idea of creating an AI-powered platform that could provide 
                instant, accurate, and personalized help to students anytime, anywhere.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Tutoz serves over 50,000 students across India, powered by cutting-edge AI technology and 
                content created by IIT experts. We're not just another EdTech company – we're a mission-driven 
                organization committed to making quality education accessible to every student who dreams big.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#004077'}}>
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform education
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2" style={{color: '#004077'}}>{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#004077'}}>
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              IIT experts and industry leaders working together to transform education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1" style={{color: '#004077'}}>{member.name}</h3>
                <div className="text-primary font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-600 mb-3">{member.education}</div>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#004077'}}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#004077'}}>{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#004077'}}>
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your learning journey? Join thousands of students who are already succeeding with Tutoz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-hover transition-colors duration-200 text-lg">
              Download Tutoz Today
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-200 text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;