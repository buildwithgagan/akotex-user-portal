import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/images/banner_bg.png')] bg-cover bg-center bg-no-repeat h-[90vh]">
      <div className="max-w-7xl mx-auto">
         <div className="absolute top-1/2 w-[500px]" style={{ transform: "translateY(-50%)" }}>
           {/* Left Content */}
           <div className="text-center lg:text-left">
          <div className="inline-block bg-akotex-red/20 border border-akotex-red rounded-lg px-4 py-1 mb-6">
            <span className="text-sm text-gray font-medium">Investment made simple</span>
          </div>
            <h1 className="text-[4xl] md:text-4xl lg:text-6xl font-medium mb-8 leading-tight font-poppins">
              Grow Your Wealth with{" "}
              <span className="text-akotex-red">Confidence</span>
            </h1>

            <p className="text-md md:text-md mb-12 text-gray-600 max-w-2xl font-inter leading-relaxed">
            Access professionally managed investments and secure your financial future with Akotex Wealth Compass.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                asChild
                size="lg"
                className="bg-akotex-red hover:bg-akotex-darkred text-white font-normal text-md py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
              >
                <Link to="/signup">Invest Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#131D31] hover:bg-akotex-darkred text-white font-normal text-md py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
              >
                <Link to="/investments">Learn More</Link>
              </Button>
            </div>

            {/* App Store Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div> */}

            {/* Background decorative elements */}
            <div className="w-32 h-24 grid grid-cols-8 gap-1">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-akotex-red opacity-50"></div>
              ))}
            </div>
          </div>
         </div>
      </div>
    </section>
  );
};

export default HeroSection;
