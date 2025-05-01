
import HeroSection from "@/components/home/HeroSection";
import InvestmentOptionsSection from "@/components/home/InvestmentOptionsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import CtaSection from "@/components/home/CtaSection";
import FooterSection from "@/components/home/FooterSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <InvestmentOptionsSection />
      <WhyChooseUsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
