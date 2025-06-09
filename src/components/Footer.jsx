import React from "react";
import config from "../config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Pricing", href: "#pricing" },
    { name: "Download", href: "#download" },
  ];

  const supportLinks = [
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Help Centre", href: "#help" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer style={{ backgroundColor: "#111827" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Details Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={config.assets.navLogo}
                alt="Tutoz Logo"
                className="h-10 mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                The AI tutoring app that helps students crack competitive exams
                by providing instant doubt resolution
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row gap-8 sm:gap-12">
            {/* Quick Links */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      SATCARD, IIT Palakad,
                      <br />
                      Palakad, Kerala, 678623
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+911234567890"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    +91 1234567890
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@tutoz.ai"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    info@tutoz.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Tutoz AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;