import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Heart, 
  Camera, 
  Users, 
  Gift,
  Building2,
  Palette,
  Star
} from "lucide-react";

const Projects = () => {
  const photoGallery = [
    {
      title: "Romantic Wedding Collection",
      description: "A beautiful outdoor wedding ceremony capturing intimate moments between the couple and their families. Featured candid shots, emotional exchanges, and stunning portrait sessions.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      category: "Wedding Photography",
      icon: <Heart className="h-5 w-5" />,
      tags: ["Outdoor Wedding", "Romantic", "Candid Moments", "Portrait"],
      location: "Hyderabad Gardens"
    },
    {
      title: "Family Portrait Session",
      description: "Warm and joyful family photography session capturing three generations together. Natural lighting and authentic emotions created timeless family memories.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
      category: "Family Photography",
      icon: <Users className="h-5 w-5" />,
      tags: ["Family Portraits", "Multi-generation", "Natural Light", "Candid"],
      location: "Studio & Park Location"
    },
    {
      title: "Corporate Event Coverage",
      description: "Professional documentation of a major corporate conference including keynote speeches, networking sessions, and award ceremonies with high-quality business photography.",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop",
      category: "Corporate Photography",
      icon: <Building2 className="h-5 w-5" />,
      tags: ["Corporate Event", "Professional", "Conference", "Awards"],
      location: "Convention Center"
    },
    {
      title: "Birthday Celebration",
      description: "Colorful and vibrant birthday party photography featuring decorations, cake cutting ceremony, and joyful moments with friends and family in a festive atmosphere.",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop",
      category: "Event Photography",
      icon: <Gift className="h-5 w-5" />,
      tags: ["Birthday Party", "Celebration", "Colorful", "Fun Moments"],
      location: "Private Venue"
    },
    {
      title: "Fashion Portrait Series",
      description: "Creative fashion photography session featuring dramatic lighting, artistic poses, and contemporary styling. Focus on capturing personality and style in every frame.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
      category: "Fashion Photography",
      icon: <Palette className="h-5 w-5" />,
      tags: ["Fashion", "Creative Lighting", "Artistic", "Contemporary"],
      location: "Studio Session"
    },
    {
      title: "Maternity Photoshoot",
      description: "Gentle and elegant maternity photography celebrating the beautiful journey of motherhood with soft lighting and intimate moments captured in natural settings.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop",
      category: "Portrait Photography",
      icon: <Heart className="h-5 w-5" />,
      tags: ["Maternity", "Elegant", "Soft Lighting", "Natural"],
      location: "Outdoor Natural Setting"
    },
    {
      title: "Cultural Festival Documentation",
      description: "Vibrant documentation of traditional cultural festival featuring colorful costumes, traditional dances, and community celebrations with authentic cultural expressions.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      category: "Cultural Photography",
      icon: <Star className="h-5 w-5" />,
      tags: ["Cultural", "Traditional", "Festival", "Community"],
      location: "Cultural Center"
    },
    {
      title: "Professional Headshots",
      description: "Clean and professional headshot session for business professionals featuring modern lighting techniques and contemporary styling for LinkedIn and corporate use.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      category: "Professional Photography",
      icon: <Camera className="h-5 w-5" />,
      tags: ["Headshots", "Professional", "Business", "Clean Style"],
      location: "Professional Studio"
    },
    {
      title: "Anniversary Celebration",
      description: "Romantic anniversary photoshoot celebrating 25 years of marriage with elegant styling, meaningful props, and emotional moments captured in a beautiful garden setting.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      category: "Couple Photography",
      icon: <Heart className="h-5 w-5" />,
      tags: ["Anniversary", "Romantic", "Elegant", "Garden Setting"],
      location: "Botanical Gardens"
    }
  ];

  const categories = ["All", "Wedding Photography", "Family Photography", "Corporate Photography", "Event Photography", "Fashion Photography", "Portrait Photography"];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Photography Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of captured moments showcasing various photography styles 
            and memorable experiences we've had the honor to document
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-primary/20 transition-colors border-primary/30"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoGallery.map((photo, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              {/* Photo Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                    {photo.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <Badge variant="secondary" className="mb-3 bg-muted/50">
                  {photo.category}
                </Badge>

                {/* Photo Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {photo.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {photo.description}
                </p>

                {/* Location */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">
                    📍 {photo.location}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {photo.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline" 
                      className="text-xs border-primary/20 hover:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  size="sm" 
                  className="w-full bg-primary hover:bg-primary/90 transition-smooth"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Gallery
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Story?</h3>
              <p className="text-muted-foreground mb-6">
                Every moment is unique and deserves to be captured beautifully. Let's work together 
                to create stunning photographs that you'll treasure for a lifetime.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                <Camera className="mr-2 h-5 w-5" />
                Book Your Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;