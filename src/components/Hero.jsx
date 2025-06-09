import React from "react";
import config from "../config";
import Button from "./Button";

const Hero = () => {
  const handleDownloadApp = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=your.app.package",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSeeHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left pt-20 lg:p-4">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-title-dark mb-6"
              style={{ lineHeight: "1.16" }}
            >
              {config.hero.heroTextFirst}
              <span className="text-primary"> AI </span>
              {config.hero.heroTextSecond}
            </h1>

            {/* Points Container with Fixed Width and Center Alignment */}
            <div className="flex flex-col items-center lg:items-start mb-8">
              <div className="w-full max-w-sm lg:max-w-none space-y-3">
                {[
                  config.hero.heroPointsOne,
                  config.hero.heroPointsTwo,
                  config.hero.heroPointsThree,
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start lg:items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 lg:mt-0">
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
                    <p className="text-sm sm:text-base text-gray-700 text-left leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="large"
                onClick={handleDownloadApp}
              >
                Download App
              </Button>
              <Button
                variant="secondary"
                size="large"
                onClick={handleSeeHowItWorks}
              >
                See how it works
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center pt-4">
            <img
              src={config.assets.heroImage}
              alt="Tutoz App"
              className="max-w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;