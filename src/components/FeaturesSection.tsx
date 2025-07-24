import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Package, Brain, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Intelligent Billing",
    description: "Automated invoice generation, GST compliance, and payment tracking with AI-powered accuracy.",
    color: "text-blue-500"
  },
  {
    icon: FileText,
    title: "Smart Accounting",
    description: "Real-time bookkeeping, expense categorization, and financial reporting powered by machine learning.",
    color: "text-green-500"
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Predictive stock management, automated reordering, and demand forecasting for optimal inventory levels.",
    color: "text-purple-500"
  },
  {
    icon: Brain,
    title: "AI Decision Support",
    description: "Get intelligent recommendations for pricing, inventory, and business strategies based on your data.",
    color: "text-orange-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into business performance with customizable dashboards and predictive analytics.",
    color: "text-cyan-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with data encryption, audit trails, and compliance with Indian regulations.",
    color: "text-red-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agents work 24/7 to streamline your business operations, 
            reduce manual work, and provide intelligent insights for growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-0 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;