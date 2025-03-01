
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="bg-task-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-task-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v14M2 9h20M7 20l5-5 5 5"/>
                </svg>
              </div>
              <span className="text-lg font-display font-bold text-task-foreground">TaskFlow</span>
            </Link>
            
            <p className="text-sm text-task-foreground/70 mb-6 max-w-xs">
              TaskFlow helps teams organize, track, and manage their work with intuitive tools designed for modern productivity.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-task-foreground/5 hover:bg-task-foreground/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-task-foreground/5 hover:bg-task-foreground/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-task-foreground/5 hover:bg-task-foreground/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-task-foreground/5 hover:bg-task-foreground/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-task-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-task-foreground/70 hover:text-task-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-task-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'Guides', 'API Reference', 'Community', 'Templates'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-task-foreground/70 hover:text-task-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-task-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Media Kit'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-task-foreground/70 hover:text-task-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-task-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-task-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-task-foreground/60 hover:text-task-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-task-foreground/60 hover:text-task-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-task-foreground/60 hover:text-task-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
