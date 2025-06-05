
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-32 left-20 w-16 h-16 grid grid-cols-8 gap-1">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-akotex-red rounded-full opacity-30"></div>
        ))}
      </div>
      
      {/* Chart background element */}
      <div className="absolute bottom-32 right-32 opacity-10">
        <svg width="200" height="120" viewBox="0 0 200 120" className="text-gray-400">
          <path d="M20 100 L60 80 L100 60 L140 40 L180 20" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M30 110 L70 90 L110 70 L150 50 L190 30" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-poppins">
              Grow Your Wealth with{" "}
              <span className="text-akotex-red">
                Confidence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl font-inter leading-relaxed">
              Join thousands of investors worldwide accessing premium real estate deals in high-growth markets, starting from just $500
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
              >
                <Link to="/signup">Invest Now</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-akotex-red text-gray-700 hover:text-akotex-red font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
              >
                <Link to="/investments">Learn More</Link>
              </Button>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
              >
                <Apple size={24} className="mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80 font-inter">Download on the</span>
                  <span className="text-sm font-semibold font-inter">App Store</span>
                </div>
              </a>
              
              <a 
                href="#download" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
              >
                <Play size={24} className="mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80 font-inter">GET IT ON</span>
                  <span className="text-sm font-semibold font-inter">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right - Mobile Mockups */}
          <div className="relative">
            <div className="relative w-full h-[600px]">
              {/* Mobile Mockups using uploaded image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e50ef856-7fee-4b77-a5f1-f9501db3a695.png" 
                  alt="Akotex Mobile Apps" 
                  className="w-full h-auto object-contain max-w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
