import ComparisonSection from "../components/ComparisonSection";
import DownloadSection from "../components/DownloadSection";
import ExamCards from "../components/ExamCards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorksSection";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ExamCards />
      <HowItWorksSection/>
      <PricingSection />
      <ComparisonSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Home;
