import React from "react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: <img src="/assets/icon1.png" className="h-10 w-10" />,
      value: "$100M+",
      label: "Assets Under Management",
    },
    {
      icon: <img src="/assets/icon2.png" className="h-10 w-10" />,
      value: "10,000+",
      label: "Happy Investors",
    },
    {
      icon: <img src="/assets/icon3.png" className="h-10 w-10" />,
      value: "12.5%",
      label: "Avg. Annual Return",
    },
    {
      icon: <img src="/assets/icon4.png" className="h-10 w-10" />,
      value: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-900 mb-2 font-poppins">
            Explore a Smarter Way to Invest
          </h2>
          <p className="text-xl sm:text-2xl md:text-4xl text-akotex-red font-semibold font-poppins">
            — Trusted by Thousands
          </p>
        </div>

        {/* Desktop and Tablet Layout (md and above) */}
        <div className="hidden md:block">
          {/* Desktop Layout (lg and above) */}
          <div className="lg:flex gap-6 items-center justify-center flex-wrap space-y-4 lg:space-y-0 hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#FAFDFF] border border-[#E0E8EC] rounded-[20px] p-6 shadow-lg min-h-[340px] min-w-[250px] flex relative overflow-hidden group hover:bg-gray-900 transition-all duration-300"
              >
                <div className="flex flex-col justify-between flex-1 z-10">
                  <div>{stat.icon}</div>
                  <div className="text-start">
                    <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 font-poppins group-hover:text-white transition-colors duration-300">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 font-light text-sm sm:text-md font-poppins leading-tight group-hover:text-gray-200 transition-colors duration-300 max-w-[105px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
                <div className="w-0 group-hover:w-32 transition-all duration-300 overflow-hidden">
                  <div className="w-32 h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                    <img
                      src="/assets/img1.png"
                      alt="Investment background"
                      className="w-full h-full object-cover rounded-lg group-hover:w-[50%] group-hover:absolute group-hover:top-0 group-hover:right-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet Layout (md to lg) */}
          <div className="md:grid lg:hidden grid-cols-3 gap-6 items-center">
            <div className="space-y-6">
              {stats.slice(0, 2).map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#FAFDFF] rounded-2xl p-6 shadow-lg min-h-[300px] flex flex-col justify-between"
                >
                  <div>{stat.icon}</div>
                  <div className="text-start">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 font-poppins">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 font-medium text-sm font-inter max-w-[100px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#FAFDFF] rounded-2xl p-6 shadow-lg min-h-[300px] flex items-center justify-center">
              <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <img
                  src="/assets/img1.png"
                  alt="Modern living room interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              {stats.slice(2, 4).map((stat, index) => (
                <div
                  key={index + 2}
                  className="bg-[#FAFDFF] rounded-2xl p-6 shadow-lg min-h-[300px] flex flex-col justify-between"
                >
                  <div>{stat.icon}</div>
                  <div className="text-start">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 font-poppins">
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
        </div>

        {/* Mobile Layout (below md) */}
        <div className="md:hidden space-y-6 px-4">
          {/* Center Image First */}
          {/* <div className="bg-[#FAFDFF] rounded-2xl p-4 shadow-lg min-h-[180px] flex items-center justify-center">
            <div className="w-full h-24 sm:h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <img
                src="/assets/img1.png"
                alt="Modern living room interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

          {/* Stats Grid with Image Always Visible */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg min-h-[200px] flex flex-col justify-between overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col p-4">
                    {stat.icon}
                    <div className="text-start mt-4">
                      <p className="text-2xl font-extrabold text-white mb-1 font-poppins">
                        {stat.value}
                      </p>
                      <p className="text-gray-200 font-medium text-xs sm:text-sm font-inter leading-tight max-w-[100px]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src="/assets/img1.png"
                      alt="Investment background"
                      className="w-full h-full object-cover"
                    />
                  </div>
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