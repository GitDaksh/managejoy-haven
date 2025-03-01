
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-task-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to streamline your workflow?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of teams that have transformed how they work with TaskFlow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-task-primary hover:bg-white/90 text-base px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          
          <p className="mt-6 text-white/70 text-sm">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
