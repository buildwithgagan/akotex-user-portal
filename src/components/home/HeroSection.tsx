
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Play, TrendingUp, Users, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-akotex-black dark:to-gray-900">
      {/* Enhanced Background Effects */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-akotex-red/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
          <TrendingUp className="h-6 w-6 text-akotex-red" />
        </div>
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
          <Users className="h-6 w-6 text-blue-500" />
        </div>
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
          <DollarSign className="h-6 w-6 text-green-500" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Announcement Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-akotex-red/10 to-blue-500/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-center text-sm text-center border border-white/20 shadow-lg">
            <span className="flex items-center gap-2 font-medium">
              🚀 Our highest yielding opportunity is live now! 
              <Link to="/investments" className="text-akotex-red font-semibold hover:underline transition-colors">
                Invest now →
              </Link>
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Enhanced Left Content Column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Enhanced Performance Badge */}
            <div className="inline-flex items-center bg-white/90 dark:bg-white/10 rounded-full px-5 py-2.5 mb-8 shadow-lg border border-gray-100 dark:border-white/10 backdrop-blur-sm">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold font-inter">10.1% average investor returns in 2024</span>
            </div>
            
            {/* Bold Typography with Enhanced Hierarchy */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-poppins">
              Grow Your Wealth with{" "}
              <span className="text-akotex-red bg-gradient-to-r from-akotex-red to-akotex-darkred bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-2xl font-inter leading-relaxed">
              Join thousands of investors worldwide accessing premium real estate deals in high-growth markets, starting from just $500
            </p>
            
            {/* Enhanced Side-by-Side CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <Link to="/signup">Invest Now</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-akotex-red text-gray-700 hover:text-akotex-red font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <Link to="/investments">Learn More</Link>
              </Button>
            </div>
            
            {/* Enhanced App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download" 
                className="inline-flex items-center bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <Apple size={28} className="mr-3 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80 font-inter">Download on the</span>
                  <span className="text-base font-semibold font-inter">App Store</span>
                </div>
              </a>
              
              <a 
                href="#download" 
                className="inline-flex items-center bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <Play size={28} className="mr-3 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80 font-inter">GET IT ON</span>
                  <span className="text-base font-semibold font-inter">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Enhanced Mobile Preview Column */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[600px] lg:h-[700px]">
              {/* Enhanced Gradient Background for Phones */}
              <div className="absolute inset-0 bg-gradient-radial from-akotex-red/20 via-transparent to-transparent rounded-full blur-3xl"></div>
              
              {/* Main Phone Mockup - More Prominent */}
              <div className="absolute right-8 top-8 w-[65%] transform rotate-2 z-20">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/09e0d919-7f27-4b5b-881a-beb6edaff475.png" 
                    alt="Akotex Wealth Mobile App" 
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Secondary Phone - Overlapping */}
              <div className="absolute left-4 top-20 w-[55%] transform -rotate-3 z-10">
                <div className="relative opacity-90">
                  <img 
                    src="/lovable-uploads/09e0d919-7f27-4b5b-881a-beb6edaff475.png" 
                    alt="Akotex Wealth Mobile App Secondary" 
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>
              </div>
              
              {/* Enhanced Investment Card Mockup */}
              <div className="absolute left-0 bottom-16 z-30 w-[70%] bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700 transform -rotate-2 backdrop-blur-sm">
                <div className="mb-3">
                  <span className="text-xs text-gray-500 font-inter font-medium">Property Investment</span>
                  <h3 className="font-bold text-xl font-poppins">Downtown Apartment</h3>
                </div>
                <div className="flex justify-between items-center my-3">
                  <span className="text-sm font-inter">Annual return</span>
                  <span className="text-akotex-red font-bold text-2xl font-poppins">+8.7%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 my-3">
                  <div className="bg-gradient-to-r from-akotex-red to-akotex-darkred h-3 rounded-full shadow-sm" style={{ width: "70%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-inter">
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
