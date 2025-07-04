import { log } from "console";
import { link } from "fs";
import React, { RefObject, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type InvestmentDropdownProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  refProp?: RefObject<HTMLDivElement>;
};

const investmentOptions = [
  {
    icon: "/lovable-uploads/3835b7a9-3c48-443d-a2d7-9a6635541d0b.png",
    title: "Indices & ETFs",
    description:
      "Diversified portfolios of global indices and ETFs designed for steady growth and income.",
    minInvestment: "$1,000",
    avgReturn: "8% - 12%",
    link: "/investments",
  },
  {
    icon: "/lovable-uploads/cb56cb6c-0f62-4b2e-8f44-c736269af0f3.png",
    title: "Real Estate",
    description:
      "Access premium real estate investments with lower entry points and professional management.",
    minInvestment: "$2,500",
    avgReturn: "7% - 10%",
    link: "/investments",
  },
  {
    icon: "/lovable-uploads/bd60af5c-db27-493d-8681-a56025d9eb9d.png",
    title: "Crypto Assets",
    description:
      "Strategic crypto portfolios balanced for growth potential while managing volatility.",
    minInvestment: "$500",
    avgReturn: "15% - 25%",
    link: "/investments",
  },
];

const InvestmentDropdown: React.FC<InvestmentDropdownProps> = ({
  open,
  setOpen,
  refProp,
}) => {
  const navigate = useNavigate();
  if (!open) return null;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 w-[500px] lg:w-full bg-white shadow-lg"
      // ref={refProp}
      onMouseLeave={()=> setOpen(false)}

    >
      <div className="grid lg:grid-cols-3 gap-4 z-50 border border-gray-200 rounded-none shadow-lg p-4">
        {investmentOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`${option.link}`);
              setOpen(false);
            }}
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
                <h3 className="text-sm sm:text-md font-black font-poppins text-gray-900">
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
      {/* Footer Bottom */}
      <div className="py-6 border-t border-gray-300 text-center bg-white">
        <p className="text-xs sm:text-sm font-inter text-black">
          Akotex Investments © All Rights Reserved 2025
        </p>
      </div>
    </div>
  );
};

export default InvestmentDropdown;
