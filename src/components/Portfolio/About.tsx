import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      label: "Role",
      value: "Adobe Campaign Developer"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Experience",
      value: "Professional Developer"
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Specialization",
      value: "Marketing Automation"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Focus",
      value: "Full-Stack Development"
    }
  ];

  const expertise = [
    "Adobe Campaign Classic & Standard",
    "Email Marketing Automation",
    "Customer Journey Mapping",
    "API Integration & Testing",
    "Quality Assurance & Testing",
    "Web Development & Design"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and delivering exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/20 mr-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Durga Ganesh</h3>
                  <p className="text-primary font-medium">Adobe Campaign Developer</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                As an Adobe Campaign Developer, I specialize in creating sophisticated marketing automation 
                solutions and developing robust web applications. My expertise spans across frontend development, 
                backend programming, automated testing, and API integration, enabling me to deliver comprehensive 
                digital solutions that drive business success.
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

          {/* Expertise & Approach */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-secondary/20 mr-4">
                    <GraduationCap className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Core Expertise</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {expertise.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="h-6 w-6 text-accent mr-3" />
                  Development Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I believe in writing clean, maintainable code and following industry best practices. 
                  My approach combines technical excellence with user-centered design thinking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent/30">Quality Focused</Badge>
                  <Badge variant="outline" className="border-primary/30">API Integration</Badge>
                  <Badge variant="outline" className="border-secondary/30">Test Driven</Badge>
                  <Badge variant="outline" className="border-accent/30">Agile Methodology</Badge>
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