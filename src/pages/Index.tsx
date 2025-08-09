import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projects = [
    {
      id: "ifproj1",
      title: "Desenvolvimento de Culturas Sustentáveis no Semiárido Baiano",
      description: "Pesquisa sobre técnicas de agricultura sustentável adaptadas às condições climáticas do semiárido, focando em culturas resistentes à seca e métodos de conservação de água.",
      researchers: ["Dr. Maria Oliveira", "Prof. Carlos Mendes", "Dra. Ana Santos"],
      status: "Em andamento" as const,
      startDate: "Janeiro 2024",
      category: "Agricultura Sustentável",
      publications: 2
    },
    {
      id: "ifproj2", 
      title: "Tecnologias Agroecológicas para Pequenos Produtores",
      description: "Desenvolvimento e implementação de tecnologias agroecológicas acessíveis para pequenos produtores rurais, visando aumentar a produtividade e preservar o meio ambiente.",
      researchers: ["Prof. João Silva", "Dra. Patrícia Lima", "Dr. Roberto Costa", "Profa. Lucia Ferreira"],
      status: "Publicado" as const,
      startDate: "Março 2023",
      category: "Agroecologia",
      publications: 5
    },
    {
      id: "ifproj3",
      title: "Inovação em Sistemas de Irrigação Inteligente",
      description: "Criação de sistemas de irrigação automatizados com sensores IoT para otimização do uso da água na agricultura familiar e redução de custos operacionais.",
      researchers: ["Dr. Marcos Andrade", "Profa. Helena Nunes"],
      status: "Concluído" as const,
      startDate: "Setembro 2023",
      category: "Tecnologia Agrícola",
      publications: 3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Focus and Scope */}
            <section>
              <h2 className="text-2xl font-bold text-if-green-dark mb-4">Foco e Escopo</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A <strong>Revista Científica IF Baiano - Pesquisa, Inovação e Desenvolvimento Rural</strong> é um 
                    periódico científico eletrônico multidisciplinar, com periodicidade trimestral. Publicamos artigos 
                    inéditos que contribuam para o avanço do conhecimento nas áreas de agricultura sustentável, 
                    agroecologia, tecnologia agrícola, desenvolvimento rural e ciências ambientais aplicadas ao 
                    contexto do semiárido brasileiro.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Nossa missão é promover a divulgação científica, o desenvolvimento da pesquisa e a socialização 
                    do conhecimento, priorizando trabalhos que abordem soluções inovadoras para os desafios do 
                    desenvolvimento rural sustentável no Nordeste brasileiro.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Featured Projects */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-if-green-dark">Projetos em Destaque</h2>
                <Button variant="outline" className="border-if-green text-if-green hover:bg-if-green hover:text-white">
                  Ver Todos os Projetos
                </Button>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </section>

            {/* Recent Publications */}
            <section>
              <h2 className="text-2xl font-bold text-if-green-dark mb-4">Publicações Recentes</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="border-l-4 border-if-green pl-4">
                    <h3 className="font-semibold text-if-green-dark">
                      Implementação de Sistemas Agroflorestais no Semiárido: Uma Análise Econômica e Ambiental
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Santos, M.O.; Mendes, C.A. | Vol. 6, Nº 3 (2024) | pp. 45-62
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-if-green-light pl-4">
                    <h3 className="font-semibold text-if-green-dark">
                      Tecnologias IoT Aplicadas à Agricultura de Precisão em Pequenas Propriedades
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Andrade, M.R.; Nunes, H.S. | Vol. 6, Nº 3 (2024) | pp. 23-41
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-if-blue pl-4">
                    <h3 className="font-semibold text-if-green-dark">
                      Agroecologia e Segurança Alimentar: Experiências no Território do Sisal
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Silva, J.P.; Lima, P.C.; Costa, R.F. | Vol. 6, Nº 2 (2024) | pp. 78-95
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Funding */}
            <section>
              <h2 className="text-2xl font-bold text-if-green-dark mb-4">Financiamento e Apoio</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    A Revista Científica IF Baiano é financiada e mantida pelo Instituto Federal de Educação, 
                    Ciência e Tecnologia Baiano, com apoio de agências de fomento à pesquisa.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="outline" className="border-if-green text-if-green">CAPES</Badge>
                    <Badge variant="outline" className="border-if-green text-if-green">CNPq</Badge>
                    <Badge variant="outline" className="border-if-green text-if-green">FAPESB</Badge>
                    <Badge variant="outline" className="border-if-green text-if-green">IF Baiano</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;