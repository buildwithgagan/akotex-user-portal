import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { testimonials } from "../mock-data/dummy-data";
import TestimonialTabs from "../dashboard/Investor";

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-[20.6px] w-[20.6px] ${
          i < rating
            ? "text-[#FFCE5C] fill-current"
            : "text-[#D9D9D9] fill-current"
        }`}
      />
    ));
  };

  // Create a duplicated array for seamless infinite scroll
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
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
          {/* Section Header */}
          <div className="flex flex-col justify-between">
            <div className="mb-8 lg:mb-12 px-4">
              <div className="inline-block bg-akotex-red/20 border border-akotex-red rounded-lg px-3 py-1 sm:px-4 sm:py-1 mb-4 sm:mb-6">
                <span className="text-md text-akotex-red font-black">
                  Success Stories
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[52px] font-semibold mb-4 sm:mb-5 font-poppins leading-[1.15] text-black">
                Hear from Our Investors
              </h2>
              <p className="text-base sm:text-lg md:text-[20px] text-[#414141] font-normal font-poppins leading-[1.7] max-w-[670px]">
                Don't just take our word for it. Listen to the success stories
                from our diverse community of investors.
              </p>
            </div>

            <div className="mb-8 lg:mb-28 px-4">
              <TestimonialTabs />
            </div>
          </div>

          {/* Testimonials Container with Horizontal Auto-scroll */}
          <div
            className="relative px-4 overflow-hidden"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <div className="pointer-events-none absolute top-0 left-0 h-full w-28 blur-2xl z-10" />
            <div className="pointer-events-none absolute top-0 right-0 h-full w-28 blur-2xl z-10" />

            <div
              className={`flex gap-6 sm:gap-8 transition-transform duration-1000 ${
                isPaused ? "animate-none" : "animate-slide-left"
              }`}
              style={{
                width: `${duplicatedTestimonials.length * 400}px`, // Adjust based on card width
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <Card
                  key={`${testimonial.id}-${index}`}
                  className="overflow-hidden border-[1px] border-[#D9E2E8] shadow-none hover:shadow-lg transition-all duration-500 bg-white rounded-[20px] backdrop-blur-[4px] max-w-[350px] lg:max-w-2xl flex-shrink-0"
                >
                  <CardContent className="p-6 sm:p-[60px]">
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4 gap-[0.4px]">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-sm sm:text-md text-black font-normal font-poppins leading-[2] mb-8 lg:mb-10">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Avatar and Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-[5px] object-cover"
                        />
                      </div>
                      <div className="ml-4 sm:ml-[18px]">
                        <h4 className="font-poppins font-medium text-base sm:text-xl text-black">
                          {testimonial.name}
                        </h4>
                        <p className="font-poppins font-light text-sm sm:text-md text-[#A8A8A8]">
                          {testimonial.role}
                          {testimonial.company && `, ${testimonial.company}`}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for the sliding animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slide-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${testimonials.length * 400}px);
            }
          }
          
          .animate-slide-left {
            animation: slide-left ${testimonials.length * 6}s linear infinite;
          }
        `,
        }}
      />
    </section>
  );
};

export default TestimonialsSection;
