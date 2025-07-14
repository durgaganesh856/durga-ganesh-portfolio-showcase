import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Heart, 
  Users, 
  Building2,
  Palette,
  Gift,
  Star,
  Clock
} from "lucide-react";

const Skills = () => {
  const serviceCategories = [
    {
      title: "Wedding Photography",
      icon: <Heart className="h-6 w-6" />,
      services: ["Bridal Portraits", "Ceremony Coverage", "Reception Photography", "Pre-Wedding Shoots"],
      color: "from-accent to-primary"
    },
    {
      title: "Portrait Photography",
      icon: <Users className="h-6 w-6" />,
      services: ["Individual Portraits", "Family Photography", "Professional Headshots", "Maternity Shoots"],
      color: "from-primary to-secondary"
    },
    {
      title: "Event Photography",
      icon: <Gift className="h-6 w-6" />,
      services: ["Birthday Parties", "Anniversary Celebrations", "Cultural Events", "Private Functions"],
      color: "from-secondary to-accent"
    },
    {
      title: "Commercial Photography",
      icon: <Building2 className="h-6 w-6" />,
      services: ["Corporate Events", "Product Photography", "Business Portraits", "Brand Photography"],
      color: "from-accent to-primary"
    },
    {
      title: "Creative Services",
      icon: <Palette className="h-6 w-6" />,
      services: ["Fashion Photography", "Artistic Portraits", "Creative Concepts", "Editorial Shoots"],
      color: "from-primary to-secondary"
    },
    {
      title: "Special Packages",
      icon: <Star className="h-6 w-6" />,
      services: ["Custom Packages", "Multi-Day Events", "Destination Shoots", "Photo Albums"],
      color: "from-secondary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Photography Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive photography services tailored to capture your most precious moments with professional excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.services.map((service, serviceIndex) => (
                    <Badge 
                      key={serviceIndex}
                      variant="secondary" 
                      className="bg-muted/50 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Focus */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Why Choose GS Photography?</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With years of experience and a passion for storytelling through imagery, we deliver 
                exceptional photography services that capture authentic emotions and create lasting memories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="font-medium">Professional Timeline</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Star className="h-6 w-6 text-primary" />
                  <span className="font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <span className="font-medium">Personal Touch</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;