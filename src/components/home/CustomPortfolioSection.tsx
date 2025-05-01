
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CustomPortfolioSection = () => {
  return (
    <section className="py-16 px-4 bg-white mb-0">
      <div className="max-w-7xl mx-auto">
        <div className="bg-akotex-red rounded-2xl overflow-hidden relative hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            <div className="md:w-1/2 text-white mb-8 md:mb-0 z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">Ready to Build Your Custom Portfolio?</h2>
              <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>It only takes 2 minutes to begin</p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-akotex-red hover:bg-gray-100 hover:scale-105 font-bold transition-transform duration-300"
                >
                  <Link to="/signup">Invest Now</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform duration-300"
                >
                  <Link to="/investments">Learn more</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto z-10">
              <img 
                src="/lovable-uploads/f793ed30-0a6f-40bf-92c6-9325567266d1.png" 
                alt="Custom Portfolio" 
                className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-white opacity-10 blur-[80px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] bg-white opacity-10 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPortfolioSection;
