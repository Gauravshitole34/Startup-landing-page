import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development", 
    "Cloud Solutions",
    "Cybersecurity",
    "Data Analytics",
    "Digital Transformation"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">GStartupIndia</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Empowering Indian startups with world-class technology solutions. 
              From web development to AI integration, we help businesses scale 
              globally with innovative IT strategies.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>gstartupindia202@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © 2025 GStartupIndia. All rights reserved. | Transforming startups with technology.
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;