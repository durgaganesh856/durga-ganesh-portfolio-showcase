import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  TestTube, 
  Settings,
  Globe,
  Monitor,
  Zap,
  Target
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      color: "from-accent to-primary"
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "JavaScript", "SQL"],
      color: "from-primary to-secondary"
    },
    {
      title: "Testing & Automation",
      icon: <TestTube className="h-6 w-6" />,
      skills: ["Selenium WebDriver", "Test Automation", "Quality Assurance"],
      color: "from-secondary to-accent"
    },
    {
      title: "Adobe Campaign",
      icon: <Target className="h-6 w-6" />,
      skills: ["Campaign Development", "Workflow Automation", "Email Marketing", "Customer Journey"],
      color: "from-accent to-primary"
    },
    {
      title: "API & Integration",
      icon: <Globe className="h-6 w-6" />,
      skills: ["REST API", "SOAP API", "Postman", "API Testing", "Web Services"],
      color: "from-primary to-secondary"
    },
    {
      title: "Tools & Project Management",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Jira", "Version Control", "Agile Methodology"],
      color: "from-secondary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across development, testing, and marketing automation platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
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
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="bg-muted/50 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
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
                <Zap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Adobe Campaign Specialist</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Specialized in developing and optimizing Adobe Campaign solutions, creating automated workflows, 
                and implementing comprehensive testing strategies using modern development practices and API integrations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;