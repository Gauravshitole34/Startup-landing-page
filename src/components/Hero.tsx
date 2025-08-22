import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <div className="fade-in animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="gradient-text"> Cutting-Edge IT Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Empower your startup with world-class technology services. From web development to cloud solutions, 
            we help Indian startups scale globally with innovative IT strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="btn-hero inline-flex items-center gap-2 group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="btn-outline inline-flex items-center gap-2 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Watch Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="slide-in-left animate">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="slide-in-left animate" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="slide-in-right animate" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="slide-in-right animate" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-accent z-10 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
              title="GStartupIndia IT Services Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;