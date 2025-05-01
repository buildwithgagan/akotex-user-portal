
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-akotex-black via-black to-akotex-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Grow Your Wealth with Confidence
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
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
              <div className="absolute inset-0 bg-akotex-red rounded-full opacity-20 blur-2xl"></div>
              <div className="relative bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                <h3 className="text-2xl font-semibold mb-4">Investment Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Indices & ETFs</span>
                      <span className="font-semibold text-akotex-red">+12.4%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-akotex-red h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Real Estate</span>
                      <span className="font-semibold text-akotex-red">+8.7%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-akotex-red h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Crypto</span>
                      <span className="font-semibold text-akotex-red">+21.3%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-akotex-red h-2 rounded-full" style={{ width: "85%" }}></div>
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
