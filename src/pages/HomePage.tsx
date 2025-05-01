
import HeroSection from "@/components/home/HeroSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import InvestmentOptionsSection from "@/components/home/InvestmentOptionsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import FooterSection from "@/components/home/FooterSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <InvestmentOptionsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
