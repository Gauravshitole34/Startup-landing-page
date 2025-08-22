import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "gstartupindia202@gmail.com",
      subtitle: "We reply within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subtitle: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Pune, Maharashtra",
      subtitle: "Schedule a meeting"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and see how we can help transform your startup 
            with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-in-left animate">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Why Choose GStartupIndia?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 5+ years of experience in startup technology</li>
                <li>• 500+ successful projects delivered</li>
                <li>• 24/7 support and maintenance</li>
                <li>• Competitive pricing with flexible payment options</li>
                <li>• Dedicated team of expert developers</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right animate">
            <div className="bg-card p-8 rounded-lg border border-border card-hover">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company/Startup Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile App Development</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="digital-transformation">Digital Transformation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;