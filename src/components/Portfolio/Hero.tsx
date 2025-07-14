import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with elegant overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Role Badge */}
          <Badge variant="outline" className="mb-8 px-6 py-3 text-lg border-primary/40 bg-card/60 backdrop-blur-md rounded-full shadow-glow">
            ✨ Professional Photography Services
          </Badge>

          {/* Name with enhanced styling */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            GS Photography
          </h1>
          <p className="text-2xl md:text-3xl text-primary/90 font-light mb-2 tracking-wide">Official</p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Capturing life's precious moments through artistic vision and creative storytelling.
            Creating timeless memories that last forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-105 px-8 py-4 rounded-full font-semibold">
              <Mail className="mr-2 h-5 w-5" />
              Book a Session
            </Button>
            <Button variant="outline" size="lg" className="border-primary/40 hover:bg-primary/20 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-full font-semibold backdrop-blur-sm">
              <Download className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <Button variant="ghost" size="icon" className="h-14 w-14 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-14 w-14 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-14 w-14 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Decorative floating elements */}
        <div className="absolute top-1/4 left-16 w-3 h-3 bg-accent/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-12 w-1 h-1 bg-accent/80 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <div className="w-1 h-20 bg-gradient-to-b from-primary via-accent to-transparent rounded-full mx-auto shadow-glow"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-light">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;