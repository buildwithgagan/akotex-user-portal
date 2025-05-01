
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  videoUrl: string;
  thumbnail: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Financial Advisor",
    company: "Capital Investments",
    content: "Akotex Wealth Compass has completely transformed how my clients approach investments. The platform's intuitive interface and diverse portfolio options make it easy to recommend.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Small Business Owner",
    company: "Tech Innovations",
    content: "As someone with limited financial experience, I was hesitant to start investing. Akotex made the process simple and transparent. My portfolio has seen consistent growth over the past year.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Olivia Rodriguez",
    role: "Retired Teacher",
    company: "",
    content: "I wanted a secure retirement plan that would give me peace of mind. The customer support team at Akotex guided me through every step, and I couldn't be happier with the results.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg",
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const handlePlayVideo = (id: number) => {
    setActiveVideo(id);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="py-24 px-4 bg-akotex-lightgray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Hear from Our Investors</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Listen to the success stories from our diverse community of investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 relative">
                <div 
                  className="relative aspect-video bg-gray-100 flex justify-center items-center overflow-hidden"
                >
                  {activeVideo === testimonial.id ? (
                    <div className="absolute inset-0">
                      <iframe
                        className="w-full h-full"
                        src={testimonial.videoUrl}
                        title={`Testimonial from ${testimonial.name}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <button 
                        className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full hover:bg-black"
                        onClick={handleCloseVideo}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img 
                        src={testimonial.thumbnail} 
                        alt={`${testimonial.name}'s testimonial`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex justify-center items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                          onClick={() => handlePlayVideo(testimonial.id)}
                        >
                          <Play className="h-8 w-8 text-white fill-white" />
                        </Button>
                      </div>
                      <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                      {testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-akotex-red text-akotex-red hover:bg-akotex-red hover:text-white">
            See More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
