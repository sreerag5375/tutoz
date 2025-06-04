import React from "react";
import config from "../config";
import Button from "./Button";

const DownloadSection = () => {
  const handleAppStoreClick = () => {
    // Replace with your actual App Store URL
    window.open(
      "https://apps.apple.com/app/tutoz",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handlePlayStoreClick = () => {
    // Replace with your actual Play Store URL
    window.open(
      "https://play.google.com/store/apps/details?id=com.tutoz.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleDirectDownload = () => {
    // Replace with your actual APK download URL
    window.open(
      "https://tutoz.com/download/tutoz.apk",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-16 lg:py-">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span style={{ color: "#004077" }}>Download </span>
            <span className="text-primary">Tutoz</span>
            <span style={{ color: "#004077" }}> today</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Compare Tutoz with traditional apps and see the difference
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 flex justify-center">
              <img
                src={config.assets.heroImage}
                alt="Tutoz App Interface"
                className="w-64 sm:w-80 md:w-96 lg:w-80 xl:w-96 "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{ color: "#004077" }}
              >
                Start Your Success Journey
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join thousands of students who are already using Tutoz to
                prepare smarter for their competitive exams. Download our app
                now and experience the power of AI tutoring.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* App Store Button */}
              <Button
                variant="primary"
                size="medium"
                onClick={handleAppStoreClick}
                className="w-full sm:w-auto bg-black text-white border-black hover:bg-gray-800 flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <span className="text-base">App Store</span>
              </Button>
              <br />
              {/* Play Store Button */}
              <Button
                variant="primary"
                size="medium"
                onClick={handlePlayStoreClick}
                className="w-full sm:w-auto bg-black text-white border-black hover:bg-gray-800 flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-base">Play Store</span>
              </Button>
              <br />
              {/* Direct Download Button */}
              <Button
                variant="primary"
                size="medium"
                onClick={handleDirectDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-3"
              >
                <svg
                  className="w-4 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-base">Download APK Directly</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
