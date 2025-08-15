import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Logo and Institution Name */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            {/* IF Baiano Logo */}
            <div className="flex items-center space-x-3">
              <div className="grid grid-cols-3 gap-1">
                <div className="w-2 h-2 bg-if-red rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
                <div className="w-2 h-2 bg-if-green rounded-sm"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">INSTITUTO FEDERAL</h2>
                <p className="text-sm text-gray-700 -mt-1">Baiano</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-if-green text-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex space-x-0">
            <a
              href="#"
              className="py-4 px-6 hover:bg-if-green-dark transition-colors font-medium border-r border-if-green-dark"
            >
              HOME
            </a>
            <a
              href="#"
              className="py-4 px-6 hover:bg-if-green-dark transition-colors border-r border-if-green-dark"
            >
              CORPO EDITORIAL
            </a>
            <a
              href="#"
              className="py-4 px-6 hover:bg-if-green-dark transition-colors border-r border-if-green-dark"
            >
              INSTRUÇÃO E POLÍTICA
            </a>
            <a
              href="#"
              className="py-4 px-6 hover:bg-if-green-dark transition-colors border-r border-if-green-dark"
            >
              EDIÇÃO ATUAL
            </a>
            <a
              href="#"
              className="py-4 px-6 hover:bg-if-green-dark transition-colors border-r border-if-green-dark"
            >
              ACERVO
            </a>
            <a
              href="#"
              className="py-4 px-6 hover:bg-if-green-dark transition-colors"
            >
              CONTATO
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;