
import React from "react";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8 text-akotex-red" />,
      value: "$100M+",
      label: "Assets Under Management",
      description: "Total value managed"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      value: "10,000+",
      label: "Happy Investors",
      description: "Active user base"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      value: "12.5%",
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
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Explore a Smarter Way to Invest
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Join thousands of investors who trust Akotex with their financial future
          </p>
        </div>
        
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center h-64 flex flex-col justify-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Badge with Shadow */}
              <div className="mx-auto mb-6 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {stat.icon}
              </div>
              
              {/* Stat Value */}
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-akotex-red transition-colors duration-300">
                {stat.value}
              </p>
              
              {/* Stat Label */}
              <p className="text-gray-700 font-semibold mb-2 font-inter text-lg">
                {stat.label}
              </p>
              
              {/* Stat Description */}
              <p className="text-gray-500 text-sm font-inter">
                {stat.description}
              </p>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-akotex-red/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
