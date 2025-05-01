
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-akotex-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-akotex-red opacity-10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[35%] h-[40%] bg-akotex-red opacity-10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <span className="text-sm font-medium">Investment made simple</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Grow Your Wealth with Confidence
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              Access professionally managed investments and secure your financial future with Akotex Wealth Compass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold">
                <Link to="/signup" className="flex items-center">
                  Start Investing Now <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                <Link to="/investments">
                  Explore Investment Options
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-akotex-red/20 rounded-full opacity-30 blur-3xl"></div>
              <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Investment Performance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span>Indices & ETFs</span>
                      <span className="font-semibold text-akotex-red">+12.4%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-akotex-red h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3">
                      <span>Real Estate</span>
                      <span className="font-semibold text-akotex-red">+8.7%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-akotex-red h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3">
                      <span>Crypto</span>
                      <span className="font-semibold text-akotex-red">+21.3%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-akotex-red h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
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
