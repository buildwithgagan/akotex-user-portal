
import React from "react";

const StatisticsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center hover:scale-105 transition-transform duration-300">
            <p className="text-3xl md:text-4xl font-bold text-akotex-red mb-2">$100M+</p>
            <p className="text-gray-600">Assets Under Management</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300">
            <p className="text-3xl md:text-4xl font-bold text-akotex-red mb-2">10,000+</p>
            <p className="text-gray-600">Happy Investors</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300">
            <p className="text-3xl md:text-4xl font-bold text-akotex-red mb-2">12.5%</p>
            <p className="text-gray-600">Avg. Annual Return</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300">
            <p className="text-3xl md:text-4xl font-bold text-akotex-red mb-2">24/7</p>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
