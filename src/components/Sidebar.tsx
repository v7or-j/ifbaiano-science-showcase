import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  return (
    <aside className="w-80 space-y-6">
      {/* Editor Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-if-green-dark">Editor-chefe</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium">Dr. João Silva Santos</p>
          <p className="text-sm text-muted-foreground mt-1">
            Instituto Federal Baiano
          </p>
        </CardContent>
      </Card>

      {/* Journal Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-if-green-dark">Informações da Revista</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="font-medium text-sm">Periodicidade:</p>
            <p className="text-sm text-muted-foreground">Trimestral</p>
          </div>
          <div>
            <p className="font-medium text-sm">ISSN:</p>
            <p className="text-sm text-muted-foreground">2675-1234</p>
          </div>
          <div>
            <p className="font-medium text-sm">Publicado por:</p>
            <p className="text-sm text-muted-foreground">
              Instituto Federal de Educação, Ciência e Tecnologia Baiano
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Call for Papers */}
      <Card className="bg-gradient-to-br from-if-red to-red-600 text-white">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Chamada para artigos</h3>
          <p className="text-sm mb-4">
            Submeta agora seu manuscrito para a próxima edição da revista.
          </p>
          <Button 
            variant="secondary" 
            className="w-full bg-white text-if-red hover:bg-gray-100"
          >
            Submeter Artigo
          </Button>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-if-green-dark">Estatísticas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm">Artigos publicados:</span>
            <Badge variant="secondary">127</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Edições publicadas:</span>
            <Badge variant="secondary">24</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Downloads totais:</span>
            <Badge variant="secondary">15.3k</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Recent Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-if-green-dark">Edições Recentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border-l-4 border-if-green pl-3">
            <p className="font-medium text-sm">Vol. 6, Nº 3 (2024)</p>
            <p className="text-xs text-muted-foreground">Setembro - Novembro</p>
          </div>
          <div className="border-l-4 border-if-green-light pl-3">
            <p className="font-medium text-sm">Vol. 6, Nº 2 (2024)</p>
            <p className="text-xs text-muted-foreground">Junho - Agosto</p>
          </div>
          <div className="border-l-4 border-muted pl-3">
            <p className="font-medium text-sm">Vol. 6, Nº 1 (2024)</p>
            <p className="text-xs text-muted-foreground">Março - Maio</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;