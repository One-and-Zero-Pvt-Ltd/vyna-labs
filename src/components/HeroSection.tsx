import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI Agents for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Indian SMEs</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Automate your billing, accounting, and inventory management with intelligent AI agents. 
              Built specifically for Indian small and medium enterprises.
            </p>
          </div>
          
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:shadow-hero transition-all duration-300 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:shadow-soft transition-all duration-300">
              Watch Demo
            </Button>
          </div>
          
          <div className="animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-hero transition-all duration-300">
                <Bot className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="font-semibold text-foreground mb-2">Smart Automation</h3>
                <p className="text-muted-foreground text-sm">AI agents handle repetitive tasks automatically</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-hero transition-all duration-300">
                <TrendingUp className="h-12 w-12 text-primary mb-4 animate-float" style={{ animationDelay: '1s' }} />
                <h3 className="font-semibold text-foreground mb-2">Growth Focused</h3>
                <p className="text-muted-foreground text-sm">Scale your business with intelligent insights</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-hero transition-all duration-300">
                <Zap className="h-12 w-12 text-primary mb-4 animate-float" style={{ animationDelay: '2s' }} />
                <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground text-sm">Process thousands of transactions in seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;