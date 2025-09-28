import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Zap } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      year: "2023",
      title: "React Developer of the Year",
      organization: "Tech Awards",
      description: "Recognized for outstanding contributions to React development and community engagement",
      type: "Award"
    },
    {
      icon: Award,
      year: "2023",
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Contributing to popular open-source projects with 500+ merged PRs",
      type: "Recognition"
    },
    {
      icon: Star,
      year: "2022",
      title: "Featured Developer",
      organization: "Dev.to",
      description: "Featured in Dev.to's top developers list for technical writing and tutorials",
      type: "Feature"
    },
    {
      icon: Zap,
      year: "2022",
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      description: "First place in the web development category at TechCrunch Disrupt hackathon",
      type: "Competition"
    },
    {
      icon: Trophy,
      year: "2021",
      title: "Full-Stack Certification",
      organization: "AWS",
      description: "AWS Certified Solutions Architect and Full-Stack Developer certification",
      type: "Certification"
    },
    {
      icon: Award,
      year: "2021",
      title: "Team Lead Excellence",
      organization: "Previous Company",
      description: "Led a team of 6 developers to successfully deliver 15+ projects on time",
      type: "Leadership"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "100K+", label: "Lines of Code" },
    { number: "20+", label: "Happy Clients" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and recognition earned throughout my development journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card-gradient border-border shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-text-gradient bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold">{achievement.title}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {achievement.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm font-medium text-muted-foreground">
                        {achievement.organization}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{achievement.year}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;