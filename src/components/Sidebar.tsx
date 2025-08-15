import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Editor Chefe */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-bold text-if-green mb-4 text-lg border-b border-gray-200 pb-2">
          Editor Chefe
        </h3>
        <div>
          <p className="font-semibold text-gray-800">Dr. João Silva Santos</p>
          <p className="text-sm text-gray-600">Instituto Federal Baiano</p>
        </div>
      </div>

      {/* Informações da Revista */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-bold text-if-green mb-4 text-lg border-b border-gray-200 pb-2">
          Informações da Revista
        </h3>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-gray-700">Periodicidade:</p>
            <p className="text-sm text-gray-600">Semestral</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Publicado por</p>
            <p className="text-sm text-gray-600">Instituto Federal de Educação, Ciência e Tecnologia Baiano</p>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-bold text-if-green mb-4 text-lg border-b border-gray-200 pb-2">
          Estatísticas
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Artigos publicados:</span>
            <span className="font-bold text-if-green bg-if-green-light px-2 py-1 rounded text-sm">
              127
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Edições publicadas:</span>
            <span className="font-bold text-if-green bg-if-green-light px-2 py-1 rounded text-sm">
              24
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;