import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const InvestmentOptionsSection = () => {
  const investmentOptions = [
    {
      icon: "/lovable-uploads/3835b7a9-3c48-443d-a2d7-9a6635541d0b.png",
      title: "Indices & ETFs",
      description:
        "Diversified portfolios of global indices and ETFs designed for steady growth and income.",
      minInvestment: "$1,000",
      avgReturn: "8% - 12%",
    },
    {
      icon: "/lovable-uploads/cb56cb6c-0f62-4b2e-8f44-c736269af0f3.png",
      title: "Real Estate",
      description:
        "Access premium real estate investments with lower entry points and professional management.",
      minInvestment: "$2,500",
      avgReturn: "7% - 10%",
    },
    {
      icon: "/lovable-uploads/bd60af5c-db27-493d-8681-a56025d9eb9d.png",
      title: "Crypto Assets",
      description:
        "Strategic crypto portfolios balanced for growth potential while managing volatility.",
      minInvestment: "$500",
      avgReturn: "15% - 25%",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-20">
      <div
        className="max-w-8xl mx-auto"
        style={{
          background: "linear-gradient(180deg, #EEF4F8 0%, #FFFFFF 100%)",
          borderRadius: "30px",
        }}
      >
        <div className="max-w-7xl mx-auto py-12 sm:py-16">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center px-4 lg:px-0">
            {/* Left Side - Text and Mobile Mockup */}
            <div className="relative" data-aos="fade-right">
              <div className="mb-6 sm:mb-8">
                <div className="inline-block bg-akotex-red/20 border border-akotex-red rounded-lg px-3 py-1 sm:px-4 sm:py-1 mb-4 sm:mb-6">
                  <span className="text-md text-akotex-red font-black">
                    Investment Options
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
                  Diversified
                  <br />
                  <span className="text-akotex-red">Investment Portfolios</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-md font-inter mb-4">
                  Choose from our professionally managed investment portfolios
                  tailored to meet your financial goals.
                </p>
              </div>
              <div className="bg-gray-900 rounded-3xl relative overflow-hidden w-full">
                {/* Phone Frame */}
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/assets/invest.png"
                    alt="Investment App Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Investment Options */}
            <div data-aos="fade-left">
              <div className="space-y-6 sm:space-y-8">
                {investmentOptions.map((option, index) => (
                  <div
                    key={index}
                    className="border border-[#E0E8EC] rounded-[20px] bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-gray-900 rounded-[10px] p-2 flex-shrink-0">
                        <img
                          src={option.icon}
                          alt={option.title}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm md:text-md font-black font-poppins text-gray-900">
                          {option.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <p className="text-xs sm:text-sm text-gray-600 font-inter mb-3 sm:mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 font-inter leading-relaxed">
                            Minimum Investment
                          </p>
                          <p className="text-sm sm:text-base font-bold text-gray-900">
                            {option.minInvestment}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 font-inter leading-relaxed">
                            Avg. Annual Return
                          </p>
                          <p className="text-sm sm:text-base font-bold text-gray-900">
                            {option.avgReturn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;
