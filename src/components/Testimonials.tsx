import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      company: "Mumbai",
      testimonial: "GStartupIndia transformed our entire digital infrastructure. Their expertise in cloud solutions helped us scale from 10 to 1000+ users seamlessly. Outstanding service and support!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma", 
      role: "Founder, EcoVenture",
      company: "Bangalore",
      testimonial: "The mobile app they developed for us exceeded all expectations. User engagement increased by 300% within the first month. Highly recommended for any startup looking to go digital!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      role: "CTO, FinanceFlow",
      company: "Delhi",
      testimonial: "Their cybersecurity solutions gave us the confidence to handle sensitive financial data. The team's attention to detail and commitment to security is unparalleled.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what successful startup founders and 
            business leaders have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-hover bg-card p-8 rounded-lg border border-border relative fade-in animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  <p className="text-primary text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in animate" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">4.9/5</span> Average Rating
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div>
              <span className="font-semibold">150+</span> Happy Clients
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div>
              <span className="font-semibold">99%</span> Success Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;