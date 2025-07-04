
import HeroSection from "@/components/home/HeroSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import InvestmentOptionsSection from "@/components/home/InvestmentOptionsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import BackedBySection from "@/components/home/BackedBySection";
import CtaSection2 from "@/components/home/CtaSection2";
import ScrollingTiersLogos from "@/components/home/ScrollingTiersCards";
import SectionCarousel from "@/components/nav-components/InvestmentOptionSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div data-aos="fade-up">
        <HeroSection />
      </div>
      <div data-aos="fade-up" style={{ animationDelay: "100ms" }}>
        <StatisticsSection />
      </div>
      <div data-aos="fade-up" style={{ animationDelay: "100ms" }}>
        <SectionCarousel />
      </div>
      {/* <div style={{ animationDelay: "200ms" }}>
        <InvestmentOptionsSection />
      </div> */}
      <div data-aos="fade-up" style={{ animationDelay: "200ms" }}>
        <CtaSection />
      </div>
      <div style={{ animationDelay: "300ms" }}>
        <WhyChooseUsSection />
      </div>
      <div data-aos="fade-up" style={{ animationDelay: "300ms" }}>
        <ScrollingTiersLogos />
      </div>
      {/* <div data-aos="fade-up" style={{ animationDelay: "350ms" }}>
        <BackedBySection />
      </div> */}
      <div data-aos="fade-up" style={{ animationDelay: "400ms" }}>
        <TestimonialsSection />
      </div>
      {/* <div data-aos="fade-up" style={{ animationDelay: "500ms" }}>
        <FaqSection />
      </div> */}
      <div data-aos="fade-up" style={{ animationDelay: "600ms" }}>
        <CtaSection2 />
      </div>
    </div>
  );
};

export default HomePage;
