
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CustomPortfolioSection = () => {
  return (
    <section className="py-20 px-4 bg-akotex-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-akotex-red via-akotex-red to-akotex-darkred rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-white opacity-10 blur-[80px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] bg-white opacity-10 blur-[80px] rounded-full"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center p-12 lg:p-16 relative z-10">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-poppins leading-tight">
                Ready to Build Your Custom Portfolio?
              </h2>
              <p className="text-xl md:text-2xl mb-12 font-inter leading-relaxed">
                It only takes 2 minutes to begin your wealth-building journey with personalized investment strategies.
              </p>
              
              {/* CTAs */}
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
            
            {/* Right Image */}
            <div className="lg:w-1/2 relative">
              <img 
                src="/lovable-uploads/ac1e8453-c4cc-49f3-97ce-a0082563375b.png" 
                alt="Custom Portfolio Dashboard" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPortfolioSection;
