
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-akotex-black dark:to-gray-900 -z-10"></div>
      
      {/* Light Effect */}
      <div className="absolute right-0 bottom-0 w-[80%] h-[70%] bg-akotex-red/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Announcement Banner */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="bg-akotex-black/5 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 flex items-center justify-center text-sm text-center">
            <span className="flex items-center gap-2">
              Our highest yielding opportunity is live now! 
              <Link to="/investments" className="text-akotex-red font-medium hover:underline">
                Invest now
              </Link>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Performance Badge */}
            <div className="inline-flex items-center bg-white dark:bg-white/10 rounded-full px-4 py-1.5 mb-6 shadow-sm border border-gray-100 dark:border-white/10">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm font-medium">10.1% average investor returns in 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build your wealth through <span className="text-akotex-red">real estate</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-xl">
              Thousands of investors all over the world are using Akotex to access income generating real estate deals in high growth markets, from only $500
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#download" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg">
                <Apple size={24} className="mr-2" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>
              
              <a href="#download" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3.5l14 8.5-14 8.5z" fill="currentColor"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Mobile Preview Column */}
          <div className="order-1 md:order-2 relative">
            <div className="relative w-full h-[500px] md:h-[600px]">
              {/* Multiple floating phone mockups */}
              <div className="absolute right-0 top-0 w-[70%] transform rotate-3">
                <img 
                  src="/lovable-uploads/09e0d919-7f27-4b5b-881a-beb6edaff475.png" 
                  alt="Akotex Wealth Mobile App" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Investment card mockup */}
              <div className="absolute left-0 bottom-10 z-10 w-[60%] bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 transform -rotate-3">
                <div className="mb-2">
                  <span className="text-xs text-gray-500">Property Investment</span>
                  <h3 className="font-bold text-lg">Downtown Apartment</h3>
                </div>
                <div className="flex justify-between items-center my-2">
                  <span className="text-sm">Annual return</span>
                  <span className="text-akotex-red font-bold text-xl">+8.7%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 my-2">
                  <div className="bg-akotex-red h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$230,500 funded</span>
                  <span>$350,000 goal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
