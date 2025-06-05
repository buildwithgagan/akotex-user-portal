
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Users, Zap } from "lucide-react";

const CustomPortfolioSection = () => {
  return (
    <section className="py-32 px-4 bg-akotex-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-akotex-red via-akotex-red to-akotex-darkred rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-white opacity-10 blur-[80px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] bg-white opacity-10 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-[20%] h-[20%] bg-white opacity-5 blur-[60px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Floating Icons */}
          <div className="absolute top-16 left-16 animate-float">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-xl">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-xl">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-16 right-16 animate-float" style={{ animationDelay: '3s' }}>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-xl">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center p-12 lg:p-16 relative z-10">
            {/* Enhanced Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in font-poppins leading-tight">
                Ready to Build Your Custom Portfolio?
              </h2>
              <p className="text-xl md:text-2xl mb-12 animate-fade-in font-inter leading-relaxed" style={{ animationDelay: "200ms" }}>
                It only takes 2 minutes to begin your wealth-building journey with personalized investment strategies.
              </p>
              
              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-akotex-red hover:bg-gray-100 hover:scale-105 font-bold text-xl py-8 px-10 rounded-xl shadow-2xl transition-all duration-300 font-inter"
                >
                  <Link to="/signup">Start Investing Now</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm font-bold text-xl py-8 px-10 rounded-xl shadow-2xl transition-all duration-300 font-inter"
                >
                  <Link to="/investments">Explore Options</Link>
                </Button>
              </div>
            </div>
            
            {/* Enhanced Right Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img 
                  src="/lovable-uploads/f793ed30-0a6f-40bf-92c6-9325567266d1.png" 
                  alt="Custom Portfolio Dashboard" 
                  className="w-full h-auto object-contain transform transition-transform duration-700 hover:scale-105 drop-shadow-2xl"
                />
                
                {/* Enhanced Floating Performance Cards */}
                <div className="absolute top-8 left-0 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl animate-float transform -translate-x-1/4">
                  <div className="text-2xl font-bold text-akotex-red font-poppins">+18.5%</div>
                  <div className="text-sm text-gray-600 font-inter">YTD Return</div>
                </div>
                
                <div className="absolute bottom-8 right-0 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl animate-float transform translate-x-1/4" style={{ animationDelay: '1s' }}>
                  <div className="text-2xl font-bold text-green-500 font-poppins">$125K</div>
                  <div className="text-sm text-gray-600 font-inter">Portfolio Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPortfolioSection;
