
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-sm font-medium text-task-primary mb-3">PRICING</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-task-foreground/70">
            Choose the plan that's right for you and your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-task-secondary rounded-xl border border-task-border p-8 transition-all hover:shadow-md hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-task-foreground/70 text-sm mb-6">Perfect for individuals</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-task-foreground/70 ml-2">/ month</span>
            </div>
            
            <Button className="w-full mb-8 bg-task-foreground text-white hover:bg-task-foreground/90">
              Start Free Trial
            </Button>
            
            <ul className="space-y-4">
              {["Up to 10 projects", "Basic task management", "Calendar view", "24/7 support"].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <Check className="text-task-success h-5 w-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-xl border-2 border-task-primary p-8 shadow-lg shadow-task-primary/5 relative">
            <div className="absolute top-0 right-8 bg-task-primary text-white text-xs font-medium py-1 px-3 rounded-b-lg translate-y-0">
              POPULAR
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-task-foreground/70 text-sm mb-6">Great for small teams</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-task-foreground/70 ml-2">/ month</span>
            </div>
            
            <Button className="w-full mb-8 bg-task-primary hover:bg-task-primary/90 text-white">
              Start Free Trial
            </Button>
            
            <ul className="space-y-4">
              {[
                "Unlimited projects",
                "Advanced task management",
                "Team collaboration",
                "Calendar & Gantt views",
                "Automations (100/month)",
                "Priority support"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <Check className="text-task-success h-5 w-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-task-secondary rounded-xl border border-task-border p-8 transition-all hover:shadow-md hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-task-foreground/70 text-sm mb-6">For larger organizations</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-task-foreground/70 ml-2">/ month</span>
            </div>
            
            <Button className="w-full mb-8 bg-task-foreground text-white hover:bg-task-foreground/90">
              Contact Sales
            </Button>
            
            <ul className="space-y-4">
              {[
                "Everything in Professional",
                "SSO & advanced security",
                "Unlimited automations",
                "Custom integrations",
                "Dedicated account manager",
                "99.9% uptime SLA"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <Check className="text-task-success h-5 w-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-task-foreground/70 mb-4">
            Need a custom plan for your team? We can help.
          </p>
          <Button variant="outline" className="inline-flex items-center gap-2">
            Contact Sales
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
