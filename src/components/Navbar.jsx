import { useState } from "react";
import config from "../config";
import Button from "./Button"; // Import the Button component

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle Play Store redirect
  const handlePlayStoreClick = () => {
    // Replace with your actual Play Store URL
    window.open(
      "https://play.google.com/store/apps/details?id=your.app.package",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={config.assets.navLogo}
              alt="Tutoz Logo"
              className="h-10" // Added height for consistency
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
              >
                About Us
              </a>
            </nav>

            {/* Primary Button */}
            <Button
              variant="primary"
              size="medium"
              onClick={handlePlayStoreClick}
              className="ml-4"
            >
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded-md transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-3 sm:px-3 border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                About Us
              </a>

              {/* Mobile Button */}
              <div className="px-3 pt-2">
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    handlePlayStoreClick();
                    closeMobileMenu();
                  }}
                  className="w-full"
                >
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
