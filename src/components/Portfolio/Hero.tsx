import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Role Badge */}
          <Badge variant="outline" className="mb-6 px-4 py-2 text-lg border-primary/30 bg-card/50 backdrop-blur-sm">
            Professional Photography
          </Badge>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            GS Photography Official
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Capturing life's precious moments through artistic vision and creative storytelling.
            Creating timeless memories that last forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow transition-smooth">
              <Mail className="mr-2 h-5 w-5" />
              Book a Session
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 transition-smooth">
              <Download className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20 transition-smooth">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20 transition-smooth">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20 transition-smooth">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;