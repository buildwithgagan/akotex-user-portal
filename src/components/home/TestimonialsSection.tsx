
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";

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
    content: "Akotex Wealth Compass has completely transformed how my clients approach investments. The platform's intuitive interface and diverse portfolio options make it easy to recommend.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
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
  {
    id: 4,
    name: "David Kim",
    role: "Software Engineer",
    company: "TechCorp",
    content: "The real estate investment options through Akotex have been fantastic. I've been able to diversify my portfolio with properties I could never afford individually.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
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
        className={`h-5 w-5 ${
          i < rating ? 'text-akotex-red fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-akotex-lightgray via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-akotex-red/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-akotex-red font-inter">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">Hear from Our Investors</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter leading-relaxed">
            Don't just take our word for it. Listen to the success stories from our diverse community of satisfied investors.
          </p>
        </div>

        {/* Enhanced Carousel Container */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[0, 1, 2].map((offset) => {
              const testimonialIndex = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              
              return (
                <Card 
                  key={testimonial.id} 
                  className={`overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl ${
                    offset === 1 ? 'lg:scale-105 lg:z-10' : 'lg:scale-95'
                  }`}
                >
                  <CardContent className="p-8">
                    {/* Avatar and Info */}
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover shadow-lg"
                        />
                        {testimonial.verified && (
                          <CheckCircle className="absolute -bottom-1 -right-1 h-6 w-6 text-akotex-red bg-white rounded-full" />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="font-bold text-lg font-poppins">{testimonial.name}</h4>
                        <p className="text-gray-600 font-inter">
                          {testimonial.role}
                          {testimonial.company && `, ${testimonial.company}`}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-sm text-gray-600 font-inter">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-gray-700 italic leading-relaxed font-inter text-lg">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-gray-300 hover:border-akotex-red hover:text-akotex-red w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-akotex-red scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-gray-300 hover:border-akotex-red hover:text-akotex-red w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="border-2 border-akotex-red text-akotex-red hover:bg-akotex-red hover:text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
          >
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
