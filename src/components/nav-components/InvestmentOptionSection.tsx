import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { investmentOptions } from "../mock-data/dummy-data";
import SectionCarousel from "../home/SectionCarousel";

const InvestmentOptionSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20">
      <div
        className="max-w-8xl mx-auto"
        style={{
          background: "linear-gradient(180deg, #EEF4F8 0%, #FFFFFF 100%)",
          borderRadius: "30px",
        }}
      >
        <div className="mb-6 lg:mb-8 max-w-7xl mx-auto">
          <div className="inline-block bg-akotex-red/20 border border-akotex-red rounded-lg px-3 py-1 sm:px-4 sm:py-1 mb-4 sm:mb-6 mt-10">
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
        <SectionCarousel sections={investmentOptions} />
      </div>
    </section>
  );
};

export default InvestmentOptionSection;
