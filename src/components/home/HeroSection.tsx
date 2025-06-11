import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="lg:relative overflow-hidden lg:bg-[url('/images/banner_bg.png')] lg:bg-cover bg-center bg-no-repeat lg:h-[90vh] py-10 lg:py-0">
      <div className="max-w-7xl mx-auto pl-1 md:pl-0">
        <div
          className="lg:absolute lg:top-1/2 lg:w-[500px] lg:translate-y-[-50%]"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-akotex-red/20 border border-akotex-red rounded-lg px-4 py-1 mb-6">
              <span className="text-sm text-gray font-medium">
                Investment made simple
              </span>
            </div>
            <h1 className="text-[4xl] md:text-4xl lg:text-6xl font-medium mb-8 leading-tight font-poppins">
              Grow Your Wealth with{" "}
              <span className="text-akotex-red">Confidence</span>
            </h1>

            <p className="text-md md:text-md mb-12 text-gray-600 max-w-2xl font-inter leading-relaxed">
              Access professionally managed investments and secure your
              financial future with Akotex Wealth Compass.
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                asChild
                size="lg"
                className="bg-akotex-red hover:bg-akotex-darkred text-white font-normal w-fit text-md py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
              >
                <Link to="/signup">Invest Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#131D31] hover:bg-akotex-darkred text-white font-normal w-fit text-md py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
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
            <div className="hidden w-32 h-24 lg:grid grid-cols-8 gap-1">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-akotex-red opacity-50"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <img
            src="/images/phones.png"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
