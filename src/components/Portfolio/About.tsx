import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Heart, 
  Award, 
  Eye,
  Calendar,
  MapPin
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Camera className="h-5 w-5" />,
      label: "Specialty",
      value: "Portrait & Wedding Photography"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Experience",
      value: "5+ Years Professional"
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Style",
      value: "Artistic & Documentary"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Hyderabad, India"
    }
  ];

  const expertise = [
    "Wedding Photography",
    "Portrait Photography", 
    "Event Photography",
    "Corporate Photography",
    "Fashion Photography",
    "Product Photography"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About GS Photography
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about capturing authentic emotions and creating timeless memories through the art of photography
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/20 mr-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">GS Photography Official</h3>
                  <p className="text-primary font-medium">Professional Photographer</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 5 years of experience in professional photography, I specialize in capturing 
                life's most precious moments through creative storytelling and artistic vision. From intimate 
                weddings to corporate events, I bring passion and expertise to every shoot, ensuring that 
                each photograph tells a unique story that you'll treasure forever.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Photography Specialties */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-secondary/20 mr-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Photography Services</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {expertise.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-accent mr-3" />
                  Photography Philosophy
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I believe every moment has a story to tell. My approach combines technical excellence 
                  with creative artistry to capture authentic emotions and genuine connections.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent/30">Authentic Moments</Badge>
                  <Badge variant="outline" className="border-primary/30">Creative Vision</Badge>
                  <Badge variant="outline" className="border-secondary/30">Professional Quality</Badge>
                  <Badge variant="outline" className="border-accent/30">Personal Touch</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;