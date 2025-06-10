import React from "react";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: <img src="/assets/icon1.png" className="h-10 w-10 " />,
      value: "$100M+",
      label: "Assets Under Management"
    },
    {
      icon: <img src="/assets/icon2.png" className="h-10 w-10 " />,
      value: "10,000+",
      label: "Happy Investors"
    },
    {
      icon: <img src="/assets/icon3.png" className="h-10 w-10 " />,
      value: "12.5%",
      label: "Avg. Annual Return"
    },
    {
      icon: <img src="/assets/icon4.png" className="h-10 w-10 " />,
      value: "24/7",
      label: "Customer Support"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2 font-poppins">
            Explore a Smarter Way to Invest
          </h2>
          <p className="text-2xl md:text-4xl text-akotex-red font-semibold font-poppins">
            — Trusted by Thousands
          </p>
        </div>
        
        {/* Desktop Layout - 4 Cards in One Line */}
        <div className="hidden lg:flex gap-6 items-center justify-center">
          {/* First Stat Card */}
          <div className="bg-[#FAFDFF] border border-[#E0E8EC] rounded-[20px] p-6 shadow-lg min-h-[340px] min-w-[250px] flex relative overflow-hidden group hover:bg-gray-900 transition-all duration-300">
            {/* Content Side (Left) */}
            <div className="flex flex-col justify-between flex-1 relative z-10">
                <div className="">
                  {stats[0].icon}
                </div>
              <div className="text-start">
                <p className="text-3xl font-semibold text-gray-900 mb-2 font-poppins group-hover:text-white transition-colors duration-300">
                  {stats[0].value}
                </p>
                <p className="text-gray-600 font-light text-md font-poppins leading-tight group-hover:text-gray-200 transition-colors duration-300 max-w-[105px]">
                  {stats[0].label}
                </p>
              </div>
            </div>

            {/* Image Side (Right) - Shows on Hover */}
            <div className="w-0 group-hover:w-32 transition-all duration-300 overflow-hidden">
              <div className="w-32 h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/img1.png" 
                  alt="Investment background" 
                  className="w-full h-full object-cover rounded-lg group-hover:w-[50%] group-hover:absolute group-hover:top-0 group-hover:right-0"
                />
              </div>
            </div>
          </div>

          {/* Second Stat Card */}
          <div className="bg-[#FAFDFF] border border-[#E0E8EC] rounded-[20px] p-6 shadow-lg min-h-[340px] min-w-[250px] flex relative overflow-hidden group hover:bg-gray-900 transition-all duration-300">
            {/* Content Side (Left) */}
            <div className="flex flex-col justify-between flex-1 relative z-10">
                <div className="">
                  {stats[1].icon}
                </div>
              <div className="text-start">
                <p className="text-3xl font-semibold text-gray-900 mb-2 font-poppins group-hover:text-white transition-colors duration-300">
                  {stats[1].value}
                </p>
                <p className="text-gray-600 font-light text-sm font-poppins leading-tight group-hover:text-gray-200 transition-colors duration-300 max-w-[105px]">
                  {stats[1].label}
                </p>
              </div>
            </div>

            {/* Image Side (Right) - Shows on Hover */}
            <div className="w-0 group-hover:w-32 transition-all duration-300 overflow-hidden">
              <div className="w-32 h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/img1.png" 
                  alt="Investment background" 
                  className="w-full h-full object-cover rounded-lg group-hover:w-[50%] group-hover:absolute group-hover:top-0 group-hover:right-0"
                />
              </div>
            </div>
          </div>

          {/* Third Stat Card */}
          <div className="bg-[#FAFDFF] border border-[#E0E8EC] rounded-[20px] p-6 shadow-lg min-h-[340px] min-w-[250px] flex relative overflow-hidden group hover:bg-gray-900 transition-all duration-300">
            {/* Content Side (Left) */}
            <div className="flex flex-col justify-between flex-1 relative z-10">
                <div className="">
                  {stats[2].icon}
                </div>
              <div className="text-start">
                <p className="text-3xl font-semibold text-gray-900 mb-2 font-poppins group-hover:text-white transition-colors duration-300">
                  {stats[2].value}
                </p>
                <p className="text-gray-600 font-light text-md font-poppins leading-tight group-hover:text-gray-200 transition-colors duration-300 max-w-[105px]">
                  {stats[2].label}
                </p>
              </div>
            </div>

            {/* Image Side (Right) - Shows on Hover */}
            <div className="w-0 group-hover:w-32 transition-all duration-300 overflow-hidden">
              <div className="w-32 h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/img1.png" 
                  alt="Investment background" 
                  className="w-full h-full object-cover rounded-lg group-hover:w-[50%] group-hover:absolute group-hover:top-0 group-hover:right-0"
                />
              </div>
            </div>
          </div>

          {/* Fourth Stat Card */}
          <div className="bg-[#FAFDFF] border border-[#E0E8EC] rounded-[20px] p-6 shadow-lg min-h-[340px] min-w-[250px] flex relative overflow-hidden group hover:bg-gray-900 transition-all duration-300">
            {/* Content Side (Left) */}
            <div className="flex flex-col justify-between flex-1 relative z-10">
                <div className="">
                  {stats[3].icon}
                </div>
              <div className="text-start">
                <p className="text-3xl font-semibold text-gray-900 mb-2 font-poppins group-hover:text-white transition-colors duration-300">
                  {stats[3].value}
                </p>
                <p className="text-gray-600 font-light text-md font-poppins group-hover:text-gray-200 transition-colors duration-300 max-w-[105px]">
                  {stats[3].label}
                </p>
              </div>
            </div>

            {/* Image Side (Right) - Shows on Hover */}
            <div className="w-0 group-hover:w-32 transition-all duration-300 overflow-hidden">
              <div className="w-32 h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/img1.png" 
                  alt="Investment background" 
                  className="w-full h-full object-cover rounded-lg group-hover:w-[50%] group-hover:absolute group-hover:top-0 group-hover:right-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 items-center">
          {/* First two stats */}
          <div className="space-y-6">
            {stats.slice(0, 2).map((stat, index) => (
              <div key={index} className="bg-[#FAFDFF] rounded-2xl p-6 shadow-lg min-h-[340px] flex flex-col justify-between">
                <div className="">
                  {stat.icon}
                </div>
                <div className="text-start">
                  <p className="text-2xl font-semibold text-gray-900 mb-2 font-poppins">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium text-lg font-inter max-w-[100px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="bg-[#FAFDFF] rounded-2xl p-6 shadow-lg min-h-[340px] flex items-center justify-center">
            <div className="w-full h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <img 
                src="/assets/img1.png" 
                alt="Modern living room interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Last two stats */}
          <div className="space-y-6">
            {stats.slice(2, 4).map((stat, index) => (
              <div key={index + 2} className="bg-[#FAFDFF] rounded-2xl p-6 shadow-lg min-h-[340px] flex flex-col justify-between">
                <div className="">
                  {stat.icon}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900 mb-2 font-poppins">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium text-sm font-inter max-w-[100px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 px-4">
          {/* Center Image First */}
          <div className="bg-[#FAFDFF] rounded-2xl p-4 shadow-lg min-h-[200px] flex items-center justify-center">
            <div className="w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <img 
                src="/assets/img1.png" 
                alt="Modern living room interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#FAFDFF] rounded-2xl p-4 shadow-lg min-h-[200px] flex flex-col justify-between">
                <div className="">
                  {stat.icon}
                </div>
                <div className="text-start mt-4">
                  <p className="text-xl font-semibold text-gray-900 mb-1 font-poppins">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium text-xs font-inter leading-tight max-w-[100px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
