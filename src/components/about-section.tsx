import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, Palette, Zap, Users } from "lucide-react";
import profileImage from "@/assets/profile.png";

const AboutSection = () => {
  const skills = [
    "C", "C++", "Java", "Python", "MySQL", 
    "Node.js", "React", "Tailwind CSS", "HTML"
  ];

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences and interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating with stakeholders"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves building exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile & Description */}
          <div className="space-y-6">
            {/* Profile Image for About Section */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Avatar className="w-40 h-40 border-4 border-primary shadow-glow">
                <AvatarImage src={profileImage} alt="Kamya Singhal" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a Computer Science student currently in my 2nd year, aspiring to become a full-stack developer while also exploring cybersecurity and AI. I enjoy building web projects, learning new technologies, and working on collaborative ideas that sharpen my skills.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not studying or coding, you'll often find me participating in college clubs, hosting events, or discovering new trends in tech and beyond.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 bg-card-gradient border border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;