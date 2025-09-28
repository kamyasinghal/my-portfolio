import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Zap } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      year: "2025",
      title: "2nd Runner-up in Mastering Hackathons Workshop",
      organization: "Hackathon Event",
      description: "Secured 2nd runner-up position in the mastering hackathons workshop competition",
      type: "Competition"
    },
    {
      icon: Zap,
      year: "2025",
      title: "Hackathon Participant",
      organization: "SIH, Felicity'25",
      description: "Participated in multiple online and offline hackathons including Smart India Hackathon and Felicity'25",
      type: "Participation"
    },
    {
      icon: Award,
      year: "2024",
      title: "1st Runner-up in District Level Chess",
      organization: "District Chess Championship",
      description: "Achieved 1st runner-up position in district level chess tournament",
      type: "Sports"
    },
    {
      icon: Star,
      year: "2024",
      title: "Workshop Volunteer",
      organization: "Futurix",
      description: "Volunteered in AI Mastery Workshop, Lens Lumina, and Tech Mesh organized by Futurix",
      type: "Volunteer"
    },
    {
      icon: Trophy,
      year: "Ongoing",
      title: "Competitive Programming",
      organization: "HackerRank, GFG, CodeChef",
      description: "Learning DSA in Java and solving competitive coding problems on various platforms",
      type: "Skill Development"
    },
    {
      icon: Award,
      year: "Ongoing",
      title: "Multi-Domain Explorer",
      organization: "Self Learning",
      description: "Gaining exposure to Web Development, AI/ML, Cloud Computing, Blockchain, and OODP",
      type: "Learning"
    }
  ];

  const stats = [
    { number: "100+", label: "Coding Challenges" },
    { number: "4+", label: "Years Experience" },
    { number: "10K+", label: "Lines of Code" },
    { number: "Multiple", label: "Group Projects" }
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