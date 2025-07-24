import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the AI revolution and give your SME the competitive edge it deserves. 
              Start your free trial today, no credit card required.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-3xl p-8 shadow-hero animate-scale-in mb-12">
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your business email"
                  className="flex-1 h-12 bg-background border-border focus:border-primary transition-colors"
                />
                <Button className="bg-gradient-primary hover:shadow-soft transition-all duration-300 h-12 px-6">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Free 30-day trial • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-6 bg-gradient-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300">
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Email Us</p>
                <p className="text-muted-foreground">hello@vynalabs.com</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-6 bg-gradient-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300">
              <Phone className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Call Us</p>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;