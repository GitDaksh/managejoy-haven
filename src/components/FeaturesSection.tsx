
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    id: "tasks",
    title: "Task Management",
    description: "Create, organize, and prioritize tasks with intuitive drag-and-drop functionality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m9 15 3-3 3 3" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    ),
    image: "/lovable-uploads/07a51961-878a-428b-9562-b51e51228da2.png"
  },
  {
    id: "calendar",
    title: "Calendar View",
    description: "Plan your schedule with a visual calendar that seamlessly integrates with your tasks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
    image: "https://cdn.dribbble.com/users/1615584/screenshots/16142695/media/c74a224eea8a9aca749f0b1a2a319e06.jpg?resize=1600x1200&vertical=center"
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    description: "Work seamlessly with your team, assign tasks, and track progress in real-time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    image: "https://cdn.dribbble.com/users/2096507/screenshots/14485648/media/3d21eb3f99dcc9264907100b5a61dcf7.png?resize=1600x1200&vertical=center"
  },
  {
    id: "analytics",
    title: "Performance Analytics",
    description: "Gain insights into your productivity patterns with comprehensive analytics and reports.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    image: "https://cdn.dribbble.com/users/2376408/screenshots/15800848/media/09a4d94d33efba65a81ccf0840824a2a.png?resize=1600x1200&vertical=center"
  }
];

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("tasks");

  return (
    <section className="section bg-task-secondary/50 relative overflow-hidden py-16 md:py-24">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-task-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-task-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-medium text-task-primary mb-3">FEATURES</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Everything you need to manage work</h2>
          <p className="text-task-foreground/70">
            Our comprehensive suite of tools enables teams of all sizes to collaborate, track, and deliver projects on time.
          </p>
        </div>

        <Tabs defaultValue="tasks" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="md:w-1/3">
              <TabsList className="flex flex-col w-full bg-transparent space-y-1">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className={`flex items-start gap-4 p-4 rounded-lg text-left w-full transition-all ${
                      activeTab === feature.id
                        ? "bg-white shadow-sm border border-task-border/50"
                        : "hover:bg-white/50"
                    }`}
                  >
                    <span className={`mt-1 ${activeTab === feature.id ? "text-task-primary" : "text-task-muted"}`}>
                      {feature.icon}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className={`font-medium ${activeTab === feature.id ? "text-task-primary" : "text-task-foreground"}`}>
                        {feature.title}
                      </span>
                      <span className="text-sm text-task-foreground/70">
                        {feature.description}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="md:w-2/3 bg-white rounded-xl border border-task-border/50 p-1 shadow-lg overflow-hidden">
              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id} className="mt-0 w-full h-full">
                  <div className="relative rounded-lg overflow-hidden aspect-[16/10]">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
