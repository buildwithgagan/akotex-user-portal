import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "/lovable-uploads/1feac9d3-23a9-4db9-bf16-8af20bfd0900.png",
    title: "Professional Management",
    description:
      "Our team of experienced professionals manages your investments using proven strategies.",
  },
  {
    icon: "/lovable-uploads/ca1a4c4b-73b3-4153-a19b-1d26694e4439.png",
    title: "Transparent Reporting",
    description:
      "Access detailed performance reports and portfolio insights at any time.",
  },
  {
    icon: "/lovable-uploads/c1121518-2d71-43e9-9d5c-fdc03af84aa1.png",
    title: "Secure Platform",
    description:
      "Bank-level security and compliance with relevant regulations to protect your investments.",
  },
  {
    icon: "/lovable-uploads/75e9b8ea-2586-4461-860c-a6a295d34341.png",
    title: "Flexible Investment",
    description:
      "Start with a single payment or set up recurring investments to build your wealth steadily.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="inline-block bg-akotex-red/20 border border-akotex-red rounded-lg px-3 py-1 sm:px-4 sm:py-1 mb-4 sm:mb-6">
              <span className="text-xs sm:text-[12px] text-gray font-normal">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8 font-poppins leading-tight">
              The <span className="text-akotex-red">Akotex</span> Wealth
              Advantage
            </h2>

            <p className="text-sm sm:text-md text-[#414141] font-normal mb-8 sm:mb-12 font-inter leading-relaxed max-w-md sm:max-w-lg">
              We provide a secure, transparent and professional investment
              experience designed to help you reach your financial goals.
            </p>

            {/* Feature Cards */}
            <div className="space-y-6 sm:space-y-8 lg:me-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-[#E0E8EC] p-4 sm:p-5 rounded-[20px] max-w-lg"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-gray-900 rounded-[10px] p-2 flex-shrink-0">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-md font-medium font-poppins text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-inter mt-2 sm:mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className="lg:relative"
            style={{ height: "100%" }}
            data-aos="fade-left"
          >
            <div className="hidden lg:block lg:absolute bottom-0">
              <div className="lg:relative">
                {" "}
                <img
                  src="/images/whyGirl.png"
                  alt="Professional wealth management"
                  className=" max-h-[600px] object-fit -translate-y-10"
                />
                <img
                  src="/images/whyPhone.png"
                  alt="Professional wealth management"
                  className="absolute h-[75%] bottom-0 left-0 -translate-x-1/2 object-center"
                />
              </div>
            </div>
            <img
              src="/images/whychoose.png"
              alt="Professional wealth management"
              className=" object-center md:hidden"
            />

            {/* Decorative Red Dots */}
            {/* <div className="absolute bottom-4 right-8 flex gap-2">
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
