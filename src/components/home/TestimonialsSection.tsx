import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, CheckCircle, ArrowLeftFromLine, ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  verified: boolean;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Financial Advisor",
    company: "Capital Investments",
    content: "Akotex Investment has completely transformed how my clients approach investments. The platform's intuitive interface and diverse portfolio options make it easy to recommend.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Small Business Owner",
    company: "Tech Innovations",
    content: "As someone with limited financial experience, I was hesitant to start investing. Akotex made the process simple and transparent. My portfolio has seen consistent growth over the past year.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
  {
    id: 3,
    name: "Olivia Rodriguez", 
    role: "Retired Teacher",
    company: "",
    content: "I wanted a secure retirement plan that would give me peace of mind. The customer support team at Akotex guided me through every step, and I couldn't be happier with the results.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-[20.6px] w-[20.6px] ${
          i < rating ? 'text-[#FFCE5C] fill-current' : 'text-[#D9D9D9] fill-current'
        }`}
      />
    ));
  };

  return (
    <section className="px-4 lg:px-20">
      <div
        className="max-w-8xl mx-auto"
        style={{
          background: "linear-gradient(180deg, #EEF4F8 0%, #FFFFFF 100%)",
          borderRadius: "30px",
        }}
      >
        <div className="max-w-7xl mx-auto py-16">
          {/* Section Header */}
         <div className="flex justify-between"> <div className="mb-12 px-4">
            <h2 className="text-[52px] font-semibold mb-5 font-poppins leading-[1.15] text-black">
              Hear from Our Investors
            </h2>
            <p className="text-[20px] text-[#414141] font-normal font-poppins leading-[1.7] max-w-[670px]">
              Don't just take our word for it. Listen to the success stories from our diverse community of investors.
            </p>
          </div>
                      {/* Navigation */}
                      <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-[71px] h-[71px] border-[1px] border-black bg-[#F9FBFA] hover:bg-[#F9FBFA] hover:border-black"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              
              {/* Dots Indicator */}
              {/* <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-akotex-red scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div> */}
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-[71px] h-[71px] border-[1px] border-black bg-[#F9FBFA] hover:bg-[#F9FBFA] hover:border-black"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div></div>

          {/* Testimonials Container */}
          <div className="relative px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[0, 1].map((offset) => {
                const testimonialIndex = (currentIndex + offset) % testimonials.length;
                const testimonial = testimonials[testimonialIndex];
                
                return (
                  <Card 
                    key={testimonial.id} 
                    className="overflow-hidden border-[1px] border-[#D9E2E8] shadow-none hover:shadow-lg transition-all duration-500 bg-white rounded-[20px] backdrop-blur-[4px]"
                  >
                    <CardContent className="p-[60px]">
                      {/* Rating Stars */}
                      <div className="flex items-center mb-4 gap-[0.4px]">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-md text-black font-normal font-poppins leading-[2] mb-16">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Avatar and Info */}
                      <div className="flex items-center">
                        <div className="relative">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-[60px] h-[60px] rounded-[5px] object-cover"
                          />
                          {/* {testimonial.verified && (
                            <CheckCircle className="absolute -bottom-1 -right-1 h-6 w-6 text-akotex-red bg-white rounded-full" />
                          )} */}
                        </div>
                        <div className="ml-[18px]">
                          <h4 className="font-poppins font-medium text-xl text-black">{testimonial.name}</h4>
                          <p className="font-poppins font-light text-md text-[#A8A8A8]">
                            {testimonial.role}
                            {testimonial.company && `, ${testimonial.company}`}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
