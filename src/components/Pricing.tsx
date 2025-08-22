import { Check, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      price: "₹25,000",
      period: "per month",
      description: "Perfect for early-stage startups looking to establish their digital presence",
      features: [
        "Basic Website Development",
        "Mobile Responsive Design", 
        "SEO Optimization",
        "Basic Analytics Setup",
        "Email Support",
        "2 Revisions Included"
      ],
      popular: false,
      cta: "Start Basic Plan"
    },
    {
      name: "Growth",
      price: "₹65,000",
      period: "per month", 
      description: "Ideal for growing startups ready to scale their operations",
      features: [
        "Custom Web Application",
        "Mobile App Development",
        "Cloud Infrastructure Setup",
        "Advanced Analytics",
        "Priority Support (24/7)",
        "5 Revisions Included",
        "Basic Security Features",
        "API Integration"
      ],
      popular: true,
      cta: "Choose Growth Plan"
    },
    {
      name: "Enterprise",
      price: "₹150,000",
      period: "per month",
      description: "Comprehensive solution for established businesses aiming for market leadership",
      features: [
        "Full-Stack Development",
        "Custom Mobile Apps (iOS & Android)",
        "Advanced Cloud Solutions",
        "AI/ML Integration", 
        "Dedicated Account Manager",
        "Unlimited Revisions",
        "Advanced Security & Compliance",
        "Custom API Development",
        "Data Analytics Dashboard",
        "24/7 Premium Support"
      ],
      popular: false,
      cta: "Go Enterprise"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your startup's journey. All plans include our commitment 
            to delivering exceptional results and helping you achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-hover relative p-8 rounded-lg border ${
                plan.popular 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : 'border-border bg-card'
              } fade-in animate`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                  plan.popular 
                    ? 'btn-hero' 
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in animate" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We offer flexible pricing for unique requirements.
          </p>
          <a
            href="#contact"
            className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 group"
          >
            Contact us for custom pricing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;