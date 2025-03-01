
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    quote: "TaskFlow has transformed how our team collaborates. We've increased productivity by 35% since implementation.",
    author: "Sarah Johnson",
    role: "Project Manager",
    company: "Designly",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "The intuitive interface and powerful features make TaskFlow the perfect solution for our remote team spread across 3 continents.",
    author: "Michael Chen",
    role: "CTO",
    company: "TechNova",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "We evaluated 7 different project management tools and TaskFlow was the clear winner for our marketing team's workflow needs.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthMatrix",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gradient-to-b from-white to-task-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-sm font-medium text-task-primary mb-3">TESTIMONIALS</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Loved by teams worldwide</h2>
          <p className="text-task-foreground/70">
            See why thousands of teams trust TaskFlow to manage their projects and workflows effectively.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="absolute -top-5 left-10 text-task-primary text-7xl opacity-20">"</div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-task-foreground/90 font-display mb-8">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                />
                
                <div>
                  <h4 className="font-semibold text-task-foreground">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-sm text-task-foreground/70">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
                
                <div className="ml-auto flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevTestimonial}
                    className="rounded-full h-10 w-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextTestimonial}
                    className="rounded-full h-10 w-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-task-primary" : "w-2 bg-task-border"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
