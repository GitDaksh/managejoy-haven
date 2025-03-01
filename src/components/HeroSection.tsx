
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    // Here you would typically send this to your backend or newsletter service
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-task-highlight/10 to-transparent"></div>
      <div className="absolute -top-24 left-1/3 w-72 h-72 bg-task-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-task-primary/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-task-secondary border border-task-primary/10 text-task-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-task-primary mr-2"></span>
            Simplify your workflow today
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-task-foreground leading-tight mb-6 animate-slide-up">
            Manage tasks with <span className="text-task-primary">seamless</span> efficiency
          </h1>

          <p className="text-lg text-task-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            TaskFlow helps teams organize, track, and manage their work with intuitive tools designed for modern productivity. Get more done, with less stress.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-task-border bg-white focus:outline-none focus:ring-2 focus:ring-task-primary/20 focus:border-task-primary transition-all"
              required
            />
            <Button type="submit" className="bg-task-primary hover:bg-task-primary/90 text-white px-6 py-3">
              Get Started
            </Button>
          </form>

          <div className="flex items-center gap-2 text-sm text-task-muted animate-slide-up" style={{ animationDelay: '300ms' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>No credit card required · 14-day free trial</span>
          </div>
        </div>

        {/* Dashboard Preview - Fixed with proper image and styling */}
        <div className="mt-16 md:mt-20 relative animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-task-background to-transparent z-10 h-[20%] bottom-0"></div>
          <div className="relative z-0 rounded-xl overflow-hidden border border-task-border shadow-2xl mx-auto max-w-5xl">
            <img 
              src="/lovable-uploads/ac0c25e3-a287-4a91-aaf5-4e5463a10689.png" 
              alt="TaskFlow Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
