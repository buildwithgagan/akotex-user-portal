
import React from "react";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8 text-akotex-red" />,
      value: "$500K+",
      label: "AUM",
      description: "Assets Under Management"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      value: "10,000+",
      label: "Happy Investors",
      description: "Active user base"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      value: "10.1%",
      label: "Avg. Annual Return",
      description: "Historical performance"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      value: "24/7",
      label: "Customer Support",
      description: "Always available"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Explore a Smarter Way to Invest
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Join thousands of investors who trust Akotex with their financial future
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md">
                {stat.icon}
              </div>
              
              {/* Stat Value */}
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-poppins">
                {stat.value}
              </p>
              
              {/* Stat Label */}
              <p className="text-gray-700 font-semibold mb-1 font-inter">
                {stat.label}
              </p>
              
              {/* Stat Description */}
              <p className="text-gray-500 text-sm font-inter">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
