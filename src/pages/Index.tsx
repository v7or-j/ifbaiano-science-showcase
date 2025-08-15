import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Mock projects data based on the IF Baiano research areas
  const projects = [
    {
      id: "ifproj1",
      title: "Desenvolvimento de Culturas Sustentáveis no Semiárido Baiano",
      description: "Pesquisa sobre técnicas de agricultura sustentável adaptadas às condições climáticas do semiárido, focando em culturas resistentes à seca e métodos de conservação de água.",
      researchers: ["Dr. Maria Silva", "Dr. João Santos", "Dra. Ana Costa"],
      status: "Em Andamento" as const,
      startDate: "2024-01-15",
      category: "Agricultura Sustentável",
      publications: 3
    },
    {
      id: "ifproj2",
      title: "Tecnologias Agroecológicas para Pequenos Produtores",
      description: "Desenvolvimento e implementação de tecnologias agroecológicas acessíveis para pequenos produtores rurais, visando aumentar a produtividade e preservar o meio ambiente.",
      researchers: ["Dr. Carlos Lima", "Dra. Paula Oliveira"],
      status: "Concluído" as const,
      startDate: "2023-03-10",
      category: "Agroecologia",
      publications: 5
    },
    {
      id: "ifproj3",
      title: "Inovação em Sistemas de Irrigação Inteligente",
      description: "Criação de sistemas de irrigação automatizados com sensores IoT para otimização do uso da água na agricultura familiar e redução de custos operacionais.",
      researchers: ["Dr. Roberto Ferreira", "Dra. Lúcia Rocha", "Dr. Pedro Almeida"],
      status: "Em Andamento" as const,
      startDate: "2024-02-20",
      category: "Tecnologia Agrícola",
      publications: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Foco e Escopo */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-if-green mb-6 border-b-2 border-if-green-light pb-3">
                Foco e Escopo
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A <strong>Revista Científica IF Baiano - Pesquisa, Inovação e Desenvolvimento Rural</strong> é um periódico científico eletrônico 
                  multidisciplinar, com periodicidade trimestral. Publicamos artigos inéditos que contribuam para o avanço do conhecimento 
                  nas áreas de agricultura sustentável, agroecologia, tecnologia agrícola, desenvolvimento rural e ciências ambientais 
                  aplicadas ao contexto do semiárido brasileiro.
                </p>
                <p>
                  Nossa missão é promover a divulgação científica, o desenvolvimento da pesquisa e a socialização do conhecimento, 
                  priorizando trabalhos que abordem soluções inovadoras para os desafios do desenvolvimento rural sustentável no Nordeste 
                  brasileiro.
                </p>
              </div>
            </section>

            {/* Projetos em Destaque */}
            <section>
              <h2 className="text-2xl font-bold text-if-green mb-6 border-b-2 border-if-green-light pb-3">
                Projetos em Destaque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-if-green mb-3 text-lg leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <Badge className="bg-if-green-light text-if-green-dark hover:bg-if-green">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;