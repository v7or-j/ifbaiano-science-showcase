import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-if-green to-if-green-light py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end gap-4 text-sm text-white">
            <span>PORTUGUÊS</span>
            <span>ENGLISH</span>
            <span>ESPAÑOL</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-if-green to-if-green-dark rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-if-red rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green-light rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green-light rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green-light rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-if-green">
                Revista Científica IF Baiano
              </h1>
              <p className="text-lg text-if-green-dark">
                Pesquisa, Inovação e Desenvolvimento Rural
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-80">
            <Input
              placeholder="Buscar artigos, autores, temas..."
              className="pr-10"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-if-green text-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <a href="#" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors">
              INÍCIO
            </a>
            <a href="#" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors">
              SOBRE A REVISTA
            </a>
            <a href="#" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors">
              CORPO EDITORIAL
            </a>
            <a href="#" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors">
              INSTRUÇÕES E POLÍTICAS
            </a>
            <a href="#" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors">
              EDIÇÃO ATUAL
            </a>
            <a href="#" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors">
              ARQUIVO
            </a>
            <a href="#" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors">
              CONTATO
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;