import { Code, Cloud, Smartphone, Shield, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and cloud platforms.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to boost your business efficiency.",
      features: ["AWS Integration", "Auto Scaling", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and customer data.",
      features: ["Threat Detection", "Data Encryption", "Compliance"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and AI solutions.",
      features: ["Business Intelligence", "Machine Learning", "Real-time Analytics"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes.",
      features: ["Process Automation", "Legacy Modernization", "Digital Strategy"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">IT Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your startup's growth 
            and establish a strong digital presence in the competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-hover bg-card p-8 rounded-lg border border-border fade-in animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;