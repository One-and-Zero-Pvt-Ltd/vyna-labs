import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-xl font-bold text-foreground">VYNA Labs</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:flex">
            Sign In
          </Button>
          <Button className="bg-gradient-primary hover:shadow-soft transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;