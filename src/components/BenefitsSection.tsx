import { Button } from "@/components/ui/button";
import { Check, Clock, DollarSign, Users, Target, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 80% Time",
    description: "Automate repetitive tasks and focus on growing your business"
  },
  {
    icon: DollarSign,
    title: "Reduce Costs by 60%",
    description: "Cut operational expenses with intelligent automation"
  },
  {
    icon: Users,
    title: "Scale Effortlessly",
    description: "Handle 10x more transactions without hiring more staff"
  },
  {
    icon: Target,
    title: "99.9% Accuracy",
    description: "AI-powered precision in all your business operations"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of Indian SMEs who have revolutionized their operations 
              with VYNA Labs' AI agents. Experience unprecedented efficiency and growth.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Button size="lg" className="bg-gradient-primary hover:shadow-hero transition-all duration-300">
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Transformation
            </Button>
          </div>
          
          <div className="animate-scale-in">
            <div className="bg-gradient-card rounded-3xl p-8 shadow-hero">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
                  <span className="text-muted-foreground">Manual Processing</span>
                  <span className="text-2xl font-bold text-red-500">8 hours</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-px h-8 bg-border"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-primary/10 rounded-xl border-2 border-primary/20">
                  <span className="text-foreground font-medium">With VYNA AI</span>
                  <span className="text-2xl font-bold text-primary">2 minutes</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Trusted by 1000+ SMEs across India</p>
                <div className="flex items-center justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">★</span>
                    </div>
                  ))}
                  <span className="ml-2 text-foreground font-semibold">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;