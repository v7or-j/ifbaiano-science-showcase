import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, FileText } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  researchers: string[];
  status: "Em andamento" | "Concluído" | "Publicado";
  startDate: string;
  category: string;
  publications?: number;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  researchers, 
  status, 
  startDate, 
  category,
  publications = 0 
}: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento": return "bg-if-blue text-white";
      case "Concluído": return "bg-if-green text-white";
      case "Publicado": return "bg-if-red text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg text-if-green-dark">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Badge className={getStatusColor(status)}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Project Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{startDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{researchers.length} pesquisadores</span>
            </div>
            {publications > 0 && (
              <div className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>{publications} publicações</span>
              </div>
            )}
          </div>

          {/* Category */}
          <div>
            <Badge variant="secondary">{category}</Badge>
          </div>

          {/* Researchers */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Equipe:</p>
            <div className="flex flex-wrap gap-1">
              {researchers.map((researcher, index) => (
                <span 
                  key={index}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                >
                  {researcher}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">
              Ver Detalhes
            </Button>
            <Button variant="default" size="sm" className="flex-1 bg-if-green hover:bg-if-green-dark">
              Publicações
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;