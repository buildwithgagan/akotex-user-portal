import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface InvestmentOption {
  icon: string;
  title: string;
  description: string;
  minInvestment: string;
  avgReturn: string;
  image?: string;
}

interface SectionCarouselProps {
  title?: string;
  subtitle?: string;
  description?: string;
  sections: InvestmentOption[];
}

const SectionCarousel: React.FC<SectionCarouselProps> = ({
  title = "Diversified",
  subtitle = "Investment Portfolios",
  description = "Choose from our professionally managed investment portfolios tailored to meet your financial goals.",
  sections,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveCardIndex(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 lg:py-32">
      {/* Layout */}
      <div className="flex relative overflow-clip">
        {/* Scrollable Sections */}
        <div className="flex-1">
          {sections.map((option, index) => (
            <motion.section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="h-[70vh] flex items-center justify-center py-12"
              initial={{ filter: "blur(4px)", opacity: 0.6 }}
              animate={{
                filter: activeCardIndex === index ? "blur(0px)" : "blur(4px)",
                opacity: activeCardIndex === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-xl w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-900 rounded-[10px] p-2 flex-shrink-0">
                    <img
                      src={option.icon}
                      alt={option.title}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold font-poppins text-akotex-red">
                    {option.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-4xl font-black font-inter mb-4 leading-normal">
                  {option.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div>
                    <p className="text-gray-500 font-inter">
                      Minimum Investment
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {option.minInvestment}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-inter">
                      Avg. Annual Return
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {option.avgReturn}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Sticky Image */}
        <div className="w-[50%] hidden lg:flex items-center justify-center sticky top-1/2 -translate-y-1/2 h-0">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-md w-full max-w-lg"
            key={sections[activeCardIndex]?.image || "default"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {sections[activeCardIndex]?.image && (
              <img
                src={sections[activeCardIndex].image}
                alt={sections[activeCardIndex].title}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
