
import HeroSection from "@/components/home/HeroSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import InvestmentOptionsSection from "@/components/home/InvestmentOptionsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import CustomPortfolioSection from "@/components/home/CustomPortfolioSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="animate-fade-in">
        <HeroSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
        <StatisticsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
        <InvestmentOptionsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
        <WhyChooseUsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
        <TestimonialsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
        <FaqSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
        <CtaSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
        <CustomPortfolioSection />
      </div>
    </div>
  );
};

export default HomePage;
