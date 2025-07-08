import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Durga Ganesh
            </h3>
            <p className="text-muted-foreground">
              Adobe Campaign Developer specializing in marketing automation, 
              web development, and quality assurance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <p className="text-muted-foreground text-sm">
              Ready to collaborate? Reach out for opportunities in Adobe Campaign development and web solutions.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="h-10 w-10 border-border/50 hover:bg-primary/10">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10 border-border/50 hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10 border-border/50 hover:bg-primary/10">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Durga Ganesh. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & TypeScript</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-border/50 hover:bg-primary/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;