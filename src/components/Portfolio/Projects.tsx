import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Target, 
  Globe, 
  TestTube,
  Database,
  Mail,
  Smartphone
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Adobe Campaign Email Automation Platform",
      description: "Developed a comprehensive email marketing automation system using Adobe Campaign Classic. Built custom workflows for customer journey mapping, A/B testing, and personalized content delivery with advanced segmentation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Adobe Campaign", "JavaScript", "SQL", "HTML/CSS", "API Integration"],
      category: "Adobe Campaign Development",
      icon: <Target className="h-5 w-5" />,
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Automated customer segmentation",
        "Real-time campaign analytics",
        "Multi-channel orchestration"
      ]
    },
    {
      title: "E-commerce Testing Automation Suite",
      description: "Built a comprehensive Selenium WebDriver testing framework for an e-commerce platform. Automated end-to-end testing scenarios including user registration, product search, cart management, and checkout processes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Jira"],
      category: "Test Automation",
      icon: <TestTube className="h-5 w-5" />,
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Cross-browser compatibility testing",
        "Automated regression testing",
        "Detailed test reporting"
      ]
    },
    {
      title: "REST API Integration Dashboard",
      description: "Created a modern web dashboard for managing and monitoring multiple REST and SOAP APIs. Features real-time API health monitoring, request/response logging, and automated API testing with Postman collections.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["JavaScript", "HTML5", "Bootstrap", "REST API", "SOAP API", "Postman"],
      category: "API Development",
      icon: <Database className="h-5 w-5" />,
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time API monitoring",
        "Automated API testing",
        "Performance analytics"
      ]
    },
    {
      title: "Campaign Performance Analytics Portal",
      description: "Developed a responsive web application for visualizing Adobe Campaign performance metrics. Integrated with multiple data sources to provide comprehensive insights into email campaign effectiveness and customer engagement.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Adobe Campaign API"],
      category: "Web Development",
      icon: <Globe className="h-5 w-5" />,
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Interactive data visualizations",
        "Real-time campaign metrics",
        "Responsive design"
      ]
    },
    {
      title: "Customer Journey Mapping Tool",
      description: "Built an interactive tool for mapping and optimizing customer journeys in Adobe Campaign. Features drag-and-drop workflow builder, trigger management, and performance tracking across multiple touchpoints.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      technologies: ["Adobe Campaign", "JavaScript", "CSS3", "API Integration", "Workflow Automation"],
      category: "Marketing Automation",
      icon: <Mail className="h-5 w-5" />,
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Visual workflow builder",
        "Multi-channel triggers",
        "Journey performance analytics"
      ]
    },
    {
      title: "Mobile App Testing Framework",
      description: "Developed a mobile testing automation framework using Selenium for web views and API testing for mobile applications. Includes device compatibility testing and performance monitoring across iOS and Android platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Java", "Selenium", "Mobile Testing", "API Testing", "Jira"],
      category: "Mobile Testing",
      icon: <Smartphone className="h-5 w-5" />,
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Cross-platform testing",
        "API endpoint validation",
        "Performance benchmarking"
      ]
    }
  ];

  const categories = ["All", "Adobe Campaign Development", "Test Automation", "API Development", "Web Development", "Marketing Automation", "Mobile Testing"];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in Adobe Campaign development, automation testing, 
            and full-stack web solutions
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <Badge variant="secondary" className="mb-3 bg-muted/50">
                  {project.category}
                </Badge>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="text-xs border-primary/20 hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 transition-smooth"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6">
                These projects represent my passion for creating efficient, scalable solutions 
                in Adobe Campaign development and automation testing. Let's discuss how I can 
                contribute to your next project.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                <Mail className="mr-2 h-5 w-5" />
                Let's Collaborate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;